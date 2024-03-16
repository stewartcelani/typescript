import Counter from '@components/Counter.tsx';
import { useAuth } from '@hooks/useAuth.ts';
import { appRoles } from '@config/authConfig.ts';
import AuthorizeView from '@components/auth/AuthorizeView.tsx';

export default function Dashboard() {
  const authContext = useAuth();

  return (
    <>
      <h1>Dashboard</h1>
      <p>Welcome, {authContext.user!.name}</p>
      <AuthorizeView anyRole={[appRoles.counterView, appRoles.counterView]}>
        <Counter />
      </AuthorizeView>
      <pre>{JSON.stringify(authContext, null, 2)}</pre>
    </>
  );
}
