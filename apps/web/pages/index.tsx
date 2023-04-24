import LoaderWrapper, { ComingUpNext } from "@bui/loaders";
import { useState } from "react";

export default function Web() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div onClick={() => setIsLoading(!isLoading)}>
      <LoaderWrapper isLoading={isLoading} loader={<ComingUpNext />} />
    </div>
  );
}
