import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Hero } from './features/hero/components/hero/hero';
import { Table } from './features/table/components/table/table';
import { DefaultLayout } from './layouts/default-layout/default-layout';
import { ReactQueryProvider } from './react-query';
import { routes } from './shared/utils/routes';

const StepUsers = lazy(() => import('./features/table/components/step-users/step-users'));
const StepPosts = lazy(() => import('./features/table/components/step-posts/step-posts'));
const StepComments = lazy(() => import('./features/table/components/step-comments/step-comments'));

// TODO: add table step skeleton / loading ui state

export function App() {
  return (
    <ReactQueryProvider>
      <BrowserRouter>
        <DefaultLayout>
          <Hero />
          <Routes>
            <Route path={routes.home.path} element={<h1>And this is the home page! Go to /table/users</h1>} />
            <Route path="table" element={<Table />}>
              <Route path={routes.table.users.path} element={<Suspense fallback={<h1>Is loading...</h1>}><StepUsers /></Suspense>} />
              <Route path={routes.table.posts.path} element={<Suspense fallback={<h1>Is loading...</h1>}><StepPosts /></Suspense>} />
              <Route
                path={routes.table.comments.path}
                element={<Suspense fallback={<h1>Is loading...</h1>}><StepComments /></Suspense>}
              />
              <Route index element={<caption>And this is an empty table. Go to /table/users</caption>} />
            </Route>
          </Routes>
        </DefaultLayout>
      </BrowserRouter>
    </ReactQueryProvider>
  );
}

export default App;
