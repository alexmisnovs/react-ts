import { useRef } from "react";
import Button from "./components/Button";
import ButtonWithoutEl from "./components/ButtonWithoutEl";
import Container from "./components/Container";
import Input from "./components/Input";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <main>
      <Container as={Button} el="button" onClick={() => {}}>
        Blah
      </Container>
      <Container as={ButtonWithoutEl} href="hey" onClick={() => {}}>
        Blah
      </Container>
      <Input label="This is text" id="SomeId" type="text" ref={inputRef} />

      <Input label="This is number" id="anotherId" type="number" />
      <Button el="button">A button</Button>
      <Button el="anchor" href="https://google.com">
        A link
      </Button>
      <ButtonWithoutEl disabled>Hello</ButtonWithoutEl>
      <ButtonWithoutEl href="/hello">Link</ButtonWithoutEl>
    </main>
  );
}

export default App;
