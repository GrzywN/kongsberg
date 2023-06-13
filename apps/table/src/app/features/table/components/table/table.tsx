import { useUsersQuery } from '../../hooks/queries/use-users-query';

export function Table() {
  const { isLoading, isError, data: usersData } = useUsersQuery();

  if (isError) {
    return 'An error occured!';
  }

  if (isLoading) {
    return 'Loading...';
  }

  if (!usersData) return;

  return (
    <table>
      <thead>
        <th>Username</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone number</th>
      </thead>
      <tbody>
        {usersData.map(user => {
          return (<tr>
            <td>{user.username}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
          </tr>)
        })}
      </tbody>
    </table>
  );
}

export default Table;
