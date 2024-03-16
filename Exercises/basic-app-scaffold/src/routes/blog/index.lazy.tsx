import { createLazyFileRoute } from '@tanstack/react-router';
import Blog from '../../components/blog/Blog.tsx';

export const Route = createLazyFileRoute('/blog/')({
  component: BlogRoute
});

function BlogRoute() {
  return <Blog />;
}
