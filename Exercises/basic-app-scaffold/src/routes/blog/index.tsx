import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';
import { blogPostsQueryOptions } from '@features/blog/queries/blogPosts.ts';
import RouteErrorComponent from '@components/errors/RouteErrorComponent.tsx';
import { appRoles } from '@config/authConfig.ts';
import { AuthenticationError } from '@/errors/authenticationError.ts';

const blogSearchSchema = z.object({
  page: z.number().catch(1),
  pageSize: z.number().max(100).catch(10)
});

export type BlogSearchParams = z.infer<typeof blogSearchSchema>;

export const Route = createFileRoute('/blog/')({
  beforeLoad: ({ context: { authContext } }) => {
    if (!authContext.hasRole(appRoles.blogsView)) {
      throw new AuthenticationError('Unauthorized to view blog posts');
    }
  },
  validateSearch: blogSearchSchema,
  loaderDeps: ({ search: { page, pageSize } }) => ({ page, pageSize }),
  loader: ({ context: { queryClient }, deps: { page, pageSize } }) =>
    queryClient.ensureQueryData(blogPostsQueryOptions(page, pageSize)),
  onError: ({ error }) => {
    console.error(error);
  },
  errorComponent: RouteErrorComponent
});
