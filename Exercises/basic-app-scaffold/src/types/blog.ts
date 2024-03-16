import { z } from 'zod';

export const BlogPostSchema = z.object({
  id: z.number(),
  userId: z.number(),
  title: z.string(),
  body: z.string()
});
export const BlogPostsSchema = z.array(BlogPostSchema);

export type BlogPost = z.infer<typeof BlogPostSchema>;

export type BlogPosts = z.infer<typeof BlogPostsSchema>;
