import { Post, fetchAllPosts, parseAllPosts } from '@kongsberg/table/fetch';
import { useQuery } from '@tanstack/react-query';

export function usePostsQuery(userId?: string) {
  return useQuery<Post[]>(['posts', userId], async () => {
    const response = await fetchAllPosts(userId);

    return parseAllPosts(response);
  });
}

export default usePostsQuery;
