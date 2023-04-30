/**
 * MD3 Button
 *
 * @param {string} color - The color of the button
 * @param {any} children - The text to display on the button
 * @param {any} props - Any other props to pass to the button
 * @returns {JSX.Element} - The MD3 button
 * @example
 *
 * import { MD3 } from "@bui/buttons";
 *
 * export default function Web() {
 *   return (
 *    <div
 *    style={{
 *      display: "flex",
 *      flexDirection: "column",
 *      alignItems: "center",
 *      justifyContent: "center",
 *      height: "100vh",
 *     }}
 *   >
 *    <MD3>Submit</MD3>
 *   </div>
 *  );
 * }
 *
 * @todo
 * - [ ] Add light version
 */

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Magic = ({
  children,
  color = "#6D44F4",
  ...props
}: {
  color?: string;
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLButtonElement>(null);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const [isHovering, setIsHovering] = useState(false);
  const [particles, setParticles] = useState<any[]>([]);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  useEffect(() => {
    if (ref.current) {
      // @ts-ignore
      const { width, height } = ref.current.getBoundingClientRect();
      setWidth(width);
      setHeight(height);

      // Get the particles from the useParticles hook
      const particles = useParticles(color, width, height);
      setParticles(particles);
    }
  }, []);

  return (
    <motion.button
      ref={ref}
      style={{
        appearance: "none",
        outline: "none",
        border: "none",
        color: "#616161",
        padding: "1em 2em 1em 1.25em",
        fontFamily: "'Open Sans', Roboto, sans-serif",
        fontSize: "1rem",
        fontWeight: "bold",
        cursor: "pointer",
        position: "relative",
        userSelect: "none",
        borderRadius: "1000vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "between",
        gap: "0.75em",
        WebkitTapHighlightColor: "transparent",
      }}
      initial={{
        backgroundColor: "#1d1d1d",
        scale: 1,
        boxShadow: `0px 0px 120px  transparent, 0px 4px 12px #0000000D, 0px 1px 2px #00000019, inset 0px 1px 1px #ffffff0A, 0 0 0 0px #6D44F466, 0 0 20px 20px #6D44F400`,
      }}
      whileHover={{
        backgroundColor: color,
        scale: 1.1,
        boxShadow: `0 0 120px #D0ADFF66, 0 4px 12px #00000001, 0 1px 2px #00000019, inset 0 1px 1px #FFFFFF59, 0 0 0 3px #6D44F466, 0 0 40px 40px #6D44F466`,
      }}
      whileTap={{ scale: 1.05, transition: { scale: { duration: 0.4 } } }}
      transition={{ duration: 0.4 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <Stars isHovering={isHovering} />
      <AnimatePresence>
        {isHovering && (
          <div
            style={{
              overflow: "hidden",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <motion.span
              style={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                width: "60%",
                height: "25%",
                // background: `linear-gradient(90deg, #6e45f4, #ff00ff)`,
                background: "#D3B3FF",
                borderRadius: "1000vw",
                filter: "blur(.75em)",
              }}
              initial={{ opacity: 0, scale: 0.5, x: "-50%" }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        )}
      </AnimatePresence>
      <motion.p
        animate={{
          background: isHovering ? "#fff" : "#333",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {children}
      </motion.p>
      {isHovering && (
        <motion.svg
          viewBox={`0 0 ${width} ${height}`}
          style={{
            display: "block",
            overflow: "visible",
            pointerEvents: "none",
            position: "absolute",
            top: 0,
            left: 0,
            fill: "transparent",
            strokeWidth: "3px",
            strokeDasharray: "1.5 14",
          }}
          initial={{ opacity: 0, strokeDashoffset: 22, stroke: "#E2D9FF" }}
          animate={{
            opacity: 1,
            strokeDashoffset: 6,
            stroke: ["#E2D9FF00", "#E2D9FF", "#E2D9FF00"],
          }}
          transition={{ duration: 2, ease: "linear", repeat: Infinity }}
        >
          <motion.rect
            width="100%"
            height="100%"
            pathLength={10}
            x={0}
            y={0}
            rx={"28px"}
            ry={"28px"}
            filter="blur(3px)"
          />
          <motion.rect
            width="100%"
            height="100%"
            pathLength={10}
            x={0}
            y={0}
            rx={"28px"}
            ry={"28px"}
          />
        </motion.svg>
      )}
      <Particles isHovering={isHovering} particles={particles} />
    </motion.button>
  );
};

const Stars = ({ isHovering }: { isHovering: boolean }) => {
  return (
    <svg viewBox="0 0 24 26" style={{ width: "1.5em", height: "1.25em" }}>
      <motion.path
        animate={{
          fill: isHovering ? "#bbb" : "#333",
          scale: isHovering ? [1, 1.2, 1] : 1,
        }}
        transition={{
          scale: {
            repeat: Infinity,
            duration: 1,
            repeatType: "reverse",
            ease: "easeInOut",
            repeatDelay: 0.5,
          },
        }}
        d="M5.16515 2.62145L5.8075 0.999247C5.83876 0.919722 5.9154 0.866699 6.00112 0.866699C6.08683 0.866699 6.16347 0.919722 6.19473 0.999247L6.83708 2.62145L8.44145 3.27094C8.5201 3.30254 8.57254 3.38003 8.57254 3.4667C8.57254 3.55337 8.5201 3.63085 8.44145 3.66246L6.83708 4.31195L6.19473 5.93415C6.16347 6.0147 6.08683 6.0667 6.00112 6.0667C5.9154 6.0667 5.83876 6.0147 5.8075 5.93415L5.16515 4.31195L3.56078 3.66246C3.48112 3.63085 3.42969 3.55337 3.42969 3.4667C3.42969 3.38003 3.48112 3.30254 3.56078 3.27094L5.16515 2.62145Z"
      />
      <motion.path
        initial={{ x: 4 }}
        animate={{
          fill: isHovering ? "#fff" : "#666",
          scale: isHovering ? [1, 1.2, 1] : 1,
        }}
        transition={{
          scale: {
            delay: 0.7,
            repeat: Infinity,
            duration: 1,
            repeatType: "reverse",
            ease: "easeInOut",
            repeatDelay: 3,
          },
        }}
        d="M11.2362 9.43967C11.5502 9.30067 11.8015 9.05025 11.9405 8.73617L13.5494 5.11725C13.7169 4.74204 14.0887 4.5 14.5 4.5C14.9112 4.5 15.2839 4.74204 15.4506 5.11725L17.0603 8.73617C17.1985 9.05025 17.4497 9.3015 17.7638 9.43967L21.3827 11.0494C21.7579 11.2161 22 11.5887 22 12C22 12.4112 21.7579 12.7831 21.3827 12.9506L17.7638 14.5595C17.4497 14.6985 17.1993 14.9497 17.0603 15.2638L15.4506 18.8827C15.2839 19.2579 14.9112 19.5 14.5 19.5C14.0887 19.5 13.7169 19.2579 13.5494 18.8827L11.9405 15.2638C11.8015 14.9497 11.5502 14.6985 11.2362 14.5595L7.61725 12.9506C7.24204 12.7831 7 12.4112 7 12C7 11.5887 7.24204 11.2161 7.61725 11.0494L11.2362 9.43967Z"
      />
      <motion.path
        animate={{
          fill: isHovering ? "#ccc" : "#444",
          scale: isHovering ? [1, 1.2, 1] : 1,
        }}
        transition={{
          scale: {
            delay: 0.3,
            repeat: Infinity,
            duration: 1,
            repeatType: "reverse",
            ease: "easeInOut",
            repeatDelay: 1,
          },
        }}
        d="M4.60728 19.392L5.67703 16.6875C5.72997 16.5541 5.85854 16.4666 6.00056 16.4666C6.14258 16.4666 6.27031 16.5541 6.32325 16.6875L7.39299 19.392L10.0678 20.4736C10.1997 20.5271 10.2863 20.6563 10.2863 20.7999C10.2863 20.9435 10.1997 21.0735 10.0678 21.1271L7.39299 22.2087L6.32325 24.9123C6.27031 25.0457 6.14258 25.1332 6.00056 25.1332C5.85854 25.1332 5.72997 25.0457 5.67703 24.9123L4.60728 22.2087L1.93333 21.1271C1.8014 21.0735 1.71484 20.9435 1.71484 20.7999C1.71484 20.6563 1.8014 20.5271 1.93333 20.4736L4.60728 19.392Z"
      />
    </svg>
  );
};

// Custom Hooks

// The Particles component that renders the particles using the useParticles hook
const Particles = ({
  particles,
  isHovering,
}: {
  particles: any;
  isHovering: boolean;
}) => {
  return (
    <motion.svg
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "visible",
      }}
      viewBox="0 0 1440 1024"
    >
      {particles.map((particleProps: any, i: number) => (
        <AnimatePresence>
          {!isHovering ? null : <motion.circle key={i} {...particleProps} />}
        </AnimatePresence>
      ))}
    </motion.svg>
  );
};

const useRandom = (min: number, max: number) =>
  Math.random() * (max - min) + min;

// A custom hook that returns an array of particles with their initial and animate props
const useParticles = (color: string, width: number, height: number) => {
  //  A function that returns a random x coordinate for a particle based on index
  const randomX = (i: number) =>
    i % 2 === 0
      ? useRandom(-width / 2, width / 2)
      : useRandom(width / 2 / 2, width + width / 2 / 2);

  // A function that returns a random y coordinate for a particle
  const randomY = () => useRandom(-height, height);

  // An array of particles with their initial and animate props
  const particles = Array.from({ length: 60 }).map((_, i) => {
    const x = randomX(i);
    const y = randomY();

    const angle = useRandom(-Math.PI / 8, Math.PI / 8); // a random angle between -22.5 and 22.5 degrees
    const direction = i % 2 === 0 ? -1 : 1; // a direction based on the index
    const duration = useRandom(3, 5); // a random duration between 3 and 5 seconds
    const radiusX = 100; // pixels
    const radiusY = 500; // pixels

    return {
      r: "20",
      fill: color,
      animate: {
        cx: [
          `${x}%`,
          `${x + Math.cos(angle) * direction * radiusX}%`,
          `${x + Math.cos(angle + Math.PI) * direction * radiusX}%`,
        ],
        cy: [
          `${y}%`,
          `${y + Math.sin(angle * direction) * radiusY}%`,
          `${y + Math.sin((angle + Math.PI) * direction) * radiusY}%`,
        ],
        opacity: [0, 1, 0],
      },
      exit: { opacity: 0, transition: { duration: 0.3 } },
      transition: {
        ease: "easeInOut",
        delay: (0.3 * i) / 5,
        duration,
        repeat: Infinity,
        repeatDelay: (0.3 * 50) / 5,
      },
    };
  });

  return particles;
};
