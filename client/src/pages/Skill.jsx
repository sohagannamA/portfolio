import React, { useState } from "react";
import { useSelector } from "react-redux";

//Skill Data
import skillData from "../projectdata/SkillData";

//skill data
import techData from "../projectdata/SkillData";

export default function Skill() {
  const selectedItems = useSelector((state) => state.nav.side);
  const theme = localStorage.getItem("theme");

  return (
    <div
      className={`py-[5%] ${
        (selectedItems === "left" && "pl-[0%] md:pl-[10%]") ||
        (selectedItems === "right" && "pr-[0%] md:pr-[10%]") ||
        (selectedItems === "bottom" && "md:mb-[7%]")
      }`}
    >
      <div className="w-full md:w-[80%] m-auto">
        <div>
          <h3 className="text-xl dark:text-gray-200">Skill view</h3>
          <p className="p_font dark:text-gray-300 mt-3">
            In my learning journey i have been completed lots of projects using
            <span className="font-bold"> React,Node,Mongo DB ,Python</span> and
            so on
          </p>
        </div>
        <div className="mt-5">
          {Object.entries(techData).map(([KeyboardEvent, value]) => (
            <div className="each_section mb-2">
              <p className="px-1 text-center py-1 md:inline-block text-gray-900 bg-[#d6dfe1] dark:bg-[#296260db]  dark:text-gray-200 rounded text-[12px]">
                {value.title}
              </p>
              <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-3">
                {value.about.map((item) => {
                  const { name, icon, color, darkColor } = item;
                  const Icon = icon;
                  return (
                    <div className="bg-gray-200 hover:bg-gray-300 dark:bg-[rgb(26,35,39)] dark:hover:bg-[rgb(38,50,56)] flex items-center justify-center flex-col py-3 rounded cursor-pointer">
                      <Icon className="text-2xl" style={{ color: theme==="dark"?darkColor:color }} />
                      <p className="dark:text-gray-300 mt-2 text-sm font-bold">
                        {name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
