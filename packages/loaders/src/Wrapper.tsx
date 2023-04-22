/**
 * Wrapper component for loaders, preserves AnimatePresence when unmounting the loader to prevent the loader from disappearing abruptly.
 * @module @bui/loaders
 * @category Components
 * @subcategory Loaders
 * @param {boolean} isLoading - Whether the loader is loading or not.
 * @param {ReactNode} loader - The loader component.
 * @returns {JSX.Element} - The loader component wrapped in AnimatePresence.
 *
 * @example
 * import LoaderWrapper, { FIFA23 } from "@bui/loaders";
 *
 * const App = () => {
 *  const [isLoading, setIsLoading] = useState(false);
 *
 *  return (
 *    <div>
 *        <button onClick={() => setIsLoading(!isLoading)}>Toggle</button>
 *        <LoaderWrapper isLoading={isLoading} loader={<FIFA23 />} />
 *    </div>
 *        );
 * };
 *
 * export default App;
 *
 */

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
