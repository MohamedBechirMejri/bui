import { useState } from "react";

// import LoaderWrapper, { ComingUpNext } from "@bui/loaders";
import {
  Colors,
  Ripple,
  Wobble,
  WobbleNoText,
  Lava,
  Glow,
  Magic,
  MD3,
} from "@bui/buttons";

export default function Web() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex flex-col gap-24 items-center justify-center min-h-screen bg-[#002]">
      <Colors onClick={() => setIsLoading(!isLoading)}>Colors</Colors>
      <Lava onClick={() => setIsLoading(!isLoading)}>Submit</Lava>
      <WobbleNoText onClick={() => setIsLoading(!isLoading)}>
        Wobble No Text
      </WobbleNoText>
      <Wobble onClick={() => setIsLoading(!isLoading)}>Wobble</Wobble>
      <Ripple onClick={() => setIsLoading(!isLoading)}>Ripple</Ripple>
      <Glow onClick={() => setIsLoading(!isLoading)}>Glow</Glow>
      <Magic onClick={() => setIsLoading(!isLoading)}>Magic</Magic>
      <MD3 onClick={() => setIsLoading(!isLoading)}>MD3</MD3>

      {/* <LoaderWrapper isLoading={isLoading} loader={<ComingUpNext />} /> */}
    </div>
  );
}
