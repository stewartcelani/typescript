import { useQuery } from '@tanstack/react-query';
import { fetchBlogPosts } from '@api';
import type { BlogPost } from '@types';

export default function Blog() {
  const {
    data: posts,
    isLoading,
    error
  } = useQuery<BlogPost[]>({
    queryKey: ['blogPosts'],
    queryFn: fetchBlogPosts
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  return (
    <>
      <h1>Blog Page</h1>
      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
    </>
  );
}
