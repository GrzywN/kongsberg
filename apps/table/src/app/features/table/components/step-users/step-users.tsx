import { useIntersection } from '@mantine/hooks';
import { KeyboardEvent, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { ENTER } from '../../../../shared/utils/constants';
import { routes } from '../../../../shared/utils/routes';
import { useUsersQuery } from '../../hooks/queries/use-users-query';
import { DetailedUserInfo } from '../detailed-user-info/detailed-user-info';
import { TableNextStepButton } from '../table-next-step-button/table-next-step-button';
import { TableRowAccordion } from '../table-row-accordion/table-row-accordion';

export function StepUsers() {
  const {
    isLoading,
    isError,
    data: usersData,
    fetchNextPage,
    isFetchingNextPage,
  } = useUsersQuery();
  const navigate = useNavigate();

  const lastUserRef = useRef<HTMLElement>(null);
  const { ref, entry } = useIntersection({
    root: lastUserRef.current,
    threshold: 1,
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      fetchNextPage();
    }
  }, [entry, fetchNextPage]);

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

  const _usersData = usersData.pages.flatMap((page) => page);

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
        {_usersData.map((user) => (
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
            detailsBody={<DetailedUserInfo user={user} />}
            ref={ref}
          />
        ))}
        {isFetchingNextPage && (
          <tr>
            <td>Next page is loading...</td>
          </tr>
        )}
      </tbody>
    </>
  );
}

export default StepUsers;
