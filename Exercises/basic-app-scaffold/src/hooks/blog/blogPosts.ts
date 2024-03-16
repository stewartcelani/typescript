import {
  type BlogPost,
  type BlogPostResponse,
  BlogPostResponsesSchema,
  BlogPostsSchema
} from '@customTypes/blog/blogPosts';

async function fetchBlogPosts(page: number, pageSize: number): Promise<BlogPost[]> {
  const start = (page - 1) * pageSize;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${pageSize}`);
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
