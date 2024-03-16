import { createFileRoute } from '@tanstack/react-router';
import RouteErrorComponent from '@components/errors/RouteErrorComponent.tsx';
import { blogPostQueryOptions } from '@features/blog/queries/blogPost.ts';
import { z } from 'zod';
import { appRoles } from '@config/authConfig.ts';
import { AuthenticationError } from '@errors/authenticationError.ts';

export const Route = createFileRoute('/blog/$postId')({
  beforeLoad: ({ context: { authContext } }) => {
    if (!authContext.hasRole(appRoles.blogsView)) {
      throw new AuthenticationError('Unauthorized to view blog posts');
    }
  },
  parseParams: (params) => ({
    postId: z.number().int().parse(Number(params.postId))
  }),
  loader: ({ context: { queryClient }, params: { postId } }) =>
    queryClient.ensureQueryData(blogPostQueryOptions(Number(postId))),
  errorComponent: RouteErrorComponent
});
