import ky from 'ky';
import { appScopes, msalInstance } from '@config/authConfig';
import { AuthenticationResult, InteractionRequiredAuthError, SilentRequest } from '@azure/msal-browser';
import { AuthenticationError } from '@errors/authenticationError.ts';

export async function getAuthenticatedApiClient() {
  const accessToken = await getApiAccessToken([appScopes.api]);
  const apiClient = ky.extend({
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
    prefixUrl: process.env.API_URL
  });
}

let cachedAccessToken: string | null = null;
let tokenExpirationTime: number | null = null;
export async function getApiAccessToken(scopes: string[]): Promise<string> {
  const currentTime = Date.now();

  if (cachedAccessToken && tokenExpirationTime && currentTime < tokenExpirationTime) {
    return cachedAccessToken;
  }

  const account = msalInstance.getActiveAccount();
  if (!account) {
    throw new AuthenticationError(
      'No active account! Verify a user has been signed in and setActiveAccount has been called.'
    );
  }

  const request: SilentRequest = {
    account,
    scopes
  };

  try {
    const response: AuthenticationResult = await msalInstance.acquireTokenSilent(request);
    if (!response.expiresOn) throw new AuthenticationError('Token does not contain an expiration time');

    cachedAccessToken = response.accessToken;
    tokenExpirationTime = response.expiresOn.getTime() - 5 * 60 * 1000;

    return cachedAccessToken;
  } catch (error: unknown) {
    if (error instanceof InteractionRequiredAuthError) {
      await msalInstance.acquireTokenRedirect(request);
      const response: AuthenticationResult = await msalInstance.acquireTokenSilent(request);
      return response.accessToken;
    } else if (error instanceof AuthenticationError) {
      throw error;
    } else {
      console.error(error);
      throw new AuthenticationError(
        `Failed to acquire token: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    }
  }
}
