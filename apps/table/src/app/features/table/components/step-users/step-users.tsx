import { KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { ENTER } from '../../../../shared/utils/constants';
import { routes } from '../../../../shared/utils/routes';
import { useUsersQuery } from '../../hooks/queries/use-users-query';
import { TableNextStepButton } from '../table-next-step-button/table-next-step-button';
import { TableRowAccordion } from '../table-row-accordion/table-row-accordion';

export function StepUsers() {
  const { isLoading, isError, data: usersData } = useUsersQuery();
  const navigate = useNavigate();

  if (isError) {
    return <caption>An error occurred!</caption>;
  }

  if (isLoading || !usersData) {
    return <caption>Loading...</caption>;
  }

  const handleGoToUserPostsClick = () => {
    return (userId: number) => {
      navigate(routes.table.posts.url(String(userId)));
    };
  };

  const handleGoToUserPostsKeyboardPress = (event: KeyboardEvent) => {
    return (userId: number) => {
      if (event.key === ENTER) {
        navigate(routes.table.posts.url(String(userId)));
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
          <th scope="col" className="px-6 py-3 text-right">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {usersData.map((user) => (
          <TableRowAccordion
            key={user.id}
            itemKey={user.id}
            cols={[
              user.name,
              user.username,
              user.email,
              user.phone,
              <TableNextStepButton
                text="See user posts"
                onClick={() => handleGoToUserPostsClick()(user.id)}
                onKeyDown={(e) => handleGoToUserPostsKeyboardPress(e)(user.id)}
              />,
            ]}
            detailsBody={JSON.stringify(user.address)}
          />
        ))}
      </tbody>
    </>
  );
}

export default StepUsers;
