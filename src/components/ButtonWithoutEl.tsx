import { type ComponentPropsWithoutRef, type ReactNode } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  href?: never;
  children: ReactNode;
};
type AnchorProps = ComponentPropsWithoutRef<"a"> & {
  href?: string;
  children: ReactNode;
};

function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  return "href" in props;
}

export default function ButtonWithoutEl(props: ButtonProps | AnchorProps) {
  if (isAnchorProps(props)) {
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
