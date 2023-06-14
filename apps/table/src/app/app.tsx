import { BrowserRouter } from 'react-router-dom';

import { Hero } from './features/hero/components/hero/hero';
import { Table } from './features/table/components/table/table';
import { DefaultLayout } from './layouts/default-layout/default-layout';
import { ReactQueryProvider } from './react-query';

export function App() {
  return (
    <ReactQueryProvider>
      <BrowserRouter>
        <DefaultLayout>
          <Hero />
          <Table />
        </DefaultLayout>
      </BrowserRouter>
    </ReactQueryProvider>
  );
}

export default App;
