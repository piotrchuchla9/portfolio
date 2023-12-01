/* eslint-disable react/no-unescaped-entities */
"use client";

import { TypeAnimation } from "react-type-animation";
import { ButtonNav } from "./ui-atoms/button";

export function Hero() {
  return (
    <div className="flex flex-col justify-center items-center py-4 px-8 text-center rounded-lg mb-10 h-[90vh]">
      <div>
        <p className="text-4xl md:text-8xl">
          <span className="ml-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#44c4ff]">
            Piotr Chuchla
          </span>
        </p>
        <div className="text-2xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#44c4ff] to-white h-20">
          <TypeAnimation
            sequence={[
              "Your Front End",
              1000,
              "Your Future",
              1000,
              "Your React",
              1000,
              "Your Next",
              1000,
              "Your JavaScript",
              1000,
              "Your TypeScript",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className=""
          />
          <span>Developer</span>
        </div>
        <div className="mt-4 flex justify-center pb-5 text-lg md:text-xl">
          <p className="max-w-[400px] md:max-w-[600px]">
            Hi ✋. My name is Piotr and I'm a React Developer living in Poland &
            working remotely from the whole world.
          </p>
        </div>
        <ButtonNav
          to="#projects"
          className="py-4 px-8 mt-4 mb-2 rounded-2xl bg-gradient-to-r from-[#4862df] to-gray-400 items-center justify-center inline-block"
        >
          <span className="text-xl md:text-3xl text-white font-semibold">
            Let's develop together!
          </span>
        </ButtonNav>
      </div>
    </div>
  );
}
