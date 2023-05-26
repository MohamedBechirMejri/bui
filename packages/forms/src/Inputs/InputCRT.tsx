import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const InputCRT = ({
  value = "",
  setValue,
  type = "text",
  placeholder = "Enter Text",
  width = "auto",
  height = "6rem",
  color = "#00ff00",
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
        border: `3px solid ${color}22`,
        borderRadius: "0.5rem",
        overflow: "hidden",
      }}
    >
      <style>
        {`  /* clear the 'X' from Chrome */
            input[type="search"]::-webkit-search-decoration,
            input[type="search"]::-webkit-search-cancel-button,
            input[type="search"]::-webkit-search-results-button,
            input[type="search"]::-webkit-search-results-decoration
            {
               display: none
            }
            input.buicrtinput
            {
              -webkit-appearance: none;
              -moz-appearance: none;
              appearance: none;
            }
            input.buicrtinput::placeholder
            {
              color: transparent;
            }
            `}
      </style>

      <motion.input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder={placeholder}
        className="buicrtinput"
        style={{
          width: "95%",
          height: "100%",
          position: "absolute",
          zIndex: 3,
          left: 0,
          top: 0,
          background: "transparent",
          border: "none",
          outline: "none",
          color: "transparent",
          textShadow: `0 0 0 ${color}99`,
          caretColor: color,
          padding: "0 .5rem",
          fontSize: "2rem",
          fontFamily: "monospace",
          fontWeight: 600,
        }}
        animate={{ opacity: [0.15, 1] }}
        transition={{
          ease: "linear",
          duration: 0.001,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="crt"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: 2,
          left: 0,
          top: 0,
          background: `linear-gradient( ${color}77, ${color}77 3px, transparent 3px, transparent 5px )`,
          backgroundSize: "100% 5px",
        }}
        animate={{ backgroundPosition: ["0% 0%", "0% -100%"], opacity: [0, 1] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          opacity: { duration: 0.001, repeat: Infinity },
        }}
      />
    </div>
  );
};
