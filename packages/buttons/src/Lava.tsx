/**
 * TODO: fix animation - make the circles move in a more natural way
 * TODO: fix styling bug - use styled-components
 * TODO: handle large width
 */

import { motion } from "framer-motion";

const colors = {
  color1: "rgba(255, 163, 26, 0.7)",
  color2: "#1a23ff",
  color3: "#e21bda",
  color4: "rgba(255, 232, 26, 0.7)",
  shadow: "rgba(255, 223, 87, 0.5)",
  shadowInsetTop: "rgba(255, 223, 52, 0.9)",
  shadowInsetBottom: "rgba(255, 250, 215, 0.8)",
  radialInner: "#ffd215",
  radialOuter: "#fff172",
  color: "#fff",
};

const circles = [
  { initial: { x: 0, y: -40 }, animate: { x: [0, 12], y: [16, 64] } },

  { initial: { x: 92, y: 8 }, animate: { x: [80, 72], y: [-10, -48] } },
  { initial: { x: -12, y: -12 }, animate: { x: [20, 12], y: [12, 4] } },
  { initial: { x: 80, y: -12 }, animate: { x: [76, 112], y: [-12, -8] } },
  { initial: { x: 12, y: -4 }, animate: { x: [84, 40], y: [28, -32] } },
  { initial: { x: 56, y: 16 }, animate: { x: [28, 76], y: [-16, -56] } },
  { initial: { x: 8, y: 28 }, animate: { x: [8, 20], y: [28, -60] } },
  { initial: { x: 28, y: -4 }, animate: { x: [32, 56], y: [-4, -20] } },
  { initial: { x: 20, y: -12 }, animate: { x: [20, 80], y: [-12, -8] } },
  { initial: { x: 64, y: 16 }, animate: { x: [68, 100], y: [20, 28] } },
  { initial: { x: 4, y: 4 }, animate: { x: [4, 68], y: [4, 20] } },
  {
    initial: { blur: 14, x: 52, y: 4 },
    animate: { x: [52, 56, 60], y: [4, -2, -32] },
  },
];
export const Lava = ({ text = 'Click me!', ...props } ) => {
  return (
    <motion.button
      className="bui-lava"
      style={{
        WebkitTapHighlightColor: "transparent",
        WebkitAppearance: "none",
        outline: "none",
        position: "relative",
        cursor: "pointer",
        border: "none",
        display: "table",
        borderRadius: "24px",
        padding: "0",
        margin: "0",
        textAlign: "center",
        fontFamily: `"Inter", system-ui, sans-serif`,
        fontWeight: 600,
        fontSize: "1rem",
        width: "max-content",
        height: "max-content",
        letterSpacing: "0.02em",
        lineHeight: 1.5,
        color: colors.color,
        background: `radial-gradient(circle, ${colors.radialInner}, ${colors.radialOuter} 80%)`,
        boxShadow: `0 0 14px ${colors.shadow}`,
      }}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1 }}
      transition={{ type: "spring", damping: 8, stiffness: 250 }}
      {...props}
    >
      <style>
        {`
         button.bui-lava:before {
          content: "";
          pointer-events: none;
          position: absolute;
          z-index: 3;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          border-radius: inherit;
          box-shadow: inset 0 3px 12px var(--c-shadow-inset-top),
            inset 0 -3px 4px var(--c-shadow-inset-bottom);
        }
        html {
          box-sizing: border-box;
          -webkit-font-smoothing: antialiased;
        }
        `}
      </style>
      <div
        className="wrapper"
        style={{
          WebkitMaskImage: "-webkit-radial-gradient(white, black)",
          overflow: "hidden",
          borderRadius: "inherit",
          minWidth: "7.6875em", // 123px
          padding: "0.75em 0em",
        }}
      >
        <span
          style={{ display: "inline-block", position: "relative", zIndex: 1 }}
        >
          {text}
        </span>
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              filter: /2|3/.test(`${i}`)
                ? "blur(14px)"
                : /4|5/.test(`${i}`)
                ? "blur(16px)"
                : /1|6|7|10|11/.test(`${i}`)
                ? "blur(12px)"
                : "blur(8px)",
              // @ts-ignore
              background: colors[`color${(i % 4) + 1}`],
            }}
            variants={circles[i]}
            animate="animate"
            // initial="initial"
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </motion.button>
  );
};
