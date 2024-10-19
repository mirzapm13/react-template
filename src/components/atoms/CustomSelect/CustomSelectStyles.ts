import type { StylesConfig } from "react-select";

export const CUSTOM_STYLES: StylesConfig = {
  control: (base, props) => ({
    ...base,
    paddingBlock: 3,
    backgroundColor: "rgb(249, 250, 251)",
    borderRadius: "0.5rem",
    boxShadow: "none",
    outline: props.isFocused ? " 2px solid rgb(0 171 78)" : "rgb(209 213 219)",
    borderColor: "rgb(209 213 219)",
    "&:hover": {
      borderColor: "rgb(209 213 219)",
    },
    fontFamily: "Inter",
    fontSize: 14,
    "input:focus": {
      boxShadow: "none",
    },
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    paddingTop: 0,
    paddingBottom: 0,
  }),
  clearIndicator: (styles) => ({
    ...styles,
    paddingTop: 0,
    paddingBottom: 0,
  }),
  placeholder: (base) => ({
    ...base,
    fontFamily: "Inter",
    margin: 0,
  }),
  option: (base, props) => ({
    ...base,
    backgroundColor: props.isFocused ? "#DBFFEC" : "",
    color: "black",
  }),
};
