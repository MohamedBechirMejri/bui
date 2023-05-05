import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const Wobble = ({
  color = "#ac56f5",
  children,
  ...props
}: {
  color?: string;
  children: React.ReactNode;
}) => {
  const [isMouseIn, setIsMouseIn] = useState(false);

  const handleMouseEnter = () => setIsMouseIn(true);
  const handleMouseLeave = () => setIsMouseIn(false);

  return (
    <motion.button
      style={{
        color: "#fff",
        border: "none",
        padding: "1em 3em",
        fontSize: "1rem",
        fontWeight: "bold",
        cursor: "pointer",
        outline: "none",
        position: "relative",
        overflow: "hidden",
        userSelect: "none",
        backgroundColor: color,
        borderRadius: "1em",
      }}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.05 }}
      transition={{ type: "spring", damping: 8, stiffness: 250 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <AnimatePresence>
        {isMouseIn && (
          <motion.span
            style={{
              position: "absolute",
              top: 50 + "%",
              left: 50 + "%",
              width: "5em",
              height: "5em",
              borderRadius: "9000vw",
              backgroundColor: "#88888855",
              x: "-50%",
              y: "-50%",
              filter: "blur(.25em)",
            }}
            animate={{ scale: [0, 3], opacity: [1, 0] }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>
      {children}
    </motion.button>
  );
};
