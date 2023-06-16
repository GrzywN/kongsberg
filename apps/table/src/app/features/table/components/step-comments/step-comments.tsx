import { useIntersection } from '@mantine/hooks';
import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { useCommentsQuery } from '../../hooks/queries/use-comments-query';
import { CommentBody } from '../comment-body/comment-body';
import { TableHeader } from '../table-header/table-header';
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

  const shouldDisplayLoadingState = isLoading || isFetchingNextPage;

  return (
    <>
      <TableHeader>
        <TableHeader.Column text="ID" isLoading={shouldDisplayLoadingState} />
        <TableHeader.Column
          text="Comment title"
          isLoading={shouldDisplayLoadingState}
        />
        <TableHeader.Column
          text="Email"
          isLoading={shouldDisplayLoadingState}
          alignRight
        />
      </TableHeader>
      <tbody>
        {commentsData &&
          commentsData.pages
            .flatMap((page) => page)
            .map((comment) => (
              <TableRowAccordion
                key={comment.id}
                itemKey={comment.id}
                cols={[comment.id, comment.name, comment.email]}
                detailsBody={<CommentBody comment={comment} />}
                ref={ref}
              />
            ))}
      </tbody>
    </>
  );
}

export default StepComments;
