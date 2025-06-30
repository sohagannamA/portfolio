import React from "react";
import { NavLink } from "react-router-dom";
import ResNave from "./ResNave";
import { useSelector } from "react-redux";
import "../App.css";

export default function UserSelectNav() {
  return (
    <>
      <nav
        className={`
          selectNav
         dark:bg-[#0b1012] border-[#11171a]
        bg-white
        fixed left-[-100%] md:left-0 top-0 h-[100vh]
        p-5
      `}
      >
        <NavLink to="/">
          <div className="text-xl  dark:text-gray-200 cursor-pointer">
            mrs.me
          </div>
        </NavLink>

        <div className="forActiveNav flex items-start flex-col mt-5">
          <NavLink
            to="/projects"
            className="font_family  border-l-gray-200 dark:text-gray-300 text-[16px] dark:hover:text-gray-50 dark:hover:border-l-gray-200 border-l dark:border-l-gray-800 px-[10px] py-[15px]"
          >
            Projects
          </NavLink>
          <NavLink
            to="/skill"
            className="font_family  border-l-gray-200 dark:text-gray-300 text-[16px] dark:hover:text-gray-50 dark:hover:border-l-gray-200 border-l dark:border-l-gray-800 px-[10px] py-[15px]"
          >
            Skill
          </NavLink>
          <NavLink
            to="/certificate"
            className="font_family  border-l-gray-200 dark:text-gray-300 text-[16px] dark:hover:text-gray-50 dark:hover:border-l-gray-200 border-l dark:border-l-gray-800 px-[10px] py-[15px]"
          >
            Certificate
          </NavLink>
          <NavLink
            to="/blogs"
            className="font_family  border-l-gray-200 dark:text-gray-300 text-[16px] dark:hover:text-gray-50 dark:hover:border-l-gray-200 border-l dark:border-l-gray-800 px-[10px] py-[15px]"
          >
            Blogs
          </NavLink>
          <NavLink
            to="/contact"
            className="font_family  border-l-gray-200 dark:text-gray-300 text-[16px] dark:hover:text-gray-50 dark:hover:border-l-gray-200 border-l dark:border-l-gray-800 px-[10px] py-[15px]"
          >
            Contact
          </NavLink>
          <NavLink
            to="/setting"
            className="font_family   border-l-gray-200 dark:text-gray-300 text-[16px] dark:hover:text-gray-50 border-l dark:hover:border-l-gray-200 dark:border-l-gray-800 px-[10px] py-[15px]"
          >
            Setting
          </NavLink>
        </div>
      </nav>

      <div className="block md:hidden sticky top-0">{<ResNave />}</div>
    </>
  );
}
