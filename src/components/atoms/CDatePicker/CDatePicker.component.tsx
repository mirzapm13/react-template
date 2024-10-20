import { FC } from "react";
import DatePicker from "react-datepicker";
import { FieldError } from "react-hook-form";

export type IDatePickerProps = DatePicker["props"] & {
  label?: string;
  name: string;
  error?: FieldError;
  required?: boolean;
};

const CDatePicker: FC<IDatePickerProps> = ({
  label,
  name,
  required,
  error,
  ...props
}) => {
  return (
    <>
      {label && (
        <label className="block mb-2" htmlFor={name}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <DatePicker className="w-full" {...props} />
      {error && <span className="text-red-500">{error.message}</span>}
    </>
  );
};

export default CDatePicker;
