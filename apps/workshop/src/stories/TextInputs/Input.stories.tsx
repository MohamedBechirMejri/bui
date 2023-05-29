import { Input } from "@bui/forms";
import { useState } from "react";

const meta = {
  title: "Inputs/Input",
  component: Input,
  // tags: ['autodocs'],
  argTypes: {
    value: { control: { type: "text" } },
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "number", "tel", "url", "search"],
      defaultValue: "email",
    },
    placeholder: { control: { type: "text" } },
    height: { control: { type: "text" }, defaultValue: "2rem" },
    width: { control: { type: "text" }, defaultValue: "min(100%,20rem)" },
    color: { control: { type: "color" }, defaultValue: "#00ff00" },
  },
};

export default meta;

export const Default = ({
  type = "email",
  placeholder = "Enter Email",
  height = "2rem",
  width = "min(100%,20rem)",
  color = "#00ff00",
}: {
  type?: "text" | "email" | "password" | "number" | "tel" | "url" | "search";
  placeholder?: string;
  height?: string;
  width?: string;
  color?: string;
}) => {
  const [value, setValue] = useState("");
  return (
    <Input
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
