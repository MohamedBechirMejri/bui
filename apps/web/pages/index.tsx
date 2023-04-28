import { useState } from "react";

import LoaderWrapper, { ComingUpNext } from "@bui/loaders";
import { MD3 } from "@bui/buttons";

export default function Web() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#002",
      }}
    >
      <MD3 onClick={() => setIsLoading(!isLoading)}>Submit</MD3>
      <LoaderWrapper isLoading={isLoading} loader={<ComingUpNext />} />
    </div>
  );
}
