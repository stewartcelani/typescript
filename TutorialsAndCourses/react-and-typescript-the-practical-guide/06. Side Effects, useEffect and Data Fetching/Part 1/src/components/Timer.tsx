import Container from "./UI/Container.tsx";
import { type Timer, useTimersContext } from "../store/timers-context.tsx";
import { useEffect, useRef, useState } from "react";

export default function Timer({ name, duration }: Timer) {
  const interval = useRef<number | null>(null);
  const [remainingTime, setRemainingTime] = useState(duration * 1000);
  const { isRunning } = useTimersContext();

  if (remainingTime <= 0 && interval.current) {
    clearInterval(interval.current);
  }

  useEffect(() => {
    if (isRunning && remainingTime > 0) {
      const timer = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 50);
      }, 50);
      interval.current = timer;
      return () => clearInterval(timer);
    } else if (interval.current) {
      clearInterval(interval.current);
    }
  }, [isRunning]);

  const formattedTime = (remainingTime / 1000).toFixed(2);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress max={duration * 1000} value={remainingTime} />
      </p>
      <p>{formattedTime}s remaining</p>
    </Container>
  );
}
