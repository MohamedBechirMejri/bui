import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

export const Colors = ({
  color = "#F5F5FF",
  text = "Click me!",
  numberOfColors = 5,
  duration = 1,
  ...props
}: {
    color?: string;
    text?: string;
    numberOfColors?: number;
    duration?: number;
}) => {
  const [colors, setColors] = useState<any[]>([]);

  const generateColors = () => {
    // create an array of 5 colors with random hues and one white color
    return Array.from({ length:  numberOfColors }).map((_, i) => (
      <Color
        key={"color" + i}
        color={
          i ===  numberOfColors - 1
            ? color
            : `hsl(${Math.random() * 360}, 100%, 50%)`
        }
        i={i}
        duration={duration}
      />
    ));
  };

  const handleMouseEnter = () => {
    // add the generated colors to the state
    setColors(c => [...c, ...generateColors()]);
  };

  useEffect(() => {
    // set a timer to clear the colors state after 5 seconds
    const timer = setTimeout(() => {
      setColors([]);
    },  numberOfColors * duration * 1000);
    // clean up the timer when the component unmounts or the colors state changes
    return () => {
      clearTimeout(timer);
    };
  }, [colors, duration, numberOfColors]);

  return (
    <motion.button
      style={{
        color: "#000",
        border: "none",
        fontSize: "1rem",
        fontWeight: "bold",
        cursor: "pointer",
        outline: "none",
        position: "relative",
        overflow: "hidden",
        userSelect: "none",
        backgroundColor: color,
        borderRadius: "10em",
        padding: ".75em 3em",
      }}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 1.02 }}
      transition={{ type: "spring", damping: 8, stiffness: 250 }}
      onMouseDown={handleMouseEnter}
      {...props}
    >
      <AnimatePresence>{colors}</AnimatePresence>
      <motion.p style={{ position: "relative", zIndex: 1 }}>
        {text}
      </motion.p>
    </motion.button>
  );
};

const Color = ({ color, i, duration }: { color: string; i: number, duration: number }) => {
  return (
    <motion.span
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "50vw",
        height: "50vw",
        borderRadius: "9000vw",
        backgroundColor: color,
        x: "-50%",
        y: "-50%",
      }}
      animate={{ scale: [0, 1], opacity: [ 1, 0] }}
      transition={{ duration, delay: i * 0.1 }}
    />
  );
};
