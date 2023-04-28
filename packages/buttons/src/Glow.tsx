/**
 * Glow button
 *
 * @param {string} text - The text to display on the button
 * @param {string} color - The color of the text
 * @param {any} props - Any other props to pass to the button
 * @returns {JSX.Element} - The glow button
 * @example
 *
 * import { Glow } from "@bui/buttons";
 *
 * export default function Web() {
 *  return (
 *   <div
 *    style={{
 *    display: "flex",
 *    flexDirection: "column",
 *    alignItems: "center",
 *    justifyContent: "center",
 *    height: "100vh",
 *        }}
 *   >
 *     <Glow
 *      onClick={() => setIsLoading(!isLoading)}
 *     text={"Toggle"}
 *     color={"#ffffff"}
 *    />
 *   </div>
 * );
 * }
 *
 * @todo
 *  - tweak colors
 * - animate border
 * - implememnt better customizability
 * - add better glow on hover
 * - add better click effect
 * - refactor all code
 * - reorganize elements (top div shouldn't have any event listeners, etc.)
 * - add light mode
 */

import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";

export const Glow = ({ text = "Submit", color = "#ffffff", ...props }) => {
  const buttonRef = useRef(null);
  // @ts-ignore TODO: fix this
  const buttonWidth = buttonRef.current?.offsetWidth;
  // @ts-ignore TODO: fix this
  const buttonHeight = buttonRef.current?.offsetHeight;

  const cols = buttonWidth / 16;
  const rows = buttonHeight / 16;

  const [mousePosition, setMousePosition] = useState({ x: -240000, y: 0 });

  const handleMouseMove = (e: any) => {
    const mouseX = e.pageX - e.currentTarget.offsetLeft;
    const mouseY = e.pageY - e.currentTarget.offsetTop;

    const x = (mouseX / buttonWidth) * 100;
    const y = (mouseY / buttonHeight) * 100;

    setMousePosition({ x, y });
  };

  const shadows = [];

  // determine how many shadows to create
  for (let i = 0; i <= cols; i++) {
    for (let j = 0; j <= rows; j++) {
      shadows.push(
        <Shadow
          key={`s${i}-${j}`}
          left={i * (100 / cols)}
          top={j * (100 / rows)}
          color={
            // TODO: add more colors and make this customizable
            // top left
            i < cols / 2 && j < rows / 2
              ? "#304EAE"
              : // top right
              i > cols / 2 && j < rows / 2
              ? "#FF6D6D"
              : // bottom right
              i > cols / 2 && j > rows / 2
              ? "#FFC107"
              : // bottom left
              i < cols / 2 && j > rows / 2
              ? "#00B74A"
              : // fallback
                "#888888"
          }
          mousePosition={mousePosition}
        />
      );
    }
  }

  return (
    <motion.div
      ref={buttonRef}
      style={{
        height: "4rem",
        width: "12rem",
        backgroundColor: "#00000000",
        fontWeight: "bold",
        fontSize: "1rem",
        fontFamily: "sans-serif",
        position: "relative",
        padding: 0,
        overflow: "hidden",
        cursor: "pointer",
        borderRadius: "1.25rem",
        userSelect: "none",
        color,
      }}
      initial={{ boxShadow: "0 0 .25rem 0px #14013d" }}
      whileHover={{
        boxShadow: "0 0 0rem 2px #14013d",
        transition: { duration: 0.5 },
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: -24, y: -1 })}
      {...props}
    >
      {shadows}
      <motion.span
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: "flex",
          zIndex: 1,
          backgroundColor: "#ffffff00",
          backdropFilter: "blur(.5rem)",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {text}
      </motion.span>
      <motion.span
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: "block",
          zIndex: 2,
          borderRadius: "inherit",
        }}
        initial={{ boxShadow: "0 0 0 0px #88888800 inset" }}
        whileTap={{
          boxShadow: ["0 0 0 3px #88888800 inset", "0 0 0 0px #888888 inset"],
        }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
};

const Shadow = ({
  left,
  top,
  color,
  mousePosition,
}: {
  left: number;
  top: number;
  color: string;
  mousePosition: { x: number; y: number };
}) => {
  return (
    <AnimatePresence>
      {mousePosition.x < left + 16 &&
        mousePosition.x > left - 16 &&
        mousePosition.y < top + 16 &&
        mousePosition.y > top - 16 && (
          <motion.span
            style={{
              position: "absolute",
              width: 16,
              height: 16,
              borderRadius: "2rem",
              boxShadow: `0 0 1rem 0.5rem ${color}`,
              filter: "blur(1rem)",
              x: -50 + "%",
              y: -50 + "%",
              left: left + "%",
              top: top + "%",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.2 } }}
          />
        )}
    </AnimatePresence>
  );
};
