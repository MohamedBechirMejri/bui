import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const Colors = ({
  color = "#F5F5FF",
  children,
  ...props
}: {
  color?: string;
  children: React.ReactNode;
}) => {
  const [colors, setColors] = useState<any[]>([]);

  const handleMouseEnter = () => {
    const colors = Array.from({ length: 3 }).map((_, i) => (
      <Color
        key={"color" + i}
        color={`hsl(${Math.random() * 360}, 100%, 50%)`}
        i={i}
      />
    ));
    setColors(c => [
      ...c,
      ...colors,
      <Color key={"color" + 4} color={`hsl(0, 0%, 100%)`} i={4} />,
    ]);
  };

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
        borderRadius: "1em",
        padding: "1em 3em",
      }}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{}}
      // onMouseEnter={handleMouseEnter}
      onMouseDown={handleMouseEnter}
      {...props}
    >
      <AnimatePresence>{colors}</AnimatePresence>
      <motion.p style={{ position: "relative", zIndex: 1 }}>
        {children}
      </motion.p>
    </motion.button>
  );
};

const Color = ({ color, i }: { color: string; i: number }) => {
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
      animate={{ scale: [0, 1] }}
      transition={{ duration: 1, delay: i * 0.1 }}
    />
  );
};
