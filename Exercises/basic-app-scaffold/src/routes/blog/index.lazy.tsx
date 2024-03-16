import { createLazyFileRoute } from '@tanstack/react-router';
import Blog from '@features/blog/components/Blog.tsx';

export const Route = createLazyFileRoute('/blog/')({
  component: Blog
});
