import { InputCRT } from "@bui/forms";
import { useState } from "react";

const meta = {
  title: "Inputs/InputCRT",
  component: InputCRT,
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
    color: { control: { type: "color" }, defaultValue: "#0099ff" },
  },
};

export default meta;

export const Default = ({
  type = "text",
  placeholder = "Enter Text",
  height = "4rem",
  width = "min(100%,20rem)",
  color = "#0099ff",
}: {
  type?: "text" | "email" | "password" | "number" | "tel" | "url" | "search";
  placeholder?: string;
  height?: string;
  width?: string;
  color?: string;
}) => {
  const [value, setValue] = useState("");
  return (
    <InputCRT
      value={value}
      setValue={setValue}
      type={type}
      placeholder={placeholder}
      height={height}
      width={width}
      color={color}
    />
  );
};
