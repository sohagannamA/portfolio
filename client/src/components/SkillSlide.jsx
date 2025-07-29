import React from "react";

import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiLeetcode } from "react-icons/si";

export default function SkillSlide() {
  return (
    <div className="mt-5 grid grid-cols-2 gap-2">
      <div className="w-full bg-gray-200 flex items-center justify-center  hover:bg-gray-300 dark:bg-[rgb(26,35,39)] dark:hover:bg-[rgb(38,50,56)]  py-2 rounded cursor-pointer">
        <FaReact className="text-[#56BCD7] text-[16px]" />
        <p className="dark:text-gray-300 ml-1 text-[10px] font-bold">React</p>
      </div>

      <div className=" w-full bg-gray-200 flex items-center justify-center   hover:bg-gray-300 dark:bg-[rgb(26,35,39)] dark:hover:bg-[rgb(38,50,56)]  py-2 rounded cursor-pointer">
        <FaNodeJs className="text-[#72A706] text-[16px]" />
        <p className="dark:text-gray-300 ml-1  text-[10px] font-bold">
          Node Js
        </p>
      </div>

      <div className=" w-full bg-gray-200 flex items-center justify-center   hover:bg-gray-300 dark:bg-[rgb(26,35,39)] dark:hover:bg-[rgb(38,50,56)]  py-2 rounded cursor-pointer">
        <DiMongodb className="text-[#02ED64] text-[16px]" />
        <p className="dark:text-gray-300  text-[10px] font-bold">Mongo DB</p>
      </div>

      <div className=" w-full bg-gray-200 flex items-center justify-center  hover:bg-gray-300 dark:bg-[rgb(26,35,39)] dark:hover:bg-[rgb(38,50,56)]  py-2 rounded cursor-pointer">
        <SiLeetcode className="text-[#f1a635] text-[16px]" />
        <p className="dark:text-gray-300 ml-1 text-[10px] font-bold">
          Leetcode
        </p>
      </div>
    </div>
  );
}
