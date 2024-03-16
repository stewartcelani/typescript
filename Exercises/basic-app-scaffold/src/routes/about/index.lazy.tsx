import { createLazyFileRoute } from '@tanstack/react-router';
import About from '@features/about/components/About.tsx';

export const Route = createLazyFileRoute('/about/')({
  component: About
});
