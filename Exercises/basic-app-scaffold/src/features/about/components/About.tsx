import Counter from '@components/Counter.tsx';
import AuthorizeView from '@components/auth/AuthorizeView.tsx';
import { appRoles } from '@config/authConfig.ts';

export default function About() {
  return (
    <>
      <h1>About Page</h1>
      <AuthorizeView role={appRoles.counterView}>
        <Counter />
      </AuthorizeView>
    </>
  );
}
