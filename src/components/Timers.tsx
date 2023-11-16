import { useTimersContext } from "../store/timers-store";
import Timer from "./Timer";

export default function Timers() {
  const { timers } = useTimersContext();
  console.log("this is timers", timers);
  return (
    <ul>
      {timers.map(timer => (
        <li key={timer.name}>
          <Timer {...timer} />
        </li>
      ))}
    </ul>
  );
}
