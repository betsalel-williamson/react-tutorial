import { ReactNode } from "react";
import { ButtonTypes } from "./ButtonTypes";

export interface ButtonProps {
  buttonType?: ButtonTypes;
  children: ReactNode;
}

export default function Button({
  buttonType = ButtonTypes.primary,
  children,
}: ButtonProps) {
  const className = "btn btn-" + buttonType;
  return (
    <button type="button" className={className}>
      {children}
    </button>
  );
}
