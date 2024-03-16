import { createLazyFileRoute } from '@tanstack/react-router';
import BlogPost from '@features/blog/components/BlogPost.tsx';

export const Route = createLazyFileRoute('/blog/$postId')({
  component: BlogPost
});
