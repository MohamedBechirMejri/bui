import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const InputSimple = ({
  value = "",
  setValue,
  type = "text",
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
      style={{ width, height, position: "relative" }}
      onClick={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
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

      <motion.div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          color: isFocused ? color : "#888",
          borderRadius: "1.25rem",
          backgroundColor: isFocused ? color + 11 : `#ffffff`,
          fontWeight: 600,
          fontFamily: "Nunito, sans-serif",
        }}
        animate={{
          border: isFocused ? `3px solid ${color}` : `3px solid #888`,
          boxShadow: isFocused ? `0 0 0 1px ${color}` : `0 0 0 0px ${color}00`,
        }}
      >
        <AnimatePresence>
          {/* placeholder */}
          {!isFocused && value === "" && (
            <motion.span
              style={{
                fontFamily: "inherit",
                fontSize: "inherit",
                fontWeight: "inherit",
                color: "#888",
                position: "absolute",
                top: "50%",
                left: "1rem",
                userSelect: "none",
              }}
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: "-50%" }}
              exit={{ opacity: 0, y: "-100%" }}
            >
              {placeholder}
            </motion.span>
          )}
        </AnimatePresence>
        {/* label */}
        <motion.span
          style={{
            fontSize: "0.75em",
            color: "inherit",
            position: "absolute",
            top: "50%",
            left: "1rem",
            userSelect: "none",
          }}
          initial={{ opacity: 0, y: "-50%" }}
          animate={{
            opacity: isFocused ? 1 : [1, 0, 0, 0, 0, 0, 0, 0],
            y: isFocused ? "-180%" : "-50%",
          }}
        >
          {placeholder}
        </motion.span>

        {/* input */}
        <motion.input
          style={{
            boxSizing: "border-box",
            width: "100%",
            height: "100%",
            border: "none",
            outline: "none",
            position: "absolute",
            top: 0,
            left: 0,
            padding: "1rem",
            paddingBlock: "0.25rem",
            fontFamily: "inherit",
            fontSize: "inherit",
            fontWeight: "inherit",
            color: "inherit",
            backgroundColor: "transparent",
          }}
          type={type}
          value={value}
          onChange={e => setValue(e.target.value)}
          {...props}
        />
      </motion.div>
    </div>
  );
};
