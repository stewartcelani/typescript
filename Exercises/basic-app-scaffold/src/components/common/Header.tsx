import { Link } from '@tanstack/react-router';
import { Route as BlogRoute } from '@routes/blog/index';
import { Route as IndexRoute } from '@routes/index';
import { Route as AboutRoute } from '@routes/about/index';

export default function Header() {
  return (
    <header>
      <Link to={IndexRoute.to}>Home</Link>
      {'  '}
      <Link
        to={BlogRoute.to}
        search={{
          page: 1,
          pageSize: 10
        }}
      >
        Blog
      </Link>
      {'  '}
      <Link to={AboutRoute.to}>About</Link>
    </header>
  );
}
