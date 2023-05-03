import { useCallback, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

// Custom hook to create and remove ripples
const useRipples = (color: string) => {
  const [ripples, setRipples] = useState<React.ReactNode[]>([]);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  // Callback ref to access the button element
  const ref = useCallback(
    (node: { getBoundingClientRect: () => { width: any; height: any } }) => {
      if (node) {
        // @ts-ignore
        const { width, height } = node.getBoundingClientRect();
        setWidth(width);
        setHeight(height);
      }
    },
    []
  );

  // Function to create a new ripple
  const createRipple = () =>
    setRipples([
      ...ripples,
      <RippleEffect width={width} height={height} color={color} />,
    ]);

  // Function to remove all ripples
  const removeRipples = () => setRipples([]);

  // Memoize the ripples array to avoid unnecessary re-rendering
  const memoizedRipples = useMemo(() => ripples, [ripples]);

  return { ref, memoizedRipples, createRipple, removeRipples };
};

export const Ripple = ({
  children,
  color = "#6633fe",
  ...props
}: {
  color?: string;
  children: React.ReactNode;
}) => {
  const timeoutRef = useRef<number | null>(null);

  // Use the custom hook to create and remove ripples
  const { ref, memoizedRipples, createRipple, removeRipples } =
    useRipples(color);

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
        color: "#fff",
        fontFamily: "'Open Sans', Roboto, sans-serif",
        fontSize: "1rem",
        width: "max-content",
        height: "max-content",
        fontWeight: "bold",
        cursor: "pointer",
        position: "relative",
        userSelect: "none",
        borderRadius: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        WebkitTapHighlightColor: "transparent",
      }}
      onMouseDown={handleMouseDown}
    >
      {memoizedRipples}
      <motion.div
        ref={ref}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          padding: "1em 2em",
          width: "max-content",
          height: "max-content",
          border: `3px solid ${color}`,
          borderRadius: "inherit",
          outline: "none",
          backdropFilter: "blur(10px)",
          x: "-50%",
          y: "-50%",
          textShadow: `0 0 20px ${color}`,
        }}
        initial={{ backgroundColor: color + "22" }}
        whileHover={{ backgroundColor: color + "44" }}
        whileTap={{ backgroundColor: color + "66" }}
        transition={{ duration: 0.2 }}
        layout
        {...props}
      >
        <motion.p>{children}</motion.p>
      </motion.div>
    </motion.button>
  );
};

const RippleEffect = ({
  width,
  height,
  color,
}: {
  width: number;
  height: number;
  color: string;
}) => {
  return (
    <motion.svg
      viewBox={`0 0 ${width} ${height}`}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width,
        height,
        borderRadius: "inherit",
        backdropFilter: "blur(10px)",
        x: "-50%",
        y: "-50%",
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
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <motion.rect
        width="100%"
        height="100%"
        pathLength={10}
        x={0}
        y={0}
        rx={"28px"}
        ry={"28px"}
        filter="blur(2px)"
      />
      <motion.rect
        width="100%"
        height="100%"
        pathLength={10}
        x={0}
        y={0}
        rx={"28px"}
        ry={"28px"}
        filter="blur(1px)"
      />
    </motion.svg>
  );
};
