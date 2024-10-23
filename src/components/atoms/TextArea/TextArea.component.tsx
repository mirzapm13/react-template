import clsx from "clsx";
import { FC } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface ITextAreaProps
  extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: FieldError | undefined;
  name: string;
  register?: UseFormRegisterReturn;
  rows?: number;
}

const TextArea: FC<ITextAreaProps> = ({
  label,
  error,
  name,
  register,
  rows = 8,
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

      <textarea
        {...props}
        id={name}
        className={clsx(error && "focus:ring-red-500 focus:border-red-500")}
        {...register}
        rows={rows}
      />
      {error && <span className="text-red-500">{error.message}</span>}
    </div>
  );
};

export default TextArea;
