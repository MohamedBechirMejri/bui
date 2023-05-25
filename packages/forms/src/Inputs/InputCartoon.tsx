import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const InputCartoon = ({
  value = "",
  setValue,
  inputType = "text",
  placeholder = "Enter Email",
  width = "auto",
  height = "4rem",
  ...props
}: {
  value?: string;
  setValue: (value: string) => void;
  inputType?:
    | "text"
    | "email"
    | "password"
    | "number"
    | "tel"
    | "url"
    | "search";
  placeholder?: string;
  width?: string;
  height?: string;
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
          border: "3px solid black",
          backgroundColor: "black",
        }}
      />
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          position: "absolute",
          border: "3px solid black",
          fontFamily: "monospace",
          fontSize: "1.25rem",
          fontWeight: 900,
          color: "black",
        }}
        initial={{ top: 0, left: 0 }}
        animate={{
          top: isFocused ? -8 : 0,
          left: isFocused ? -8 : 0,
          transition: isFocused
            ? { type: "spring", damping: 8, stiffness: 200 }
            : {},
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
                color: "#757575",
                position: "absolute",
                top: "50%",
                left: "1rem",
                userSelect: "none",
                y: "-50%",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {placeholder}
            </motion.span>
          )}
        </AnimatePresence>
        {/* label */}
        <motion.span
          style={{
            fontFamily: "monospace",
            fontSize: "0.75rem",
            fontWeight: 900,
            color: "black",
            position: "absolute",
            top: "50%",
            left: "1rem",
            userSelect: "none",
          }}
          initial={{ opacity: 0, y: "-140%" }}
          animate={{
            opacity: isFocused ? 1 : 0,
            y: isFocused ? "-180%" : "-140%",
          }}
          transition={{ duration: 0.2, delay: isFocused ? 0.1 : 0 }}
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
          type={inputType}
          value={value}
          onChange={e => setValue(e.target.value)}
          {...props}
        />
      </motion.div>
    </div>
  );
};
