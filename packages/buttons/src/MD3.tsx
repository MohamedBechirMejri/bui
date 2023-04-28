/**
 * MD3 Button
 *
 * @param {string} color - The color of the button
 * @param {any} children - The text to display on the button
 * @param {any} props - Any other props to pass to the button
 * @returns {JSX.Element} - The MD3 button
 * @example
 *
 * import { MD3 } from "@bui/buttons";
 *
 * export default function Web() {
 *   return (
 *    <div
 *    style={{
 *      display: "flex",
 *      flexDirection: "column",
 *      alignItems: "center",
 *      justifyContent: "center",
 *      height: "100vh",
 *     }}
 *   >
 *    <MD3>Submit</MD3>
 *   </div>
 *  );
 * }
 *
 * @todo
 * - [ ] Add light version
 */

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const MD3 = ({
  color = "#297297",
  children,
  ...props
}: {
  color?: string;
  children: React.ReactNode;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleMouseMove = (e: any) => {
    const mouseX = e.pageX - e.currentTarget.offsetLeft;
    const mouseY = e.pageY - e.currentTarget.offsetTop;

    const x = (mouseX / e.currentTarget.offsetWidth) * 100;
    const y = (mouseY / e.currentTarget.offsetHeight) * 100;

    setMousePosition({ x, y });
  };

  const handleMouseDown = () => setIsMouseDown(true);
  const handleMouseUp = () => setIsMouseDown(false);

  return (
    <motion.button
      style={{
        color,
        border: "none",
        padding: "1em 2em",
        fontSize: "1rem",
        fontWeight: "bold",
        cursor: "pointer",
        outline: "none",
        position: "relative",
        overflow: "hidden",
        userSelect: "none",
      }}
      initial={{ backgroundColor: color + "55", borderRadius: "1em" }}
      whileHover={{ backgroundColor: color + "77" }}
      whileTap={{ borderRadius: "1.5em" }}
      transition={{ duration: 0.4 }}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      {...props}
    >
      <AnimatePresence>
        {isMouseDown && (
          <motion.span
            style={{
              position: "absolute",
              top: mousePosition.y + "%",
              left: mousePosition.x + "%",
              width: "5em",
              height: "5em",
              borderRadius: "9000vw",
              backgroundColor: "#88888855",
              x: "-50%",
              y: "-50%",
              filter: "blur(.25em)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0, scale: 2 }}
            transition={{ duration: 0.4 }}
          />
        )}
      </AnimatePresence>
      {children}
    </motion.button>
  );
};
