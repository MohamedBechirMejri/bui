/**
 * ComingUpNext.tsx
 * @packageDocumentation
 * @module ComingUpNext
 * @category Components
 *
 * @param {string} text - The text to display.
 * @returns {JSX.Element} - The ComingUpNext component.
 *
 * @example
 *
 * import LoaderWrapper, { ComingUpNext } from "@bui/loaders";
 * import { useState } from "react";
 *
 * const App = () => {
 * const [isLoading, setIsLoading] = useState(false);
 *
 * return (
 *     <div>
 *         <button onClick={() => setIsLoading(!isLoading)}>Toggle</button>
 *         <LoaderWrapper isLoading={isLoading} loader={<ComingUpNext />} />
 *     </div>
 *       );
 * };
 *
 * export default App;
 *
 */

import { motion } from "framer-motion";

export const ComingUpNext = ({ text = "Coming up next" }) => {
  return (
    // The outer div is the container for the animation
    <motion.div
      style={{
        position: "fixed",
        bottom: "1.5rem",
        left: "1rem",
        width: 300,
        height: 100,
        transformOrigin: "top",
        backgroundColor: "#E28413",
        overflow: "hidden",
        borderRadius: 0,
      }}
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.75, ease: "easeInOut", delay: 0.5 }}
    >
      {/* The inner div is the container for the text and animated elements */}
      <motion.div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformOrigin: "top",
          backgroundColor: "#002",
          overflow: "hidden",
        }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{
          scaleY: 0,
          transition: { duration: 0.7, ease: "easeInOut", delay: 0.3 },
        }}
        transition={{ duration: 0.7, ease: "easeInOut", delay: 0.5 }}
      >
        {/* top line */}
        <motion.span
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 5,
            overflow: "hidden",
          }}
        >
          <motion.span
            style={{
              position: "absolute",
              top: 0,
              width: "20%",
              height: "100%",
              backgroundColor: "#E28413",
              filter: "blur(2px)",
            }}
            initial={{ left: "-20%" }}
            animate={{ left: "100%" }}
            transition={{
              duration: 10,
              ease: "easeInOut",
              delay: 3,
              repeat: Infinity,
            }}
          />
        </motion.span>

        {/* gradient background */}
        <motion.span
          style={{
            position: "absolute",
            top: "-10%",
            left: 0,
            width: "30%",
            height: "150%",
            background: "#E2841399",
            filter: "blur(10px)",
            skewX: -10,
            // zIndex: 20,
          }}
          initial={{ x: "-120%" }}
          animate={{ x: "400%" }}
          transition={{
            duration: 3,
            ease: "anticipate",
            delay: 1,
            repeat: Infinity,
          }}
        />

        {/* the paragraph element is the container for the text */}
        <motion.p
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#FBF5F3",
            fontSize: "1.5rem",
            fontWeight: 700,
            margin: 0,
            fontFamily: "sans-serif",
            width: "100%",
            textAlign: "center",
            textTransform: "capitalize",
          }}
        >
          {/* the text */}
          <motion.strong
            style={{ display: "block" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: -5,
              transition: { duration: 0.3, delay: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 1 }}
          >
            {text}
          </motion.strong>
        </motion.p>
        {/* bottom line */}
        <motion.span
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 5,
            overflow: "hidden",
          }}
        >
          <motion.span
            style={{
              position: "absolute",
              bottom: 0,
              width: "20%",
              height: "100%",
              backgroundColor: "#E28413",
              filter: "blur(2px)",
            }}
            initial={{ right: "-20%" }}
            animate={{ right: "100%" }}
            transition={{
              duration: 10,
              ease: "easeInOut",
              delay: 4,
              repeat: Infinity,
            }}
          />
        </motion.span>
      </motion.div>
    </motion.div>
  );
};
