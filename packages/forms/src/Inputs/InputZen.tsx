import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const InputZen = ({
  value = "",
  setValue,
  type = "email",
  placeholder = "Enter Email",
  width = "auto",
  height = "4rem",
  color = "#000000",
  ...props
}: {
  value?: string;
  setValue: (value: string) => void;
  type?: "text" | "email" | "password" | "number" | "tel" | "url" | "search";
  placeholder?: string;
  width?: string;
  height?: string;
  color?: string;
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      onClick={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      style={{
        width,
        height,
        position: "relative",
        border: isFocused ? `3px solid ${color}` : `3px solid #888`,
      }}
    >
      <style>
        {`  /* clear the 'X' from Chrome */
            input[type="search"]::-webkit-search-decoration,
            input[type="search"]::-webkit-search-cancel-button,
            input[type="search"]::-webkit-search-results-button,
            input[type="search"]::-webkit-search-results-decoration
            { display: none }
            `}
      </style>
    </div>
  );
};
