

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export const MD3 = ({
  color = "#f5d4a6",
  text = 'Click me!',
  ...props
}: {
    color?: string;
    text?: string;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [colors, setColors] = useState({
    backgroundColor: color + "55",
    hoverColor: color + "77",
    clickColor: color + "99",
    textColor: color,
  })

  const handleMouseMove = (e: any) => {
    const mouseX = e.pageX - e.currentTarget.offsetLeft;
    const mouseY = e.pageY - e.currentTarget.offsetTop;

    const x = (mouseX / e.currentTarget.offsetWidth) * 100;
    const y = (mouseY / e.currentTarget.offsetHeight) * 100;

    setMousePosition({ x, y });
  };

  const handleMouseDown = () => {
    setIsMouseDown(true);

    setTimeout(() => {
      setIsMouseDown(false);
    }
    , 200);
  }
  const handleMouseUp = () => setIsMouseDown(false);

  useEffect(() => {

    // convert 3 digit hex to 6 digit hex
    const hex6 = color.length === 4 ? color.split('').map(x => x + x).slice(1, 8).join() : color;

    setColors({
      backgroundColor: hex6 + "55",
      hoverColor: hex6 + "77",
      clickColor: hex6 + "99",
      textColor: hex6,
    })
  }, [color])

  return (
    <motion.button
      style={{
        color: colors.textColor,
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
      initial={{ backgroundColor: colors.backgroundColor , borderRadius: "1em" }}
      whileHover={{ backgroundColor: colors.hoverColor }}
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
              backgroundColor: colors.clickColor,
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
      {text}
    </motion.button>
  );
};
