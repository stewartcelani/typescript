import {
  type BlogPost,
  type BlogPostResponse,
  BlogPostResponsesSchema,
  BlogPostsSchema
} from '@features/blog/types/blogPosts.ts';
import { randomInt } from '@utils/numberUtils.ts';
import { delay } from '@/utils';

async function fetchBlogPosts(page: number, pageSize: number): Promise<BlogPost[]> {
  await delay(randomInt(0, 2500)); // TODO: Remove this line when not development

  const start = (page - 1) * pageSize;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${pageSize}`);
  if (!response.ok) throw new Error('Failed to fetch blog posts');
  const data = (await response.json()) as BlogPostResponse[];

  const validatedData = BlogPostResponsesSchema.parse(data);

  const mappedData: BlogPost[] = validatedData.map((post) => ({
    id: post.id,
    title: post.title,
    content: post.body
  }));

  return BlogPostsSchema.parse(mappedData);
}

export const blogPostsQueryOptions = (page: number, pageSize: number) => ({
  queryKey: ['blogPosts', page, pageSize],
  queryFn: () => fetchBlogPosts(page, pageSize)
});
