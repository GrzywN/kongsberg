import { KeyboardEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { usePostsQuery } from '../../hooks/queries/use-posts-query';

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
      navigate(`/comments/${postId}`);
    };
  };

  const handlePostRowKeyboardPress = (event: KeyboardEvent) => {
    const ENTER = 'Enter';

    return (postId: number) => {
      if (event.key === ENTER) {
        navigate(`/comments/${postId}`);
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
            <tr
              className="bg-white cursor-auto hover:bg-neutral-300 even:bg-neutral-50 odd:bg-neutral-100"
              key={post.id}
              role="button"
              tabIndex={0}
              onClick={() => handlePostRowClick()(post.id)}
              onKeyDown={(e) => handlePostRowKeyboardPress(e)(post.id)}
            >
              <td className="px-6 py-4">{post.title}</td>
              <td className="pr-6 py-4 grid md:flex gap-2">
                <button
                  className="cursor-pointer ml-auto transition-colors bg-primary-600 hover:bg-primary-700 text-neutral-100 p-4 rounded-lg w-full md:w-auto"
                  type="button"
                >
                  See this post
                </button>
                <button
                  className="cursor-pointer transition-colors bg-neutral-600 hover:bg-neutral-700 text-neutral-50 p-4 rounded-lg"
                  type="button"
                >
                  See its comments
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </>
  );
}

export default StepPosts;
