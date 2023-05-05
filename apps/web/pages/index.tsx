import { useState } from "react";

// import LoaderWrapper, { ComingUpNext } from "@bui/loaders";
import { Colors, Ripple, Wobble, WobbleNoText } from "@bui/buttons";

export default function Web() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex flex-col gap-8 items-center justify-center h-screen bg-[#111]">
      <Colors onClick={() => setIsLoading(!isLoading)}>Submit</Colors>
      {/* <WobbleNoText onClick={() => setIsLoading(!isLoading)}>
        Submit
      </WobbleNoText> */}
      {/* <Wobble onClick={() => setIsLoading(!isLoading)}>Submit</Wobble> */}
      {/* <Ripple onClick={() => setIsLoading(!isLoading)}>Submit</Ripple> */}
      {/* <LoaderWrapper isLoading={isLoading} loader={<ComingUpNext />} /> */}
    </div>
  );
}
