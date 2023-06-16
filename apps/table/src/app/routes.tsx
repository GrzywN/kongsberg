import { Hero } from '@kongsberg/shared/ui';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { RecruitmentTaskView } from './features/recruitment-task/containers/recruitment-task-view/recruitment-task-view';
import { Table } from './features/table/components/table/table';
import { routes } from './shared/utils/routes';

const StepUsers = lazy(
  () => import('./features/table/components/step-users/step-users')
);
const StepPosts = lazy(
  () => import('./features/table/components/step-posts/step-posts')
);
const StepComments = lazy(
  () => import('./features/table/components/step-comments/step-comments')
);

export function AppRoutes() {
  return (
    <Routes>
      <Route path={routes.home.path} element={<RecruitmentTaskView />} />
      <Route
        path="table"
        element={
          <>
            <Hero
              title="Select a user and see his posts"
              subtitle={
                <>
                  After that you can select a post and see its comments{' '}
                  <span role="img" aria-label="Shushing Face">
                    🤫
                  </span>
                </>
              }
            />
            <Table />
          </>
        }
      >
        <Route
          path={routes.table.users.path}
          element={
            <Suspense>
              <StepUsers />
            </Suspense>
          }
        />
        <Route
          path={routes.table.posts.path}
          element={
            <Suspense>
              <StepPosts />
            </Suspense>
          }
        />
        <Route
          path={routes.table.comments.path}
          element={
            <Suspense>
              <StepComments />
            </Suspense>
          }
        />
        <Route index element={<h1>Not found!</h1>} />
      </Route>
    </Routes>
  );
}
