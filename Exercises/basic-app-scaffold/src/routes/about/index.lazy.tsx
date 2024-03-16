import { createLazyFileRoute } from '@tanstack/react-router';
import About from '../../components/about/About.tsx';

export const Route = createLazyFileRoute('/about/')({
  component: AboutRoute
});

function AboutRoute() {
  return <About />;
}
