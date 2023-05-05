import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const Wobble = ({
  color = "#ffffff",
  children,
  ...props
}: {
  color?: string;
  children: React.ReactNode;
}) => {
  const [isMouseIn, setIsMouseIn] = useState(false);

  const handleMouseEnter = () => setIsMouseIn(true);
  const handleMouseLeave = () => setIsMouseIn(false);

  // A function to determine the text color based on the background color
  const getTextColor = (color: string) => {
    // Convert the hex color to RGB values
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);

    // Calculate the luminance of the color
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Return white or black depending on the luminance
    return luminance > 0.5 ? "#000" : "#fff";
  };

  return (
    <motion.button
      style={{
        color: getTextColor(color), // Use the text color function here
        border: "none",
        // padding: "1em 3em",
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
      initial={{ scale: 1, padding: "1em 3em" }}
      whileHover={{ scale: 1.1, padding: "1em 4em" }}
      whileTap={{ scale: 1.05, padding: "1em 3em" }}
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
            animate={{ scale: [0, 4], opacity: [1, 0] }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
      <motion.span>{children}</motion.span>
    </motion.button>
  );
};
