import { type ComponentPropsWithoutRef, type ReactNode } from "react";

type ButtonProps = {
  el: "button";
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;
type AnchorProps = {
  el: "anchor";
  children: ReactNode;
} & ComponentPropsWithoutRef<"a">;

export default function Button(props: ButtonProps | AnchorProps) {
  if (props.el === "anchor") {
    return (
      <a className="button" {...props}>
        {props.children}
      </a>
    );
  }

  return (
    <button className="button" {...props}>
      {props.children}
    </button>
  );
}
