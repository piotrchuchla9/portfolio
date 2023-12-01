"use client";

import { IconDot } from "@/public";

export function Technology() {
  const items = [
    "FRONTEND",
    "REACT",
    "R.NATIVE",
    "NEXT",
    "NODE",
    "TAILWIND",
    "REST",
  ];

  return (
    <div
      style={{ transform: "rotate(5deg)" }}
      className=" flex items-center min-h-[400px] justify-center w-[95vw]"
    >
      <div className="w-[220%] h-40 border-t border-b border-gray-600 overflow-hidden relative ">
        <div className="w-[220%] flex items-center h-40 justify-around absolute left-0 animate-scroll-15s animate">
          {items.map((i) => {
            return (
              <div
                key={i}
                className="flex justify-center items-start text-[60px]"
              >
                <p>
                  <span className="text-pink-400 flex items-center">
                    <span className="ml-4">
                      <IconDot />
                    </span>
                    {`${i}`}
                    <span className="mr-4">
                      <IconDot />
                    </span>
                  </span>
                </p>
              </div>
            );
          })}
          {items.map((i) => {
            return (
              <div
                key={i}
                className="flex justify-center items-start text-[60px]"
              >
                <p>
                  <span className="text-pink-400 flex items-center">
                    <span className="ml-4">
                      <IconDot />
                    </span>
                    {`${i}`}
                    <span className="mr-4">
                      <IconDot />
                    </span>
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
