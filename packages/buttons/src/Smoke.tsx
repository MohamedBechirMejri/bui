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
  const transition = {
    type: "spring",
    duration: 0.7,
    bounce: 0.2,
  };

  return (
    <MotionConfig transition={transition}>
      <motion.button>h</motion.button>
    </MotionConfig>
  );
};
