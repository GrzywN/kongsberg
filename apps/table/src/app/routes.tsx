import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

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
      <Route
        path={routes.home.path}
        element={<h1>And this is the home page! Go to /table/users</h1>}
      />
      <Route path="table" element={<Table />}>
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
