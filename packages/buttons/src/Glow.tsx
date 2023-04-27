import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";

export const Glow = ({ text = "Submit", textColor = "#fff", ...props }) => {
  const buttonRef = useRef(null);
  // @ts-ignore TODO: fix this
  const buttonWidth = buttonRef.current?.offsetWidth;
  // @ts-ignore TODO: fix this
  const buttonHeight = buttonRef.current?.offsetHeight;

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleOnMouseMove = (e: any) => {
    const mouseX = e.pageX - e.target.offsetLeft;
    const mouseY = e.pageY - e.target.offsetTop;

    const x = (mouseX / buttonWidth) * 100;
    const y = (mouseY / buttonHeight) * 100;

    setMousePosition({ x, y });
  };

  const cols = buttonWidth / 16;
  const rows = buttonHeight / 16;

  const shadows = [];

  // determine how many shadows to create
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
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
                "#00B74A"
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
        border: "none",
        padding: 0,
        overflow: "hidden",
        cursor: "pointer",
        borderRadius: ".5rem",
        color: textColor,
      }}
      onMouseMove={handleOnMouseMove}
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
          backgroundColor: "#ffffff33",
          backdropFilter: "blur(.5rem)",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {text}
      </motion.span>
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
