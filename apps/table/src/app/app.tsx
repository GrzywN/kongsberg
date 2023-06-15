import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Hero } from './features/hero/components/hero/hero';
import { StepComments } from './features/table/components/step-comments/step-comments';
import { StepPosts } from './features/table/components/step-posts/step-posts';
import { StepUsers } from './features/table/components/step-users/step-users';
import { Table } from './features/table/components/table/table';
import { DefaultLayout } from './layouts/default-layout/default-layout';
import { ReactQueryProvider } from './react-query';
import { routes } from './shared/utils/routes';

export function App() {
  return (
    <ReactQueryProvider>
      <BrowserRouter>
        <DefaultLayout>
          <Hero />
          <Routes>
            <Route path={routes.home.path} element={<h1>And this is the home page! Go to /table/users</h1>} />
            <Route path="table" element={<Table />}>
              <Route path={routes.table.users.path} element={<StepUsers />} />
              <Route path={routes.table.posts.path} element={<StepPosts />} />
              <Route
                path={routes.table.comments.path}
                element={<StepComments />}
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
