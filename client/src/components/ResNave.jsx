import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { RiSettings2Line } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";

export default function ResNave() {
  const [isNavshow, setShownav] = useState(false);

  const [scrollHeight, setScrollHeight] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", function () {
      setShownav(false);
      scrollY > 20 ? setScrollHeight(true) : setScrollHeight(false);
    });
  }, []);
  return (
    <div
      className={`py-[4%] bg-white ${
        scrollHeight
          ? "bg-gradient-to-r dark:from-[#0b1012] dark:via-[#11181b] dark:to-[#0b1012]"
          : "dark:bg-[#0b1012]"
      } w-full flex items-center justify-between`}
    >
      <div>
        <NavLink to={"/"}>
          <div className="text-xl dark:text-gray-200">mrs.me</div>
        </NavLink>
      </div>
      <div className="flex items-center">
        <NavLink to="/setting" className="mr-3">
          <div className="active_set h-9 w-9 bg-gray-200 hover:bg-gray-300   dark:bg-[rgb(21,31,39)] text-[20px] rounded-full cursor-pointer flex items-center justify-center dark:text-gray-200 dark:hover:bg-[rgb(38,50,56)]">
            <RiSettings2Line />
          </div>
        </NavLink>
        <div
          onClick={() => setShownav(!isNavshow)}
          className="active_set h-9 w-9 bg-gray-200 hover:bg-gray-300   dark:bg-[rgb(21,31,39)] text-[20px] rounded-full cursor-pointer flex items-center justify-center dark:text-gray-200 dark:hover:bg-[rgb(38,50,56)]"
        >
          <AiOutlineMenu />
        </div>
      </div>
      <div
        className={`selectNav shadow-xl md:shadow-none shadow-[#000000] fixed w-full top-[10%]  left-0 bg-gray-200 dark:bg-gray-900  py-6 rounded ${
          !isNavshow ? "opacity-0 hidden" : "opacity-100 block"
        }`}
      >
        <div className="forActive_Nav grid grid-cols-3 space-y-7">
          <NavLink
            onClick={() => setShownav(!isNavshow)}
            to="/"
            className="border-b text-center border-b-transparent  font_family dark:text-gray-300 text-[16px] dark:hover:text-gray-50"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setShownav(!isNavshow)}
            to="/projects"
            className="border-b text-center border-b-transparent  font_family dark:text-gray-300 text-[16px] dark:hover:text-gray-50"
          >
            Projects
          </NavLink>
          <NavLink
            onClick={() => setShownav(!isNavshow)}
            to="/skill"
            className="border-b text-center border-b-transparent font_family dark:text-gray-300 text-[16px] dark:hover:text-gray-50"
          >
            Skill
          </NavLink>
          <NavLink
            onClick={() => setShownav(!isNavshow)}
            to="/certificate"
            className="border-b text-center border-b-transparent  font_family dark:text-gray-300 text-[16px] dark:hover:text-gray-50"
          >
            Certificate
          </NavLink>
          <NavLink
            onClick={() => setShownav(!isNavshow)}
            to="/blogs"
            className="border-b text-center border-b-transparent  font_family dark:text-gray-300 text-[16px] dark:hover:text-gray-50"
          >
            Blogs
          </NavLink>
          <NavLink
            onClick={() => setShownav(!isNavshow)}
            to="/contact"
            className="border-b text-center border-b-transparent  font_family dark:text-gray-300 text-[16px] dark:hover:text-gray-50"
          >
            Contact
          </NavLink>
          <NavLink
            onClick={() => setShownav(!isNavshow)}
            to="/setting"
            className="border-b text-center border-b-transparent  font_family dark:text-gray-300 text-[16px] dark:hover:text-gray-50"
          >
            Setting
          </NavLink>
        </div>
      </div>
    </div>
  );
}
