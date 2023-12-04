import { ButtonTypes } from "./ButtonTypes";

export interface ButtonProps {
  type: ButtonTypes;
}

export default function Button({ type }: ButtonProps) {
  const className = "btn btn-" + type;
  return (
    <button type="button" className={className}>
      {type}
    </button>
  );
}
