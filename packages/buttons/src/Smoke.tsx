import { Suspense, useState } from "react";
import {
  useSpring,
  useTransform,
  motion,
  MotionConfig,
  useMotionValue,
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
  const [ref, bounds] = useMeasure({ scroll: false });
  const [isHover, setIsHover] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const transition = {
    type: "spring",
    duration: 0.7,
    bounce: 0.2,
  };

  return (
    <MotionConfig transition={transition}>
      <motion.button
        ref={ref}
        initial={false}
        animate={isHover ? "hover" : "rest"}
        whileTap="press"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.5 },
          press: { scale: 1.4 },
        }}
        onHoverStart={() => {
          resetMousePosition();
          setIsHover(true);
        }}
        onHoverEnd={() => {
          resetMousePosition();
          setIsHover(false);
        }}
        onTapStart={() => setIsPress(true)}
        onTap={() => setIsPress(false)}
        onTapCancel={() => setIsPress(false)}
        onPointerMove={e => {
          mouseX.set(e.clientX - bounds.x - bounds.width / 2);
          mouseY.set(e.clientY - bounds.y - bounds.height / 2);
        }}
      >
        <motion.div
          className="shapes"
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 },
          }}
        >
          <div className="pink blush" />
          <div className="blue blush" />
          <div className="container">
            <Suspense fallback={null}></Suspense>
          </div>
        </motion.div>
        <motion.div
          variants={{ hover: { scale: 0.85 }, press: { scale: 1.1 } }}
          className="label"
        >
          play
        </motion.div>
      </motion.button>
    </MotionConfig>
  );
};

const spring = { stiffness: 600, damping: 30 };

// use-smooth-transform.ts

export function useSmoothTransform(
  value: any,
  springOptions: any,
  transformer: any
) {
  return useSpring(useTransform(value, transformer), springOptions);
}
