import { useState } from "react";

import LoaderWrapper, { ComingUpNext } from "@bui/loaders";
import { Glow } from "@bui/buttons";

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
      }}
    >
      <Glow
        onClick={() => setIsLoading(!isLoading)}
        text={"Toggle"}
        textColor="#000"
      />
      <LoaderWrapper isLoading={isLoading} loader={<ComingUpNext />} />
    </div>
  );
}
