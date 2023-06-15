import { useIntersection } from '@mantine/hooks';
import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { useCommentsQuery } from '../../hooks/queries/use-comments-query';
import { CommentBody } from '../comment-body/comment-body';
import { TableRowAccordion } from '../table-row-accordion/table-row-accordion';

export function StepComments() {
  const { postId } = useParams();
  const {
    isLoading,
    isError,
    data: commentsData,
    fetchNextPage,
    isFetchingNextPage,
  } = useCommentsQuery(postId);

  const lastPostRef = useRef<HTMLElement>(null);
  const { ref, entry } = useIntersection({
    root: lastPostRef.current,
    threshold: 1,
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      fetchNextPage();
    }
  }, [entry, fetchNextPage]);

  if (isError) {
    return <caption>An error occurred!</caption>;
  }

  if (isLoading || !commentsData) {
    return <caption>Loading...</caption>;
  }

  const _commentsData = commentsData.pages.flatMap((page) => page);

  return (
    <>
      <thead className="sticky top-0 text-base text-primary-900 uppercase bg-neutral-50 font-bold">
        <tr>
          <th scope="col" className="px-6 py-3">
            Comment title
          </th>
          <th scope="col" className="px-6 py-3 text-right">
            Email
          </th>
        </tr>
      </thead>
      <tbody>
        {_commentsData.map((comment) => (
          <TableRowAccordion
            key={comment.id}
            itemKey={comment.id}
            cols={[comment.name, comment.email]}
            detailsBody={<CommentBody comment={comment} />}
            ref={ref}
          />
        ))}
        {isFetchingNextPage && (
          <tr>
            <td>Next page is loading...</td>
          </tr>
        )}
      </tbody>
    </>
  );
}

export default StepComments;
