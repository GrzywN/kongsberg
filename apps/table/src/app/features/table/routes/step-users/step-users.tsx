import { useIntersection } from '@mantine/hooks';
import { KeyboardEvent, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { ENTER } from '../../../../shared/utils/constants';
import { routes } from '../../../../shared/utils/routes';
import { MoreInfoUser } from '../../components/more-info-user/more-info-user';
import { TableHeader } from '../../components/table-header/table-header';
import { TableNextStepButton } from '../../components/table-next-step-button/table-next-step-button';
import { TableRowAccordion } from '../../components/table-row-accordion/table-row-accordion';
import { useUsersQuery } from '../../hooks/queries/use-users-query';

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

  const shouldDisplayLoadingState = isLoading || isFetchingNextPage;

  return (
    <>
      <TableHeader>
        <TableHeader.Column text="ID" isLoading={shouldDisplayLoadingState} />
        <TableHeader.Column text="Name" isLoading={shouldDisplayLoadingState} />
        <TableHeader.Column
          text="Username"
          isLoading={shouldDisplayLoadingState}
        />
        <TableHeader.Column
          text="Email"
          isLoading={shouldDisplayLoadingState}
        />
        <TableHeader.Column
          text="Phone number"
          isLoading={shouldDisplayLoadingState}
        />
        <TableHeader.Column
          text="Action"
          isLoading={shouldDisplayLoadingState}
          alignRight
        />
      </TableHeader>
      <tbody>
        {usersData &&
          usersData.pages
            .flatMap((page) => page)
            .map((user) => (
              <TableRowAccordion
                key={user.id}
                itemKey={user.id}
                cols={[
                  user.id,
                  user.name,
                  user.username,
                  user.email,
                  user.phone,
                  <TableNextStepButton
                    text="See user posts"
                    onClick={() => handleGoToUserPostsClick()(user.id)}
                    onKeyDown={(e) =>
                      handleGoToUserPostsKeyboardPress(e)(user.id)
                    }
                  />,
                ]}
                detailsBody={
                  <>
                    <MoreInfoUser user={user} />
                    <TableNextStepButton
                      className="mt-4 lg:hidden"
                      text="See user posts"
                      onClick={() => handleGoToUserPostsClick()(user.id)}
                      onKeyDown={(e) =>
                        handleGoToUserPostsKeyboardPress(e)(user.id)
                      }
                    />
                  </>
                }
                ref={ref}
              />
            ))}
      </tbody>
    </>
  );
}

export default StepUsers;
