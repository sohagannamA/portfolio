import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaAngleDown, FaCheck } from "react-icons/fa";

import SkillDataSet from "../projectdata/Skill.json";

export default function Skill() {
  const selectedItems = useSelector((state) => state.nav.side);
  const theme = useSelector((state)=>state.theme.theme);
  const [open, setOpen] = useState({});
  const toggle = (k) => setOpen((o) => ({ ...o, [k]: !o[k] }));

  const maxTicks = 5;
  const getTicks = (val = "0") => {
    const filled = Math.min(maxTicks, Math.round(parseFloat(val)));
    return Array.from({ length: maxTicks }, (_, i) => i < filled);
  };

  const categories = SkillDataSet.flatMap((obj) => Object.entries(obj));

  return (
    <div
      className={`py-[5%] ${
        (selectedItems === "left" && "pl-[0%] md:pl-[10%]") ||
        (selectedItems === "right" && "pr-[0%] md:pr-[10%]") ||
        (selectedItems === "bottom" && "md:mb-[7%]")
      }`}
    >
      <div className="w-full md:w-[80%] m-auto">
        <h3 className="text-xl dark:text-gray-200">Skills</h3>
        <p className="p_font dark:text-gray-300 mt-3">
          I love to learn on my own and I enjoy it a lot. I have learned and am
          still learning a few things in my learning journey
        </p>

        <img
          src={`https://leetcard.jacoblin.cool/reset_1?theme=${theme}&font=ubuntu&ext=contest`}
          alt="LeetCode Stats"
          className="w-full rounded-xl mt-10"
        />
        <div className="mt-10">
          {categories.map(([catKey, catObj]) => (
            <div key={catKey}>
              {/* Header */}
              <div
                className="bg-gray-200 dark:bg-[rgb(26,35,39)] cursor-pointer  flex items-center justify-between px-3 py-4"
                onClick={() => toggle(catKey)}
              >
                <div className="flex items-center">
                  <p className="dark:text-gray-300">{catObj.title || catKey}</p>
                </div>
                <FaAngleDown
                  className={`dark:text-gray-300  transition-transform duration-200 ${
                    open[catKey] ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Body */}
              <div
                className={`bg-gray-300   dark:bg-[rgb(36,48,53)] px-3 py-1   transition-all duration-300 ${
                  open[catKey]
                    ? "opacity-100 max-h-[600px]"
                    : "opacity-0 max-h-0 overflow-hidden"
                }`}
              >
                {Object.entries(catObj)
                  .filter(([k]) => k !== "title")
                  .map(([skill, level]) => (
                    <div
                      key={skill}
                      className="mb-2.5 flex items-center justify-between"
                    >
                      <h3 className="text-md font-semibold dark:font-bold dark:text-gray-300">
                        {skill.toUpperCase()}
                      </h3>
                      <div className="flex gap-2">
                        {getTicks(level).map((filled, i) => (
                          <FaCheck
                            key={i}
                            className={`text-[18px] ${
                              filled
                                ? "text-green-400"
                                : "text-gray-400 dark:text-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
