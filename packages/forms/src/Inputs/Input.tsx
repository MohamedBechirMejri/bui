import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { parseColor } from "@bui/libs";

export const Input = () => {
  const c = parseColor("#001");

  console.log(c);

  return (
    <motion.div style={{}}>
      <style>
        {`  /* clear the 'X' from Chrome */
            input[type="search"]::-webkit-search-decoration,
            input[type="search"]::-webkit-search-cancel-button,
            input[type="search"]::-webkit-search-results-button,
            input[type="search"]::-webkit-search-results-decoration
            { display: none }
            `}
      </style>

      <motion.input style={{}} />
    </motion.div>
  );
};
