import { useState } from "react";
import "./scrollIndicator.css";
import { cn } from "../../lib/utils";
export default function ScrollIndicator() {
  const [animationFinished, setAnimationFinished] = useState(false);

  return (
    <div
      onAnimationEnd={() => setAnimationFinished(true)}
      className={cn(
        "main__action absolute bottom-6",
        animationFinished ? "hidden" : "",
      )}
    >
      <div className="flex h-10 items-center justify-center rounded-full border-2 border-white px-1 text-white">
        <svg
          className="h-4"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M11.9997 13.1716L7.04996     8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </div>
  );
}
