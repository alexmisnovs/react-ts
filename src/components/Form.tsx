import { ComponentPropsWithoutRef, FormEvent } from "react";

type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};

export default function Form({ onSave, ...otherProps }: FormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const submittedData = new FormData(event.currentTarget);
    const data = Object.fromEntries(submittedData);

    onSave(data);
  }
  return (
    <form onSubmit={handleSubmit} {...otherProps}>
      {otherProps.children}
    </form>
  );
}
