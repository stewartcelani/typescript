import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Outlet } from '@tanstack/react-router';
import Header from '@components/common/Header';

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
