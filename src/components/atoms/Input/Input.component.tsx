import clsx from "clsx";
import { FC } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
  name: string;
  register?: UseFormRegisterReturn;
}

const Input: FC<IInput> = ({
  label,
  error,
  name,
  register,
  required,
  ...props
}) => {
  return (
    <div>
      {label && (
        <label className="block mb-2" htmlFor={name}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <input
        id={name}
        className={clsx(error && "focus:ring-red-500 focus:border-red-500")}
        {...(register && register)}
        {...props}
      />
      {error && <span className="text-red-500">{error.message}</span>}
    </div>
  );
};

export default Input;
