import { createLazyFileRoute } from '@tanstack/react-router';
import Index from '@components/Index.tsx';

export const Route = createLazyFileRoute('/')({
  component: Index
});
