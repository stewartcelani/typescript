import { useSuspenseQuery } from '@tanstack/react-query';
import { blogPostQueryOptions } from '@hooks/blog/blogPost';
import { Route as BlogPostRoute } from '@routes/blog/$postId';

export default function BlogPost() {
  const { postId } = BlogPostRoute.useParams();
  const { data } = useSuspenseQuery(blogPostQueryOptions(postId));

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  );
}
