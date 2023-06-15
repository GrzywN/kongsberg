import { KeyboardEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ENTER } from '../../../../shared/utils/constants';
import { routes } from '../../../../shared/utils/routes';
import { usePostsQuery } from '../../hooks/queries/use-posts-query';
import { TableNextStepButton } from '../table-next-step-button/table-next-step-button';
import { TableRowAccordion } from '../table-row-accordion/table-row-accordion';

export function StepPosts() {
  const { userId } = useParams();
  const { isLoading, isError, data: postsData } = usePostsQuery(userId);
  const navigate = useNavigate();

  if (isError) {
    return <caption>An error occurred!</caption>;
  }

  if (isLoading || !postsData) {
    return <caption>Loading...</caption>;
  }

  const handlePostRowClick = () => {
    return (postId: number) => {
      navigate(routes.table.comments.url(String(postId)));
    };
  };

  const handlePostRowKeyboardPress = (event: KeyboardEvent) => {
    return (postId: number) => {
      if (event.key === ENTER) {
        navigate(routes.table.comments.url(String(postId)));
      }
    };
  };

  return (
    <>
      <thead className="sticky top-0 text-base text-primary-900 uppercase bg-neutral-50 font-bold">
        <tr>
          <th scope="col" className="px-6 py-3">
            Post title
          </th>
          <th scope="col" className="px-6 py-3 text-right">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {postsData.map((post) => {
          return (
            <TableRowAccordion
              key={post.id}
              itemKey={post.id}
              cols={[
                post.title,
                <TableNextStepButton
                  text="See post comments"
                  onKeyDown={(e) => handlePostRowKeyboardPress(e)(post.id)}
                />,
              ]}
              detailsBody={post.body}
            />
          );
        })}
      </tbody>
    </>
  );
}

export default StepPosts;
