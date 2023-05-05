import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const WobbleNoText = ({
  color = "#F5F5FF",
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

  // A function to convert a hex color to an RGBA value with some transparency
  const getRippleColor = (color: string) => {
    // Convert the hex color to RGB values
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);

    // Return an RGBA value with some transparency
    return `rgba(${(r * 2) / 3}, ${(g * 2) / 3}, ${(b * 2) / 3}, 1)`;
  };

  return (
    <motion.button
      style={{
        color: getTextColor(color), // Use the text color function here
        border: "none",
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
      whileHover={{ scale: 1, padding: "1.25em 4em" }}
      whileTap={{ scale: 1, padding: "1em 3em" }}
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
              top: "50%",
              left: "50%",
              width: "50vw",
              height: "50vw",
              borderRadius: "9000vw",
              backgroundColor: getRippleColor(color),
              x: "-50%",
              y: "-50%",
              filter: "blur(.25em)",
            }}
            animate={{ scale: [0, 1], opacity: [1, 0] }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
      <motion.p>{children}</motion.p>
    </motion.button>
  );
};
