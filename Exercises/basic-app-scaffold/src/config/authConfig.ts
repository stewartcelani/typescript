import { Configuration, LogLevel, PublicClientApplication } from '@azure/msal-browser';

type AppScopes = {
  api: string;
};

export const appScopes: AppScopes = {
  api: 'api://8ffafa0a-ca92-4f19-bff5-dd7c43c2c304/access_as_user'
};

type AppRoles = {
  blogsView: string;
  counterView: string;
  counterClick: string;
};

export const appRoles: AppRoles = {
  blogsView: 'Blogs.View',
  counterView: 'Counter.View',
  counterClick: 'Counter.Click'
};

const msalConfig: Configuration = {
  auth: {
    clientId: '0cb2b977-c614-4530-ad5f-caf242a2c332',
    authority: 'https://login.microsoftonline.com/14983a8c-008c-4d78-b2bc-39660ef7b186',
    redirectUri: 'http://localhost:5173'
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: false
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
          default:
            return;
        }
      }
    }
  }
};

export const msalInstance = await PublicClientApplication.createPublicClientApplication(msalConfig);
