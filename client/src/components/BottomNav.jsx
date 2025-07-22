import React from "react";
import { NavLink } from "react-router-dom";
import { RiSettings2Line } from "react-icons/ri";
import ResNave from "./ResNave";

export default function BottomNav() {
  return (
    <>
      <nav className="hidden bg-white dark:bg-[#0b1012] md:flex items-center justify-between py-5 w-full  sticky top-0">
        <div>
          <div className="text-xl dark:text-gray-200">mrs.me</div>
        </div>
        <div className="mr-[15%]">
          <div className="fixed forActive_Nav space-x-8  w-full right-0 bg-white  bottom-0 dark:bg-[#0b1012] py-5 flex items-center justify-center">
            <NavLink
              to="/"
              className="border-b border-b-transparent hover:border-black  dark:hover:border-b-gray-200 font_family dark:text-gray-300 text-[16px] dark:hover:text-gray-50"
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className="border-b border-b-transparent hover:border-black  dark:hover:border-b-gray-200 font_family dark:text-gray-300 text-[16px] dark:hover:text-gray-50"
            >
              Projects
            </NavLink>
            <NavLink
              to="/skill"
              className="border-b border-b-transparent hover:border-black  dark:hover:border-b-gray-200 font_family dark:text-gray-300 text-[16px] dark:hover:text-gray-50"
            >
              Skill
            </NavLink>
            <NavLink
              to="/certificate"
              className="border-b border-b-transparent hover:border-black  dark:hover:border-b-gray-200 font_family dark:text-gray-300 text-[16px] dark:hover:text-gray-50"
            >
              Certificate
            </NavLink>
            <NavLink
              to="/contact"
              className="border-b border-b-transparent hover:border-black  dark:hover:border-b-gray-200 font_family dark:text-gray-300 text-[16px] dark:hover:text-gray-50"
            >
              Contact
            </NavLink>
          </div>
        </div>
        <NavLink
          to="/setting"
          className="active_set h-9 w-9 bg-gray-200 hover:bg-gray-300   dark:bg-[rgb(21,31,39)] text-[20px] rounded-full cursor-pointer flex items-center justify-center dark:text-gray-200 dark:hover:bg-[rgb(38,50,56)]"
        ><RiSettings2Line/></NavLink>
      </nav>
      <div className="block md:hidden sticky top-0">{<ResNave />}</div>
    </>
  );
}
