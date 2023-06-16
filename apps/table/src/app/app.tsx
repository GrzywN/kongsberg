import { BrowserRouter } from 'react-router-dom';

import { Hero } from './features/hero/components/hero/hero';
import { DefaultLayout } from './layouts/default-layout/default-layout';
import { ReactQueryProvider } from './react-query';
import { AppRoutes } from './routes';

export function App() {
  return (
    <ReactQueryProvider>
      <BrowserRouter>
        <DefaultLayout>
          <Hero />
          <AppRoutes />
        </DefaultLayout>
      </BrowserRouter>
    </ReactQueryProvider>
  );
}

export default App;
