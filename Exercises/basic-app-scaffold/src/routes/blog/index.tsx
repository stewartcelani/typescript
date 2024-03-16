import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';

export const initalBlogSearchParams: BlogSearchParams = {
  page: 1,
  pageSize: 10
};

const blogSearchSchema = z.object({
  page: z.number().catch(1),
  pageSize: z.number().max(100).catch(10)
});

export type BlogSearchParams = z.infer<typeof blogSearchSchema>;

export const Route = createFileRoute('/blog/')({
  validateSearch: blogSearchSchema
});
