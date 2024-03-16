import { createContext, useContext, ReactNode, useEffect } from 'react';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal, useMsalAuthentication } from '@azure/msal-react';
import { type AuthContext, authContext } from '@/auth/authContext.ts';
import { InteractionRequiredAuthError, InteractionType } from '@azure/msal-browser';

const AuthContext = createContext<AuthContext>(authContext);

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  authContext: AuthContext;
  children: ReactNode;
}

export const AuthProvider = ({ children, authContext }: AuthProviderProps) => {
  const request = {
    scopes: ['User.Read']
  };
  const { login, result, error } = useMsalAuthentication(InteractionType.Silent, request);

  console.log(result);

  useEffect(() => {
    if (error instanceof InteractionRequiredAuthError) {
      void login(InteractionType.Redirect, request);
    }
  }, [error]);

  const { accounts } = useMsal();

  authContext.setUser(accounts[0] || null);

  return (
    <>
      <AuthenticatedTemplate>
        <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <p>Authentication required</p>
      </UnauthenticatedTemplate>
    </>
  );
};
