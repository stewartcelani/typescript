import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';
import { blogPostsQueryOptions } from '@hooks/blog/blogPosts';
import RouteErrorComponent from '@components/common/RouteErrorComponent.tsx';

const blogSearchSchema = z.object({
  page: z.number().catch(1),
  pageSize: z.number().max(100).catch(10)
});

export type BlogSearchParams = z.infer<typeof blogSearchSchema>;

export const Route = createFileRoute('/blog/')({
  validateSearch: blogSearchSchema,
  loaderDeps: ({ search: { page, pageSize } }) => ({ page, pageSize }),
  loader: ({ context: { queryClient }, deps: { page, pageSize } }) =>
    queryClient.ensureQueryData(blogPostsQueryOptions(page, pageSize)),
  onError: ({ error }) => {
    console.error(error);
  },
  errorComponent: RouteErrorComponent
});
