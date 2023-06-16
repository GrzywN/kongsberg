import { BrowserRouter } from 'react-router-dom';

import { GlobalLayout } from './layouts/global-layout/global-layout';
import { ReactQueryProvider } from './react-query';
import { AppRoutes } from './routes';

export function App() {
  return (
    <ReactQueryProvider>
      <BrowserRouter>
        <GlobalLayout>
          <AppRoutes />
        </GlobalLayout>
      </BrowserRouter>
    </ReactQueryProvider>
  );
}

export default App;
