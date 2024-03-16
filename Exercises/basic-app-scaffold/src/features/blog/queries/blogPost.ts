import {
  type BlogPost,
  type BlogPostResponse,
  BlogPostResponseSchema,
  BlogPostSchema
} from '@features/blog/types/blogPosts.ts';
import { appScopes } from '@config/authConfig.ts';
import { getAccessToken } from '@utils/authUtils.ts';

async function fetchBlogPost(id: number): Promise<BlogPost> {
  const token = await getAccessToken(appScopes);
  console.log(token);
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!response.ok) throw new Error('Failed to fetch blog post');
  const data = (await response.json()) as BlogPostResponse;

  const validatedData = BlogPostResponseSchema.parse(data);

  return BlogPostSchema.parse({
    id: validatedData.id,
    title: validatedData.title,
    content: validatedData.body
  });
}

export const blogPostQueryOptions = (id: number) => ({
  queryKey: ['blogPost', id],
  queryFn: () => fetchBlogPost(id)
});
