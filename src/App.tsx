import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <main>
      <Input label="This is text" id="SomeId" type="text" />
      <Input label="This is number" id="anotherId" type="number" />
      <Button el="button">A button</Button>
      <Button el="anchor" href="https://google.com">
        A link
      </Button>
    </main>
  );
}

export default App;
