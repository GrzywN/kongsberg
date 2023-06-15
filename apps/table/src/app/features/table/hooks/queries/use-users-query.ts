import { User, fetchUsers, parseUsers } from '@kongsberg/table/fetch';
import { useInfiniteQuery } from '@tanstack/react-query';

export function useUsersQuery() {
  return useInfiniteQuery<User[]>(
    ['users'],
    async ({ pageParam = 1 }) => {
      const response = await fetchUsers(pageParam);

      return parseUsers(response);
    },
    {
      getNextPageParam: (_, pages) => {
        return pages.length + 1;
      },
    }
  );
}

export default useUsersQuery;
