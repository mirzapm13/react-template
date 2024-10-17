import { useEffect, useState } from "react";

type DebouncedInputProps = {
  value: string;
  debounce?: number;
  placeholder: string;
  onChange: (value: string) => void;
} & React.HTMLAttributes<HTMLInputElement>;

const DebouncedInput = ({
  value: initValue,
  onChange,
  debounce = 500,
  ...props
}: DebouncedInputProps) => {
  const [value, setValue] = useState(initValue);
  useEffect(() => {
    setValue(initValue);
  }, [initValue]);

  // *  0.5s after set value in state
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (onChange) onChange(value);
    }, debounce);
    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default DebouncedInput;
