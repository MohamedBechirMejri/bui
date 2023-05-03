import { useState } from "react";

// import LoaderWrapper, { ComingUpNext } from "@bui/loaders";
import { Ripple } from "@bui/buttons";

export default function Web() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#111]">
      <Ripple onClick={() => setIsLoading(!isLoading)}>Generate Site</Ripple>
      {/* <LoaderWrapper isLoading={isLoading} loader={<ComingUpNext />} /> */}
    </div>
  );
}
