import Error from '@components/common/Error.tsx';
import { ErrorComponent, type ErrorRouteProps } from '@tanstack/react-router';

export default function RouteErrorComponent({ error }: ErrorRouteProps) {
  if (typeof error === 'object' && error !== null && 'message' in error) {
    const errorMessage = error.message;
    if (typeof errorMessage === 'string') {
      return <Error message={errorMessage} />;
    }
  }
  return <ErrorComponent error={error} />;
}
