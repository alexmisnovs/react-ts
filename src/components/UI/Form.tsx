import {
  type ComponentPropsWithoutRef,
  type FormEvent,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";

type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};

export type FormHandle = {
  clear: () => void;
};

const Form = forwardRef(function Form({ onSave, ...otherProps }: FormProps, ref) {
  const formRef = useRef<HTMLFormElement>(null);

  useImperativeHandle(ref, () => {
    return {
      clear() {
        console.log("Clearing..");
        formRef.current?.reset();
      },
    };
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const submittedData = new FormData(event.currentTarget);
    const data = Object.fromEntries(submittedData);

    onSave(data);
    formRef.current?.reset();
  }
  return (
    <form onSubmit={handleSubmit} {...otherProps} ref={formRef}>
      {otherProps.children}
    </form>
  );
});

export default Form;
