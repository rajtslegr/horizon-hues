import Layout from '@layout/components/Layout';
import SunriseSunset from '@sunrise-sunset/components/SunriseSunset';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Layout>
      <SunriseSunset />
    </Layout>
  </QueryClientProvider>
);

export default App;
