/* eslint-disable react/no-unescaped-entities */
"use client";

import {
  IconApi,
  IconChart,
  IconDaisy,
  IconLanguage,
  IconMantine,
  IconNx,
  IconReact,
  IconRedux,
  IconTailwind,
  IconTypescript,
} from "@/public";
import { IconGithub } from "@/public/icons/github";
import { IconNext } from "@/public/icons/next";
import Image from "next/image";
import { useState } from "react";
import forecast from "../../public/images/forecast.png";
import nba from "../../public/images/nba.png";
import trader from "../../public/images/trader.png";

export function Projects() {
  const [isHoveredFirst, setIsHoveredFirst] = useState(false);
  const [isHoveredSecond, setIsHoveredSecond] = useState(false);
  const [isHoveredThird, setIsHoveredThird] = useState(false);
  return (
    <div>
      <p className="text-xl pb-10 pt-10 text-center">My projects</p>
      <div className="bg-gray-800 bg-opacity-60 py-4 px-8 rounded-lg mb-20 max-w-[750px] mx-auto">
        <div className="flex">
          <a
            className="block"
            href="https://chuchla.dev/en"
            target="_blank"
            onMouseEnter={() => setIsHoveredFirst(true)}
            onMouseLeave={() => setIsHoveredFirst(false)}
          >
            <div className="relativeImage w-600 h-200">
              <Image
                src={nba.src}
                width={600}
                height={200}
                alt={"nba"}
                className={isHoveredFirst ? "zoomedImage" : ""}
              />
            </div>
          </a>
          <div className="ml-4 text-4xl w-20">
            <div className="pl-4 flex flex-col gap-4 items-center">
              <div title="React">
                <IconReact />
              </div>
              <div title="Next">
                <IconNext />
              </div>
              <div title="Redux">
                <IconRedux />
              </div>
              <div title="Tailwind">
                <IconTailwind />
              </div>
              <div title="TypeScript">
                <IconTypescript />
              </div>
              <div title="RestAPI">
                <IconApi />
              </div>
              <div title="i18n">
                <IconLanguage />
              </div>
              <div title="GitHub">
                <IconGithub />
              </div>
              <div title="DaisyUI">
                <IconDaisy />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 text-4xl">
          <p className="font-semibold">NBA Stats</p>
          <p className="text-xl">Check out specific NBA stats</p>
        </div>
        <div className="flex mt-10 border-t-[1px] border-gray-500 pt-10">
          <a
            href="https://trader-praca-inz.netlify.app"
            target="_blank"
            className="block"
            onMouseEnter={() => setIsHoveredSecond(true)}
            onMouseLeave={() => setIsHoveredSecond(false)}
          >
            <div className="relativeImage w-600 h-200">
              <Image
                src={trader.src}
                width={600}
                height={200}
                alt={"trader"}
                className={isHoveredSecond ? "zoomedImage" : ""}
              />
            </div>
          </a>
          <div className="ml-4 text-4xl w-20">
            <div className="pl-4 flex flex-col gap-4 items-center">
              <div title="React">
                <IconReact />
              </div>
              <div title="Mantine">
                <IconMantine />
              </div>
              <div title="TypeScript">
                <IconTypescript />
              </div>
              <div title="RestAPI">
                <IconApi />
              </div>
              <div title="ReactCharts">
                <IconChart />
              </div>
              <div title="GitHub">
                <IconGithub />
              </div>
              <div title="NX">
                <IconNx />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 text-4xl">
          <p className="font-semibold">Crypto Trader</p>
          <p className="text-xl">Invest into crypto</p>
        </div>
        <div className="flex mt-10 border-t-[1px] border-gray-500 pt-10">
          <a
            className="block"
            target="_blank"
            href="https://beauty-forecast.netlify.app"
            onMouseEnter={() => setIsHoveredThird(true)}
            onMouseLeave={() => setIsHoveredThird(false)}
          >
            <div className="relativeImage w-600 h-200">
              <Image
                src={forecast.src}
                width={600}
                height={200}
                alt={"forecast"}
                className={isHoveredThird ? "zoomedImage" : ""}
              />
            </div>
          </a>
          <div className="ml-4 text-4xl w-20">
            <div className="pl-4 flex flex-col gap-4 items-center">
              <div title="React">
                <IconReact />
              </div>
              <div title="Next">
                <IconNext />
              </div>
              <div title="Tailwind">
                <IconTailwind />
              </div>
              <div title="TypeScript">
                <IconTypescript />
              </div>
              <div title="RestAPI">
                <IconApi />
              </div>
              <div title="GitHub">
                <IconGithub />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 text-4xl">
          <p className="font-semibold">Beauty Forecast</p>
          <p className="text-xl">What's the weather in your city?</p>
        </div>
      </div>
    </div>
  );
}
