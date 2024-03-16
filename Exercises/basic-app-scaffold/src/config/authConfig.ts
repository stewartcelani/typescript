import { Configuration, LogLevel, PublicClientApplication } from '@azure/msal-browser';

type AppScopes = string[];

type AppRoles = {
  blogsView: string;
  counterView: string;
  counterClick: string;
};

export const appScopes: AppScopes = ['api://DOWNSTREAM_API_CLIENT_ID/access_as_user'];

export const appRoles: AppRoles = {
  blogsView: 'Blogs.View',
  counterView: 'Counter.View',
  counterClick: 'Counter.Click'
};

const msalConfig: Configuration = {
  auth: {
    clientId: 'CLIENT_ID',
    authority: 'https://login.microsoftonline.com/TENANT_ID',
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
