import { useContext } from "react";
import Button from "./UI/Button.tsx";
import { useTimersContext } from "../store/timers-store.tsx";

export default function Header() {
  const timersCtx = useTimersContext();

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button el="button">{timersCtx.isRunning ? "Stop" : "Start"} Timers</Button>
    </header>
  );
}
