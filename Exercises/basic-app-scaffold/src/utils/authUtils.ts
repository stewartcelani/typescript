import { msalInstance } from '@config/authConfig';
import { AuthenticationResult, InteractionRequiredAuthError, SilentRequest } from '@azure/msal-browser';
import { AuthenticationError } from '@errors/authenticationError.ts';

export async function getAccessToken(scopes: string[]): Promise<string> {
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
    return response.accessToken;
  } catch (error: unknown) {
    if (error instanceof InteractionRequiredAuthError) {
      await msalInstance.acquireTokenRedirect(request);
      const response: AuthenticationResult = await msalInstance.acquireTokenSilent(request);
      return response.accessToken;
    } else {
      console.error(error);
      throw new AuthenticationError(
        `Failed to acquire token: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    }
  }
}
