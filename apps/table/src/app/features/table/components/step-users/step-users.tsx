import { KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { useUsersQuery } from '../../hooks/queries/use-users-query';

export function StepUsers() {
  const { isLoading, isError, data: usersData } = useUsersQuery();
  const navigate = useNavigate();

  if (isError) {
    return <caption>An error occurred!</caption>;
  }

  if (isLoading || !usersData) {
    return <caption>Loading...</caption>;
  }

  const handleUserRowClick = () => {
    return (userId: number) => {
      navigate(`/posts/${userId}`);
    };
  };

  const handleUserRowKeyboardPress = (event: KeyboardEvent) => {
    const ENTER = 'Enter';

    return (userId: number) => {
      if (event.key === ENTER) {
        navigate(`/posts/${userId}`);
      }
    };
  };

  return (
    <>
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
          <th scope="col" className="px-6 py-3">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {usersData.map((user) => {
          return (
            <tr
              className="bg-white cursor-auto hover:bg-neutral-300 even:bg-neutral-50 odd:bg-neutral-100"
              key={user.id}
              role="button"
              tabIndex={0}
              onClick={() => handleUserRowClick()(user.id)}
              onKeyDown={(e) => handleUserRowKeyboardPress(e)(user.id)}
            >
              <td className="px-6 py-4">{user.name}</td>
              <td className="px-6 py-4">{user.username}</td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{user.phone}</td>
              <td className="pr-6 py-4 grid md:flex gap-2">
                <button
                  className="cursor-pointer ml-auto transition-colors bg-primary-600 hover:bg-primary-700 text-neutral-100 p-4 rounded-lg w-full md:w-auto"
                  type="button"
                  onClick={() => console.log(123)}
                >
                  Read more
                </button>
                <button
                  className="cursor-pointer transition-colors bg-neutral-600 hover:bg-neutral-700 text-neutral-50 p-4 rounded-lg"
                  type="button"
                  onClick={() => console.log(123)}
                >
                  See its posts
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </>
  );
}

export default StepUsers;
