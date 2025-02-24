
import './App.css'
import Hello from './Gello'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Hello />
    </QueryClientProvider>
  );
}

export default App
