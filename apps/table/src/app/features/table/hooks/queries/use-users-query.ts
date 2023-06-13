import { User, fetchAllUsers, parseAllUsers } from '@kongsberg/table/fetch';
import { useQuery } from '@tanstack/react-query';

export function useUsersQuery() {
  return useQuery<User[]>(['users'], async () => {
    const response = await fetchAllUsers();
    const users = parseAllUsers(response);

    return users;
  });
}

export default useUsersQuery;
