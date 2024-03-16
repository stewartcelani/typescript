import { createRootRouteWithContext } from '@tanstack/react-router';
import Layout from '@components/__layout.tsx';
import type { QueryClient } from '@tanstack/react-query';

interface RouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootRoute
});

function RootRoute() {
  return <Layout />;
}
