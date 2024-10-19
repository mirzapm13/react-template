import clsx from "clsx";
import { FC, forwardRef, TextareaHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface ITextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error: FieldError | undefined;
  // name: string;
  // register: UseFormRegisterReturn;
  // rows?: number;
}

const TextArea: FC<ITextAreaProps> = forwardRef<
  HTMLTextAreaElement,
  ITextAreaProps
>(({ label, error, name, rows = 8, ...props }, ref) => {
  return (
    <div>
      {label && (
        <label className="block mb-2" htmlFor={name}>
          {label}
        </label>
      )}

      <textarea
        id={name}
        className={clsx(error && "focus:ring-red-500 focus:border-red-500")}
        rows={rows}
        ref={ref}
        {...props}
      />
      {error && <span className="text-red-500">{error.message}</span>}
    </div>
  );
});

export default TextArea;
