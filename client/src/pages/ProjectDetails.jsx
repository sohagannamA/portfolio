import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

export default function ProjectDetails() {
  const selectedItems = useSelector((state) => state.nav.side);
  return (
    <div
      className={`py-[5%] ${
        (selectedItems === "left" && "pl-[0%] md:pl-[10%]") ||
        (selectedItems === "right" && "pr-[0%] md:pr-[10%]") ||
        (selectedItems === "bottom" && "md:mb-[7%]")
      }`}
    >
      <div className="w-full md:w-[80%] m-auto">
        <div className="flex items-center gap-2">
          <NavLink
            className="hover:border-b dark:hover:border-b-gray-200 font_family dark:text-gray-300 text-[16px] dark:hover:text-gray-50"
            to=""
          >
            Projects
          </NavLink>
          <RiArrowRightSLine className=" dark:hover:border-b-gray-200 font_family dark:text-gray-300 text-[16px] dark:hover:text-gray-50" />
          <p className="text-xl dark:text-gray-200">Real time chat app</p>
          <p className="dark:hover:border-b-gray-200 font_family mt-1 dark:text-gray-300 text-[16px] dark:hover:text-gray-50">
            2025-
          </p>
        </div>
        <div>
          <p className="font-mono dark:text-gray-300 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            officiis itaque iure assumenda fugit, tempora tempore sed a
            cupiditate libero!
          </p>
          <div className="mt-5 flex items-center gap-3">
            <div className="space-y-2">
              <p className="px-1 text-center py-1 text-gray-900 bg-[#d6dfe1] dark:bg-[#296260db]  dark:text-gray-200 rounded text-[12px]">
                CATEGORY
              </p>
              <p className="px-1 text-center py-1 text-gray-900 bg-[#d6dfe1] dark:bg-[#296260db]  dark:text-gray-200 rounded text-[12px]">
                PLATFORM
              </p>
              <p className="px-1 text-center py-1 text-gray-900 bg-[#d6dfe1] dark:bg-[#296260db]  dark:text-gray-200 rounded text-[12px]">
                STACK
              </p>
              <p className="px-1 text-center py-1 text-gray-900 bg-[#d6dfe1] dark:bg-[#296260db]  dark:text-gray-200 rounded text-[12px]">
                REPO
              </p>
              <p className="px-1 text-center py-1 text-gray-900 bg-[#d6dfe1] dark:bg-[#296260db]  dark:text-gray-200 rounded text-[12px]">
                LIVE
              </p>
            </div>
            <div className="space-y-2">
              <p className="dark:text-gray-300 font-sans">Social</p>
              <p className="dark:text-gray-300 font-sans">Web</p>
              <p className="dark:text-gray-300 font-sans">
                React,Node,Socket.io,Mongo
              </p>
              <NavLink
                className="flex items-center gap-2 dark:text-gray-300 font-sans hover:underline"
                to="https://www.abc.com"
              >
                https://www.abc.com <LiaExternalLinkAltSolid className="" />
              </NavLink>
              <NavLink
                className="flex items-center gap-2 dark:text-gray-300 font-sans hover:underline"
                to="https://www.abc.com"
              >
                https://www.abc.com <LiaExternalLinkAltSolid className="" />
              </NavLink>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex items-center gap-3">
              <p className="px-1 text-center py-1 text-gray-900 bg-[#d6dfe1] dark:bg-[#296260db]  dark:text-gray-200 rounded text-[12px] inline-block">
                LAST COMMIT
              </p>
              <p className="dark:text-gray-300 font-sans">update home page</p>
            </div>
            <div className="mt-5">
              <div className="px-1 text-center py-1 text-gray-900 bg-[#d6dfe1] dark:bg-[#296260db]  dark:text-gray-200 rounded text-[12px] inline-block">
                INSTRUCTION
              </div>
              <div className="mt-3">
                <p className="text-[#727635] dark:text-yellow-300 font-mono">
                  git clone
                  <span className="ml-1 text-gray-900 dark:text-gray-200">
                    http://localhost:300
                  </span>
                </p>
                <p className="text-[#727635] dark:text-yellow-300 font-mono">
                  npm install
                </p>
                <p className="text-[#727635] dark:text-yellow-300 font-mono">
                  npm run dev
                </p>
                <p className="text-[#727635] dark:text-yellow-300">
                  host:
                  <span className="ml-1 text-gray-900 dark:text-gray-200">
                    http://localhost:300
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 mt-4">
            <img className="w-full mb-3" src= "/projectImages/excelentResult 7th semester.jpg"></img>
            <img className="w-full mb-3" src= "/projectImages/excelentResult 7th semester.jpg"></img>
            <img className="w-full mb-3" src= "/projectImages/excelentResult 7th semester.jpg"></img>
            <img className="w-full mb-3" src= "/projectImages/excelentResult 7th semester.jpg"></img>  
          </div>
        </div>
      </div>
    </div>
  );
}
