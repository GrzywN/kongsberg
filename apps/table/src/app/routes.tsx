import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { RecruitmentTaskView } from './features/recruitment-task/containers/recruitment-task-view/recruitment-task-view';
import { TableView } from './features/table/containers/table-view/table-view';
import { routes } from './shared/utils/routes';

const StepUsers = lazy(
  () => import('./features/table/routes/step-users/step-users')
);
const StepPosts = lazy(
  () => import('./features/table/routes/step-posts/step-posts')
);
const StepComments = lazy(
  () => import('./features/table/routes/step-comments/step-comments')
);

export function AppRoutes() {
  return (
    <Routes>
      <Route path={routes.home.path} element={<RecruitmentTaskView />} />
      <Route path="table" element={<TableView />}>
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
