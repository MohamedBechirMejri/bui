import { useCallback, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

// Custom hook to create and remove ripples
const useRipples = ( height:number, color: string) => {
  const [ripples, setRipples] = useState<React.ReactNode[]>([]);

  // Function to create a new ripple
  const createRipple = () =>
    setRipples([
      ...ripples,
      <RippleEffect key={'ripple#' + ripples.length + 1}   height={height} color={color} />,
    ]);

  // Function to remove all ripples
  const removeRipples = () => setRipples([]);

  // Memoize the ripples array to avoid unnecessary re-rendering
  const memoizedRipples = useMemo(() => ripples, [ripples]);

  return { memoizedRipples, createRipple, removeRipples };
};

export const Ripple = ({
  text = 'Click me!',
  color = "#6633fe",
  height = 50,
  fontSize = '1rem',
  ...props
}: {
  text?: string;
    color?: string;
    height?: number;
    fontSize?: string;
}) => {
  const timeoutRef = useRef<number | null>(null);

  // Use the custom hook to create and remove ripples
  const { memoizedRipples, createRipple, removeRipples } =
    useRipples(  height, color);

  // Memoize the handleMouseDown function to avoid creating a new function on every render
  const handleMouseDown = useCallback(() => {
    createRipple();

    // Clear the timeout if there is one already
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    // Remove all ripples after 3 seconds
    timeoutRef.current = window.setTimeout(() => {
      removeRipples();
    }, 3000);
  }, [createRipple, removeRipples]);

  return (
    <motion.button
      style={{
        appearance: "none",
        outline: "none",
        color,
        fontFamily: "'Open Sans', Roboto, sans-serif",
        fontSize,
        width: height*3,
        height,
        fontWeight: "bold",
        cursor: "pointer",
        position: "relative",
        userSelect: "none",
        borderRadius:  height*3,
        WebkitTapHighlightColor: "transparent",
        boxSizing: "border-box",
        backgroundColor: "transparent",
          border: `3px solid ${color}`,
          backdropFilter: "blur(10px)",
      }} initial={{ backgroundColor: color + "22" }}
        whileHover={{ backgroundColor: color + "44" }}
        whileTap={{ backgroundColor: color + "66" }}
        transition={{ duration: 0.2 }}
      onMouseDown={handleMouseDown}
      {...props}
    >
      {memoizedRipples}

      <p
        style={{
          position: "absolute",
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
          margin: 0,
          padding:0
        }}
      >{text}</p>

    </motion.button>
  );
};

const RippleEffect = ({
  height,
  color,
}: {
  height: number;
  color: string;
}) => {
  return (
    <motion.svg
      viewBox={`0 0 ${height*3} ${height}`}
      style={{
        position: "absolute",
        top: '0',
        left: '0',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        borderRadius: "inherit",
        backdropFilter: "blur(10px)",
        overflow: "visible",
        pointerEvents: "none",
        strokeWidth: "3px",
      }}
      animate={{
        scale: [1, 2],
        opacity: [1, 0],
        fill: [color + "44", color + "00"],
        stroke: [color + "22", color + "66"],
      }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <motion.rect
        width={height*3}
        height={height}
        pathLength={10}
        x={0}
        y={0}
        rx={"28px"}
        ry={"28px"}
        filter="blur(2px)"
      />
      <motion.rect
        width={height * 3}
        height={height}
        pathLength={10}
        x={0}
        y={0}
        rx={"28px"}
        ry={"28px"}
        filter="blur(5px)"
      />
    </motion.svg>
  );
};
