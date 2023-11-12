import { useRef } from "react";
import Button from "./components/Button";
import ButtonWithoutEl from "./components/ButtonWithoutEl";
import Container from "./components/Container";
import Input from "./components/Input";
import Form, { FormHandle } from "./components/Form";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const customFormRef = useRef<FormHandle>(null);

  function handleOnSave(data: unknown) {
    // const extractedData = data as {
    //   name: string;
    //   age: string;
    // };

    //type checking without type casting
    if (!data || typeof data !== "object" || !("name" in data) || !("age" in data)) {
      return;
    }

    console.log(data);
    customFormRef.current?.clear();
  }
  return (
    <main>
      <Container as={Button} el="button" onClick={() => {}}>
        Blah
      </Container>
      <Container as={ButtonWithoutEl} href="hey" onClick={() => {}}>
        Blah
      </Container>

      <Form onSave={handleOnSave} ref={customFormRef}>
        <Input label="This is text" id="SomeId" name="name" type="text" ref={inputRef} />
        <Input label="This is number" id="anotherId" name="age" type="number" />
        <Button el="button">Save</Button>
      </Form>

      <ButtonWithoutEl disabled>Hello</ButtonWithoutEl>
      <ButtonWithoutEl href="/hello">Link</ButtonWithoutEl>
    </main>
  );
}

export default App;
