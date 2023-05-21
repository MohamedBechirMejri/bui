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
    },
    placeholder: { control: { type: "text" } },
  },
};

export default meta;

export const Default = ({
  inputType = "email",
  placeholder = "Enter Email",
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
}) => {
  const [value, setValue] = useState("");
  return (
    <InputCartoon
      value={value}
      setValue={setValue}
      inputType={inputType}
      placeholder={placeholder}
    />
  );
};
