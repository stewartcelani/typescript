import { createLazyFileRoute } from '@tanstack/react-router';
import Blog from '@components/blog/Blog';

export const Route = createLazyFileRoute('/blog/')({
  component: Blog
});
