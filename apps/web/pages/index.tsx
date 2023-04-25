import { useState } from "react";

import LoaderWrapper, { ComingUpNext } from "@bui/loaders";
import { YinYang } from "@bui/buttons";

export default function Web() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <YinYang onClick={() => setIsLoading(!isLoading)} text={"Toggle"} />
      <LoaderWrapper isLoading={isLoading} loader={<ComingUpNext />} />
    </div>
  );
}
