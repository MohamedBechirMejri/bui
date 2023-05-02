import { Suspense, useEffect, useRef, useState } from "react";
import {
  useSpring,
  useTransform,
  motion,
  MotionConfig,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import useMeasure from "react-use-measure";
import { motion as motion3d } from "framer-motion-3d";
import { Canvas } from "@react-three/fiber";

export const Smoke = ({
  children,
  color = "#2882fc",
  ...props
}: {
  color?: string;
  children: React.ReactNode;
}) => {
  const transition = {
    type: "spring",
    duration: 0.7,
    bounce: 0.2,
  };

  const ref = useRef<HTMLButtonElement>(null);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  useEffect(() => {
    if (ref.current) {
      // @ts-ignore
      const { width, height } = ref.current.getBoundingClientRect();
      setWidth(width);
      setHeight(height);
    }
  }, []);

  return (
    <MotionConfig transition={transition}>
      <motion.button
        ref={ref}
        style={{
          appearance: "none",
          outline: "none",
          color: "#fff",
          padding: "1em 2em",
          fontFamily: "'Open Sans', Roboto, sans-serif",
          fontSize: "1rem",
          fontWeight: "bold",
          cursor: "pointer",
          position: "relative",
          userSelect: "none",
          borderRadius: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "between",
          gap: "0.75em",
          WebkitTapHighlightColor: "transparent",
          border: `3px solid ${color}`,
        }}
        initial={{ backgroundColor: color + "22" }}
        whileHover={{ backgroundColor: color + "44" }}
        layout
        whileTap={{ backgroundColor: color + "66" }}
        transition={{ duration: 0.2 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <motion.p>{children}</motion.p>
        <AnimatePresence></AnimatePresence>
      </motion.button>
    </MotionConfig>
  );
};
