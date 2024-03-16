import { Link } from '@tanstack/react-router';
import { Route as BlogRoute } from '@routes/blog/index';
import { Route as IndexRoute } from '@routes/index';
import { Route as AboutRoute } from '@routes/about/index';

const activeProps = {
  style: {
    fontWeight: 'bold'
  }
};

export default function Header() {
  return (
    <header>
      <Link to={IndexRoute.to} activeProps={activeProps}>
        Home
      </Link>
      {'  '}
      <Link
        to={BlogRoute.to}
        activeProps={activeProps}
        search={{
          page: 1,
          pageSize: 10
        }}
      >
        Blog
      </Link>
      {'  '}
      <Link to={AboutRoute.to} activeProps={activeProps}>
        About
      </Link>
    </header>
  );
}
