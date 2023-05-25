import { InputZen } from "@bui/forms";
import { useState } from "react";

const meta = {
  title: "Inputs/InputZen",
  component: InputZen,
  // tags: ['autodocs'],
  argTypes: {
    value: { control: { type: "text" } },
    type: {
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
  type = "email",
  placeholder = "Enter Email",
  height = "4rem",
  width = "min(100%,20rem)",
}: {
  type?: "text" | "email" | "password" | "number" | "tel" | "url" | "search";
  placeholder?: string;
  height?: string;
  width?: string;
}) => {
  const [value, setValue] = useState("");
  return (
    <InputZen
      value={value}
      setValue={setValue}
      type={type}
      placeholder={placeholder}
      height={height}
      width={width}
    />
  );
};
