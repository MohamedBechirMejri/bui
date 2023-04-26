import { useState } from "react";

import LoaderWrapper, { ComingUpNext } from "@bui/loaders";
import { Glow } from "@bui/buttons";

export default function Web() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <Glow onClick={() => setIsLoading(!isLoading)} text={"Toggle"} />
      <LoaderWrapper isLoading={isLoading} loader={<ComingUpNext />} />
    </div>
  );
}
