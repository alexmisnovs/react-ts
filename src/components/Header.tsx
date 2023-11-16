import Button from "./UI/Button.tsx";
import { useTimersContext } from "../store/timers-store.tsx";

export default function Header() {
  const timersCtx = useTimersContext();

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button
        onClick={timersCtx.isRunning ? timersCtx.stopTimers : timersCtx.startTimers}
        el="button"
      >
        {timersCtx.isRunning ? "Stop" : "Start"} Timers
      </Button>
    </header>
  );
}
