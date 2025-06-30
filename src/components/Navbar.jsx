import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { RiSettings2Line } from "react-icons/ri";
import ResNave from "./ResNave";

export default function Navbar() {
  const [scrollHeight, setScrollHeight] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", function () {
      scrollY > 20 ? setScrollHeight(true) : setScrollHeight(false);
    });
  }, []);
  return (
    <>
      <nav
        className={`hidden bg-white  ${
          scrollHeight
            ? "dark:bg-gradient-to-r dark:from-[#0b1012] dark:via-[#11181b] dark:to-[#0b1012]"
            : "dark:bg-[#0b1012]"
        } md:flex items-center justify-between py-5 w-full  sticky top-0`}
      >
        <NavLink to="/">
          <div className="text-xl  dark:text-gray-200 cursor-pointer">
            mrs.me
          </div>
        </NavLink>
        <div className="forActive_Nav flex items-center justify-between space-x-8 mt-1">
          <NavLink
            to="/projects"
            className="hover:border-b dark:hover:border-b-gray-200 font_family dark:text-gray-300 text-[16px] dark:hover:text-gray-50"
          >
            Projects
          </NavLink>
          <NavLink
            to="/skill"
            className="hover:border-b dark:hover:border-b-gray-200 font_family dark:text-gray-300 text-[16px] dark:hover:text-gray-50"
          >
            Skill
          </NavLink>
          <NavLink
            to="/certificate"
            className="hover:border-b dark:hover:border-b-gray-200 font_family dark:text-gray-300 text-[16px] dark:hover:text-gray-50"
          >
            Certificate
          </NavLink>

          <NavLink
            to="/blogs"
            className="hover:border-b dark:hover:border-b-gray-200 font_family dark:text-gray-300 text-[16px] dark:hover:text-gray-50"
          >
            Blogs
          </NavLink>

          <NavLink
            to="/contact"
            className="hover:border-b dark:hover:border-b-gray-200 font_family dark:text-gray-300 text-[16px] dark:hover:text-gray-50"
          >
            Contact
          </NavLink>
        </div>
        <NavLink
          to="/setting"
          className="active_set h-9 w-9 bg-gray-200 hover:bg-gray-300   dark:bg-[rgb(21,31,39)] text-[20px] rounded-full cursor-pointer flex items-center justify-center dark:text-gray-200 dark:hover:bg-[rgb(38,50,56)]"
        >
          <RiSettings2Line />
        </NavLink>
      </nav>
      <div className="block md:hidden sticky top-0">{<ResNave />}</div>
    </>
  );
}
