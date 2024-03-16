import { createFileRoute } from '@tanstack/react-router';
import RouteErrorComponent from '@components/common/RouteErrorComponent.tsx';
import { blogPostQueryOptions } from '@hooks/blog/blogPost';
import { z } from 'zod';

export const Route = createFileRoute('/blog/$postId')({
  parseParams: (params) => ({
    postId: z.number().int().parse(Number(params.postId))
  }),
  loader: ({ context: { queryClient }, params: { postId } }) =>
    queryClient.ensureQueryData(blogPostQueryOptions(postId)),
  errorComponent: RouteErrorComponent
});
