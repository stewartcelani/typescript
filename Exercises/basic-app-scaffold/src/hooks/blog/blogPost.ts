import {
  type BlogPost,
  type BlogPostResponse,
  BlogPostResponseSchema,
  BlogPostSchema
} from '@customTypes/blog/blogPosts';

async function fetchBlogPost(id: number): Promise<BlogPost> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
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
