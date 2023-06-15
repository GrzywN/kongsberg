import {
  Comment,
  fetchComments,
  parseAllComments,
} from '@kongsberg/table/fetch';
import { useInfiniteQuery } from '@tanstack/react-query';

export function useCommentsQuery(postId?: string) {
  return useInfiniteQuery<Comment[]>(
    ['posts', postId],
    async ({ pageParam = 1 }) => {
      const response = await fetchComments(pageParam, postId);

      return parseAllComments(response);
    },
    {
      getNextPageParam: (_, pages) => {
        return pages.length + 1;
      },
    }
  );
}

export default useCommentsQuery;
