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
    <div className="flex justify-center">
      <div
        style={{ transform: "rotate(5deg)" }}
        className=" flex items-center min-h-[250px] md:min-h-[400px] justify-center w-[90vw] md:w-[95vw]"
      >
        <div className="w-[220%] h-28 md:h-40 overflow-hidden relative ">
          <div className="w-[220%] flex items-center h-40 justify-around absolute left-0 animate-scroll-5s md:animate-scroll-15s animate">
            {items.map((i) => {
              return (
                <div
                  key={i}
                  className="mb-12 flex justify-center items-start text-[40px] md:text-[60px]"
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
                  className="mb-12 flex justify-center items-start text-[40px] md:text-[60px]"
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
    </div>
  );
}
