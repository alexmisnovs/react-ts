import { useRef } from "react";
import Button from "./components/UI/Button";

import Input from "./components/UI/Input";
import Form, { FormHandle } from "./components/UI/Form";
import TimersContextProvider from "./store/timers-store";
import Header from "./components/Header";

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
    <TimersContextProvider>
      <main>
        <Header />

        <Form onSave={handleOnSave} ref={customFormRef}>
          <Input label="This is text" id="SomeId" name="name" type="text" ref={inputRef} />
          <Input label="This is number" id="anotherId" name="age" type="number" />
          <Button el="button">Save</Button>
        </Form>
      </main>
    </TimersContextProvider>
  );
}

export default App;
