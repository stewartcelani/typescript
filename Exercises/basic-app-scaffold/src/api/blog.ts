import { type BlogPosts, BlogPostsSchema } from '@types';

export async function fetchBlogPosts(): Promise<BlogPosts> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = (await response.json()) as BlogPosts;
  return BlogPostsSchema.parse(data);
}
