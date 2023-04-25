import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export const YinYang = ({ text = "Submit", ...props }) => {
  const ref = useRef(null);

  return (
    <motion.button
      style={{
        padding: "1rem",
        paddingInline: "2.5rem",
        backgroundColor: "#E2841300",
        fontWeight: "bold",
        fontSize: "1rem",
        fontFamily: "sans-serif",
        position: "relative",
        border: "none",
      }}
      {...props}
    >
      <canvas
        ref={ref}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      ></canvas>
      {text}
    </motion.button>
  );
};
