import { forwardRef } from "react";

type Props = {
  placeholder: string;
};

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ placeholder, ...rest }: Props, ref) => {
    return (
      <input
        ref={ref}
        className="outline-none shadow-lg border border-gray-100 rounded-lg w-full p-3 my-3"
        placeholder={placeholder}
        {...rest}
      />
    );
  }
);
