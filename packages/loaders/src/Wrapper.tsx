import type { ReactNode } from "react";

import { AnimatePresence } from "framer-motion";

export default function LoaderWrapper({
  isLoading,
  loader,
}: {
  isLoading: boolean;
  loader: ReactNode;
}) {
  return <AnimatePresence>{isLoading && loader}</AnimatePresence>;
}
