import { useState } from "react";

// import LoaderWrapper, { ComingUpNext } from "@bui/loaders";
import { MD3 } from "@bui/buttons";

export default function Web() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#002]">
      <MD3 onClick={() => setIsLoading(!isLoading)}>Submit</MD3>
      {/* <LoaderWrapper isLoading={isLoading} loader={<ComingUpNext />} /> */}
    </div>
  );
}
