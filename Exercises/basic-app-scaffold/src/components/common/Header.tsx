import { Link } from '@tanstack/react-router';
import { Route as BlogRoute, initalBlogSearchParams } from '@routes/blog/index';
import { Route as IndexRoute } from '@routes/index';
import { Route as AboutRoute } from '@routes/about/index';

export default function Header() {
  return (
    <header>
      <Link to={IndexRoute.fullPath}>Home</Link>
      {'  '}
      <Link to={BlogRoute.fullPath} search={initalBlogSearchParams}>
        Blog
      </Link>
      {'  '}
      <Link to={AboutRoute.fullPath}>About</Link>
    </header>
  );
}
