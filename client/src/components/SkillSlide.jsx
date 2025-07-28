import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiLeetcode } from "react-icons/si";

export default function SkillSlide() {
  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    slides: {
      origin: "auto",
      perView: 2,
      spacing: 4,
    },
  });
  return (
    <div ref={sliderRef} className="keen-slider mt-5">
      <div className="keen-slider__slide bg-gray-200 flex items-center justify-center flex-col  hover:bg-gray-300 dark:bg-[rgb(26,35,39)] dark:hover:bg-[rgb(38,50,56)]  py-2 rounded cursor-grabbing">
        <FaReact className="text-[#56BCD7] text-2xl" />
        <p className="dark:text-gray-300 text-sm font-bold">React</p>
      </div>

      <div className="keen-slider__slide bg-gray-200 flex items-center justify-center flex-col  hover:bg-gray-300 dark:bg-[rgb(26,35,39)] dark:hover:bg-[rgb(38,50,56)]  py-2 rounded cursor-grabbing">
        <FaNodeJs className="text-[#72A706] text-2xl" />
        <p className="dark:text-gray-300 text-sm font-bold">Node Js</p>
      </div>

      <div className="keen-slider__slide bg-gray-200 flex items-center justify-center flex-col  hover:bg-gray-300 dark:bg-[rgb(26,35,39)] dark:hover:bg-[rgb(38,50,56)]  py-2 rounded cursor-grabbing">
        <DiMongodb className="text-[#02ED64] text-2xl" />
        <p className="dark:text-gray-300 text-sm font-bold">Mongo DB</p>
      </div>

      <div className="keen-slider__slide bg-gray-200 flex items-center justify-center flex-col  hover:bg-gray-300 dark:bg-[rgb(26,35,39)] dark:hover:bg-[rgb(38,50,56)]  py-2 rounded cursor-grabbing">
        <SiLeetcode className="text-[#f1a635] text-2xl" />
        <p className="dark:text-gray-300 text-sm font-bold">Leetcode</p>
      </div>
    </div>
  );
}
