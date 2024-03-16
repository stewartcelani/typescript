import Counter from '@components/common/Counter';
import { useAuth } from '@/auth/AuthProvider.tsx';

export default function Index() {
  const authContext = useAuth();

  return (
    <>
      <h1>Index Page</h1>
      <p>Welcome, {authContext.user!.name}</p>
      <Counter />
      <pre>{JSON.stringify(authContext, null, 2)}</pre>
    </>
  );
}
