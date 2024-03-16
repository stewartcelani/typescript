import { AccountInfo } from '@azure/msal-browser';

export type AuthContext = {
  user: AccountInfo | null;
  isAuthenticated: () => boolean;
  setUser: (user: AccountInfo) => void;
  hasRole: (role: string) => boolean;
};

export const authContext: AuthContext = {
  user: null,
  isAuthenticated: () => {
    return !!authContext.user;
  },
  setUser: (user: AccountInfo) => {
    authContext.user = user;
  },
  hasRole: (role: string) => {
    if (!authContext.user || !authContext.user.idTokenClaims || !authContext.user.idTokenClaims.roles) {
      return false;
    }
    const roles = authContext.user.idTokenClaims.roles;
    return roles.includes(role);
  }
};
