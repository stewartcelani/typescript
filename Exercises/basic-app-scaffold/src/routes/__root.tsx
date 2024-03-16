import { createRootRouteWithContext } from '@tanstack/react-router';
import Layout from '@components/__layout.tsx';
import type { QueryClient } from '@tanstack/react-query';
import type { AuthContext } from '@/auth/authContext';

interface RouterContext {
  queryClient: QueryClient;
  authContext: AuthContext;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootRoute
});

function RootRoute() {
  return <Layout />;
}
