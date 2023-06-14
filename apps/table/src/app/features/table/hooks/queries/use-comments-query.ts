import {
  Comment,
  fetchAllComments,
  parseAllComments,
} from '@kongsberg/table/fetch';
import { useQuery } from '@tanstack/react-query';

export function useCommentsQuery(postId?: string) {
  return useQuery<Comment[]>(['comments', postId], async () => {
    const response = await fetchAllComments(postId);

    return parseAllComments(response);
  });
}

export default useCommentsQuery;
