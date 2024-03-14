import Container from './UI/Container.tsx';
import type { Timer } from "../store/timers-context.tsx";

export default function Timer({name, duration }: Timer) {
  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>Duration: {duration} seconds</p>
    </Container>
  );
}
