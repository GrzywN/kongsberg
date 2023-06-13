import { ReactQueryProvider } from './react-query';

export function App() {
  return (
    <ReactQueryProvider>
      <h1 className="text-primary-600 text-7xl">Hello, world!</h1>
    </ReactQueryProvider>
  );
}

export default App;
