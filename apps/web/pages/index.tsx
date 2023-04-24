import { useState } from "react";

import LoaderWrapper, { ComingUpNext } from "@bui/loaders";
export default function Web() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <button onClick={() => setIsLoading(!isLoading)}>Toggle</button>
      <LoaderWrapper isLoading={isLoading} loader={<ComingUpNext />} />
    </div>
  );
}
