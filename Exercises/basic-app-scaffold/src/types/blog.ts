import { z } from 'zod';

export const BlogPostResponseSchema = z.object({
  id: z.number(),
  userId: z.number(),
  title: z.string(),
  body: z.string()
});
export const BlogPostResponsesSchema = z.array(BlogPostResponseSchema);

export const BlogPostSchema = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string()
});
export const BlogPostsSchema = z.array(BlogPostSchema);

export type BlogPostResponse = z.infer<typeof BlogPostResponseSchema>;
export type BlogPost = z.infer<typeof BlogPostSchema>;
