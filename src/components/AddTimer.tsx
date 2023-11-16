import { useRef } from "react";

import Button from "./UI/Button.tsx";
import Form, { FormHandle } from "./UI/Form.tsx";
import Input from "./UI/Input.tsx";
import { useTimersContext } from "../store/timers-store.tsx";

export default function AddTimer() {
  const form = useRef<FormHandle>(null);

  const { addTimer } = useTimersContext();

  function handleSaveTimer(data: unknown) {
    const extractedData = data as { name: string; duration: string };
    // convert string to number due to formEntries returning strings
    addTimer({ name: extractedData.name, duration: +extractedData.duration });
    console.log(extractedData);
    form.current?.clear();
  }

  return (
    <Form ref={form} onSave={handleSaveTimer} id="add-timer">
      <Input type="text" label="Name" name="name" id="name" />
      <Input type="number" label="Duration" name="duration" id="duration" />
      <p>
        <Button el="button">Add Timer</Button>
      </p>
    </Form>
  );
}
