import { useIntersection } from '@mantine/hooks';
import { KeyboardEvent, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ENTER } from '../../../../shared/utils/constants';
import { routes } from '../../../../shared/utils/routes';
import { usePostsQuery } from '../../hooks/queries/use-posts-query';
import { PostBody } from '../post-body/post-body';
import { TableHeader } from '../table-header/table-header';
import { TableNextStepButton } from '../table-next-step-button/table-next-step-button';
import { TableRowAccordion } from '../table-row-accordion/table-row-accordion';

export function StepPosts() {
  const { userId } = useParams();
  const {
    isLoading,
    isError,
    data: postsData,
    fetchNextPage,
    isFetchingNextPage,
  } = usePostsQuery(userId);
  const navigate = useNavigate();

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

  const handleGoToPostCommentsClick = () => {
    return (postId: number) => {
      navigate(routes.table.comments.url(String(userId), String(postId)));
    };
  };

  const handleGoToPostCommentsKeyboardPress = (event: KeyboardEvent) => {
    return (postId: number) => {
      if (event.key === ENTER) {
        navigate(routes.table.comments.url(String(userId), String(postId)));
      }
    };
  };

  const shouldDisplayLoadingState = isLoading || isFetchingNextPage;

  return (
    <>
      <TableHeader>
        <TableHeader.Column
          text="Post title"
          isLoading={shouldDisplayLoadingState}
        />
        <TableHeader.Column
          text="Action"
          isLoading={shouldDisplayLoadingState}
          alignRight
        />
      </TableHeader>
      <tbody>
        {postsData &&
          postsData.pages
            .flatMap((page) => page)
            .map((post) => {
              return (
                <TableRowAccordion
                  key={post.id}
                  itemKey={post.id}
                  cols={[
                    post.title,
                    <TableNextStepButton
                      text="See post comments"
                      onClick={() => handleGoToPostCommentsClick()(post.id)}
                      onKeyDown={(e) =>
                        handleGoToPostCommentsKeyboardPress(e)(post.id)
                      }
                    />,
                  ]}
                  detailsBody={<PostBody post={post} />}
                  ref={ref}
                />
              );
            })}
      </tbody>
    </>
  );
}

export default StepPosts;
