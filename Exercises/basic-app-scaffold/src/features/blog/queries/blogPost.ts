import {
  type BlogPost,
  type BlogPostResponse,
  BlogPostResponseSchema,
  BlogPostSchema
} from '@features/blog/types/blogPosts.ts';
import { appScopes } from '@config/authConfig.ts';
import { getApiAccessToken } from '@utils/authUtils.ts';
import { delay } from '@/utils';
import { randomInt } from '@utils/numberUtils.ts';

async function fetchBlogPost(id: number): Promise<BlogPost> {
  await delay(randomInt(0, 2500)); // TODO: Remove this line when not development

  const token = await getApiAccessToken(appScopes);
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
