import { Post, fetchPosts, parsePosts } from '@kongsberg/table/fetch';
import { useInfiniteQuery } from '@tanstack/react-query';

export function usePostsQuery(userId?: string) {
  return useInfiniteQuery<Post[]>(
    ['posts', userId],
    async ({ pageParam = 1 }) => {
      const response = await fetchPosts(pageParam, userId);

      return parsePosts(response);
    },
    {
      getNextPageParam: (_, pages) => {
        return pages.length + 1;
      },
    }
  );
}

export default usePostsQuery;
