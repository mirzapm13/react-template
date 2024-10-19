import { FC } from "react";
import { FieldError } from "react-hook-form";
import Select, { Props } from "react-select";
import { CUSTOM_STYLES } from "./CustomSelectStyles";

interface ISelectProps extends Props {
  label?: string;
  error?: FieldError;
}

const CustomSelect: FC<ISelectProps> = ({
  options,
  isMulti,
  label,
  name,
  error,
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
      <Select
        options={options}
        isMulti={isMulti}
        styles={{ ...CUSTOM_STYLES }}
        {...props}
      />
      {error && <span className="text-red-500">{error.message}</span>}
    </div>
  );
};

export default CustomSelect;
