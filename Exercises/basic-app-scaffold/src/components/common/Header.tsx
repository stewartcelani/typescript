import { Link } from '@tanstack/react-router';

export default function Header() {
  return (
    <header>
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>
      {'  '}
      <Link to="/blog" className="[&.active]:font-bold">
        Blog
      </Link>
      {'  '}
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>
    </header>
  );
}
