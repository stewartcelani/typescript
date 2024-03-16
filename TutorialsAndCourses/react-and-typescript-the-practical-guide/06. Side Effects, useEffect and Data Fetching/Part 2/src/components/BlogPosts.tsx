import { z } from "zod";

export type BlogPost = {
  id: number;
  title: string;
  text: string;
};

const BlogPostSchema = z.object({
  id: z.number(),
  userId: z.number(),
  title: z.string(),
  body: z.string(),
});

export const BlogPostsSchema = z.array(BlogPostSchema);

export type BlogPosts = z.infer<typeof BlogPostsSchema>;

type BlogPostsProps = {
  posts: BlogPost[];
};

export default function BlogPosts({ posts }: BlogPostsProps) {
  return (
    <div id="blog-posts">
      <h1>Blog Posts</h1>
      {posts.length === 0 ? (
        <p>Loading posts...</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.text}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
