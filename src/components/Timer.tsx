import { useEffect, useRef, useState } from "react";
import { useTimersContext, type Timer as TimerProps } from "../store/timers-store.tsx";
import Container from "./UI/Container.tsx";

export default function Timer({ name, duration }: TimerProps) {
  const durationInMilliseconds = duration * 1000;

  const [remainingTime, setRemainingTime] = useState(durationInMilliseconds);
  const intervalRef = useRef<number | null>(null);
  const { isRunning } = useTimersContext();

  if (remainingTime <= 0 && intervalRef.current) {
    clearInterval(intervalRef.current);
  }

  useEffect(() => {
    let timer: number;
    if (isRunning) {
      timer = setInterval(() => {
        setRemainingTime(prevTime => {
          if (prevTime <= 0) {
            return prevTime;
          }
          return prevTime - 50;
        });
      }, 50);
      intervalRef.current = timer;
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // cleanup function
    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress max={durationInMilliseconds} value={remainingTime} />
      </p>
      <p>Original duration: {duration}</p>
      <p>Remaining time: {formattedRemainingTime}</p>
    </Container>
  );
}
