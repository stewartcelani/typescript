import { createLazyFileRoute } from '@tanstack/react-router';
import Counter from '../../components/Counter.tsx';

export const Route = createLazyFileRoute('/about/')({
  component: About,
});

function About() {
  return (
    <>
      <div className="p-2">About page content goes here!</div>
      <Counter />
    </>
  );
}
