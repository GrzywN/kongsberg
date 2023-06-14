import { User, fetchAllUsers, parseAllUsers } from '@kongsberg/table/fetch';
import { useQuery } from '@tanstack/react-query';

export function useUsersQuery() {
  return useQuery<User[]>(['users'], async () => {
    const response = await fetchAllUsers();

    return parseAllUsers(response);
  });
}

export default useUsersQuery;
