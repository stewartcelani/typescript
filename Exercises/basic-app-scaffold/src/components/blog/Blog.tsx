import { Route as BlogRoute, type BlogSearchParams } from '@routes/blog';
import { Route as BlogPostRoute } from '@routes/blog/$postId';
import { Link, useNavigate } from '@tanstack/react-router';
import { blogPostsQueryOptions } from '@hooks/blog/blogPosts';
import { useSuspenseQuery } from '@tanstack/react-query';

export default function Blog() {
  const { queryClient } = BlogRoute.useRouteContext();
  const navigate = useNavigate({ from: BlogRoute.fullPath });
  const { page, pageSize }: BlogSearchParams = BlogRoute.useSearch();
  const { data } = useSuspenseQuery(blogPostsQueryOptions(page, pageSize));

  return (
    <>
      <h1>Blog Page</h1>
      <button
        onClick={() => {
          void queryClient.refetchQueries({ queryKey: blogPostsQueryOptions(page, pageSize).queryKey });
        }}
      >
        Refresh
      </button>
      {data.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <Link from={BlogRoute.fullPath} to={BlogPostRoute.to} params={{ postId: post.id }}>
            Read More
          </Link>
        </div>
      ))}
      {data.length === 0 && <p>No posts found</p>}
      {page > 1 && (
        <>
          <Link
            from={BlogRoute.fullPath}
            search={(prev: BlogSearchParams) => ({ page: prev.page - 1, pageSize: pageSize })}
          >
            Prev Page
          </Link>
          {'  '}
        </>
      )}

      <Link
        from={BlogRoute.fullPath}
        search={(prev: BlogSearchParams) => ({ page: prev.page + 1, pageSize: pageSize })}
      >
        Next Page
      </Link>

      <br />
      <p>You can also navigate programmatically:</p>

      <button
        onClick={() => {
          void navigate({
            search: (prev: BlogSearchParams) => ({ page: prev.page + 1, pageSize: pageSize })
          });
        }}
      >
        Next Page
      </button>
    </>
  );
}
