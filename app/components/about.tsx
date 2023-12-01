"use client";

import { TypeAnimation } from "react-type-animation";

/* eslint-disable react/no-unescaped-entities */
export function About() {
  return (
    <div className="mt-40 py-4 px-8 text-center rounded-lg mb-20 flex justify-center">
      <div className="max-w-[1000px]">
        <p className="text-xl pb-10">ABOUT ME</p>
        <p className="text-5xl leading-normal">
          <span>I'm a </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#44c4ff] to-white">
            <TypeAnimation
              sequence={[
                "Front-end",
                1000,
                "React",
                1000,
                "Next",
                1000,
                "JavaScript",
                1000,
                "TypeScript",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
              className=""
            />
          </span>
          <span>
            developer <br></br>
          </span>
          <span>
            focusing on developing bug-free 🐛 web aplications. As an front end
            developer, I prioritize building applications that not only look{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#44c4ff] via-red-200 via-pink-500 to-orange-500">
              beautyful
            </span>{" "}
            but also function flawlessly.
          </span>
        </p>
      </div>
    </div>
  );
}
