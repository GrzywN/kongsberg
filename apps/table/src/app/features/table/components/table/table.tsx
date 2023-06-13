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
    <div className="bg-white relative overflow-x-auto shadow-md sm:rounded-lg max-h-[37.125rem]">
      <table className="w-full text-sm text-left text-neutral-700 font-semibold">
        <thead className="sticky top-0 text-base text-primary-900 uppercase bg-neutral-50 font-bold">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Username
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Phone number
            </th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user) => {
            return (
              <tr
                className="bg-white cursor-pointer hover:bg-neutral-300 even:bg-neutral-50 odd:bg-neutral-100"
                key={user.id}
              >
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.username}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
