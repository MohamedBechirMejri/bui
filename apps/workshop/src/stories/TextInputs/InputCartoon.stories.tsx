import { InputCartoon } from "@bui/forms";
import { useState } from "react";

const meta = {
  title: "Inputs/InputCartoon",
  component: InputCartoon,
  // tags: ['autodocs'],
  argTypes: {
    value: { control: { type: "text" } },
    inputType: {
      control: { type: "select" },
      options: ["text", "email", "password", "number", "tel", "url", "search"],
      defaultValue: "email",
    },
    placeholder: { control: { type: "text" } },
    height: { control: { type: "text" }, defaultValue: "4rem" },
    width: { control: { type: "text" }, defaultValue: "min(100%,20rem)" },
  },
};

export default meta;

export const Default = ({
  inputType = "email",
  placeholder = "Enter Email",
  height = "4rem",
  width = "min(100%,20rem)",
}: {
  inputType?:
    | "text"
    | "email"
    | "password"
    | "number"
    | "tel"
    | "url"
    | "search";
  placeholder?: string;
  height?: string;
  width?: string;
}) => {
  const [value, setValue] = useState("");
  return (
    <InputCartoon
      value={value}
      setValue={setValue}
      inputType={inputType}
      placeholder={placeholder}
      height={height}
      width={width}
    />
  );
};
