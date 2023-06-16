import { useIntersection } from '@mantine/hooks';
import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { MoreInfoComment } from '../../components/more-info-comment/more-info-comment';
import { TableHeader } from '../../components/table-header/table-header';
import { TableRowAccordion } from '../../components/table-row-accordion/table-row-accordion';
import { useCommentsQuery } from '../../hooks/queries/use-comments-query';

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
                detailsBody={<MoreInfoComment comment={comment} />}
                ref={ref}
              />
            ))}
      </tbody>
    </>
  );
}

export default StepComments;
