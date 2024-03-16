import { createLazyFileRoute } from '@tanstack/react-router';
import BlogPost from '@components/blog/BlogPost';

export const Route = createLazyFileRoute('/blog/$postId')({
  component: BlogPost
});
