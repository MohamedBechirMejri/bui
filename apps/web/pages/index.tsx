import { useState } from "react";

// import LoaderWrapper, { ComingUpNext } from "@bui/loaders";
import { Ripple, MD3 } from "@bui/buttons";

export default function Web() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#111]">
      {/* <MD3 onClick={() => setIsLoading(!isLoading)}>Generate Site</MD3> */}
      <Ripple onClick={() => setIsLoading(!isLoading)}>Submit</Ripple>
      {/* <LoaderWrapper isLoading={isLoading} loader={<ComingUpNext />} /> */}
    </div>
  );
}
