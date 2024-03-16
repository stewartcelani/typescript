import { AccountInfo } from '@azure/msal-browser';

export type AuthContext = {
  user: AccountInfo | null;
  isAuthenticated: () => boolean;
  setUser: (user: AccountInfo) => void;
};

export const authContext: AuthContext = {
  user: null,
  isAuthenticated: () => {
    return !!authContext.user;
  },
  setUser: (user: AccountInfo) => {
    authContext.user = user;
  }
};
