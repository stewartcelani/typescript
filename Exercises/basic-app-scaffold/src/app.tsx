import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { MsalProvider } from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from '@/auth/authConfig';
import { AuthProvider } from '@/auth/AuthProvider';
import { authContext } from '@/auth/authContext';
import Router from '@/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// @azure/msal-browser
const msalInstance = await PublicClientApplication.createPublicClientApplication(msalConfig);

const queryClient = new QueryClient();

// Render the app
const rootElement = document.getElementById('app')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <MsalProvider instance={msalInstance}>
        <AuthProvider authContext={authContext}>
          <QueryClientProvider client={queryClient}>
            <Router />
          </QueryClientProvider>
        </AuthProvider>
      </MsalProvider>
    </StrictMode>
  );
}
