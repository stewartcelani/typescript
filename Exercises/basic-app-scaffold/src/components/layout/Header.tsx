import { Link } from '@tanstack/react-router';
import { Route as BlogRoute } from '@routes/blog';
import { Route as IndexRoute } from '@/routes';
import { Route as AboutRoute } from '@routes/about';
import AuthorizeView from '@components/auth/AuthorizeView.tsx';
import { appRoles } from '@config/authConfig.ts';

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
      <AuthorizeView role={appRoles.blogsView}>
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
      </AuthorizeView>
      {'  '}
      <Link to={AboutRoute.to} activeProps={activeProps}>
        About
      </Link>
    </header>
  );
}
