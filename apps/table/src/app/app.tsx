import { Table } from './features/table/components/table/table';
import { ReactQueryProvider } from './react-query';

export function App() {
  return (
    <ReactQueryProvider>
      <Table />
    </ReactQueryProvider>
  );
}

export default App;
