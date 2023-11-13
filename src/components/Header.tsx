import Button from "./UI/Button.tsx";

export default function Header() {
  return (
    <header>
      <h1>ReactTimer</h1>

      <Button el="button">Stop Timers</Button>
    </header>
  );
}
