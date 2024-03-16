import { useBlogPosts } from '@hooks';
import { Route as BlogRoute, type BlogSearchParams } from '@routes/blog';
import { Link, useNavigate } from '@tanstack/react-router';

export default function Blog() {
  const navigate = useNavigate({ from: BlogRoute.fullPath });
  const { page, pageSize }: BlogSearchParams = BlogRoute.useSearch();
  const { data, isLoading, error } = useBlogPosts(page, pageSize);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <h1>Blog Page</h1>
      {data &&
        data.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      {data && data.length === 0 && <p>No posts found</p>}

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
