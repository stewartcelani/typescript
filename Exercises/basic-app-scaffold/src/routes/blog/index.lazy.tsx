import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/blog/')({
  component: Blog,
});

function Blog() {
  return (
    <>
      <div className="p-2">Hello from Blog!</div>
    </>
  );
}
