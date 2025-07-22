import React from "react";
import { useSelector } from "react-redux";
import "../App.css";
import { NavLink } from "react-router-dom";

export default function Projects(props) {
  const { isPreview } = props;
  const selectedItems = useSelector((state) => state.nav.side);
  return (
    <div
      className={`${
        (selectedItems === "left" && "pl-[0%] md:pl-[10%]") ||
        (selectedItems === "right" && "pr-[0%] md:pr-[10%]") ||
        (selectedItems === "bottom" && "md:mb-[7%]")
      } ${isPreview ? "py-[20px]" : "py-[5%]"}`}
    >
      <div
        className={`w-full md:w-[${isPreview ? "100%" : "80%"}] my-0 mx-auto`}
      >
        <div>
          <h3 className="text-xl dark:text-gray-200">Projects view</h3>
          <p className="p_font dark:text-gray-300 mt-3">
            In my learning journey i have been completed lots of projects using
            <span className="font-bold"> React,Node,Mongo DB ,Python</span> and
            so on
          </p>
        </div>
        <div className="mt-5 md:mt-10 flex items-center space-x-3">
          <div className="resfont_side_project_tect px-[10px] w-full md:w-auto text-center bg-gray-200 hover:bg-gray-300  py-[5px] dark:bg-[rgb(26,35,39)] dark:hover:bg-[rgb(38,50,56)] dark:text-gray-200 rounded cursor-pointer">
            Frontend
          </div>
          <div className="resfont_side_project_tect px-[10px] w-full md:w-auto text-center bg-gray-200 hover:bg-gray-300  py-[5px] dark:bg-[rgb(26,35,39)] dark:hover:bg-[rgb(38,50,56)] dark:text-gray-200 rounded cursor-pointer">
            Full stack
          </div>
          <div className="resfont_side_project_tect px-[10px] w-full md:w-auto text-center bg-gray-200 hover:bg-gray-300  py-[5px] dark:bg-[rgb(26,35,39)] dark:hover:bg-[rgb(38,50,56)] dark:text-gray-200 rounded cursor-pointer">
            ML
          </div>
        </div>
        <div className="mt-5 rescard grid grid-cols-3 gap-3">
          <div className="bg-gray-200 hover:bg-gray-300 dark:bg-[rgb(26,35,39)] rounded dark:hover:bg-gradient-to-r from dark:hover:bg-[rgb(35,48,54)] cursor-pointer">
            <div className="w-full  responsefull h-[135px]">
              <img
                className="w-full rounded h-[100%]"
                src="https://www.templateshub.net/uploads/1545118579%201544149615%20marazzo.webp"
              ></img>
            </div>
            <div className="px-[10px] py-[15px]">
              <p className="dark:text-gray-200 text-[15px]">
                Full functionality responsive e-Commerc Website
              </p>
              <div className="flex items-center space-x-3 mt-3 ">
                <div className="px-[8px] py-[2px] bg-gray-300 dark:bg-gray-600 rounded-full dark:text-gray-200 text-[12px]">
                  react
                </div>
                <div className="px-[8px] py-[2px] bg-gray-300 dark:bg-gray-600 rounded-full dark:text-gray-200 text-[12px]">
                  mongo
                </div>
                <div className="px-[8px] py-[2px] bg-gray-300 dark:bg-gray-600 rounded-full dark:text-gray-200 text-[12px]">
                  node
                </div>
              </div>
              <div className="mt-2 flex items-center space-x-3.5">
                <NavLink
                  className="hover:text-gray-600 dark:text-purple-200 text-[12px] dark:hover:text-purple-400"
                  to=""
                >
                  github
                </NavLink>
                <NavLink
                  className="hover:text-gray-600 dark:text-purple-200 text-[12px] dark:hover:text-purple-400"
                  to=""
                >
                  live
                </NavLink>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 hover:bg-gray-300 dark:bg-[rgb(26,35,39)] rounded dark:hover:bg-gradient-to-r from dark:hover:bg-[rgb(35,48,54)] cursor-pointer">
            <div className="w-full  responsefull h-[135px]">
              <img
                className="w-full rounded h-[100%]"
                src="https://www.templateshub.net/uploads/1545118579%201544149615%20marazzo.webp"
              ></img>
            </div>
            <div className="px-[10px] py-[15px]">
              <p className="dark:text-gray-200 text-[15px]">
                Full functionality responsive e-Commerc Website
              </p>
              <div className="flex items-center space-x-3 mt-3 ">
                <div className="px-[8px] py-[2px] bg-gray-300 dark:bg-gray-600 rounded-full dark:text-gray-200 text-[12px]">
                  react
                </div>
                <div className="px-[8px] py-[2px] bg-gray-300 dark:bg-gray-600 rounded-full dark:text-gray-200 text-[12px]">
                  mongo
                </div>
                <div className="px-[8px] py-[2px] bg-gray-300 dark:bg-gray-600 rounded-full dark:text-gray-200 text-[12px]">
                  node
                </div>
              </div>
              <div className="mt-2 flex items-center space-x-3.5">
                <NavLink
                  className="hover:text-gray-600 dark:text-purple-200 text-[12px] dark:hover:text-purple-400"
                  to=""
                >
                  github
                </NavLink>
                <NavLink
                  className="hover:text-gray-600 dark:text-purple-200 text-[12px] dark:hover:text-purple-400"
                  to=""
                >
                  live
                </NavLink>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 hover:bg-gray-300 dark:bg-[rgb(26,35,39)] rounded dark:hover:bg-gradient-to-r from dark:hover:bg-[rgb(35,48,54)] cursor-pointer">
            <div className="w-full  responsefull h-[135px]">
              <img
                className="w-full rounded h-[100%]"
                src="https://www.templateshub.net/uploads/1545118579%201544149615%20marazzo.webp"
              ></img>
            </div>
            <div className="px-[10px] py-[15px]">
              <p className="dark:text-gray-200 text-[15px]">
                Full functionality responsive e-Commerc Website
              </p>
              <div className="flex items-center space-x-3 mt-3 ">
                <div className="px-[8px] py-[2px] bg-gray-300 dark:bg-gray-600 rounded-full dark:text-gray-200 text-[12px]">
                  react
                </div>
                <div className="px-[8px] py-[2px] bg-gray-300 dark:bg-gray-600 rounded-full dark:text-gray-200 text-[12px]">
                  mongo
                </div>
                <div className="px-[8px] py-[2px] bg-gray-300 dark:bg-gray-600 rounded-full dark:text-gray-200 text-[12px]">
                  node
                </div>
              </div>
              <div className="mt-2 flex items-center space-x-3.5">
                <NavLink
                  className="hover:text-gray-600 dark:text-purple-200 text-[12px] dark:hover:text-purple-400"
                  to=""
                >
                  github
                </NavLink>
                <NavLink
                  className="hover:text-gray-600 dark:text-purple-200 text-[12px] dark:hover:text-purple-400"
                  to=""
                >
                  live
                </NavLink>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 hover:bg-gray-300 dark:bg-[rgb(26,35,39)] rounded dark:hover:bg-gradient-to-r from dark:hover:bg-[rgb(35,48,54)] cursor-pointer">
            <div className="w-full  responsefull h-[135px]">
              <img
                className="w-full rounded h-[100%]"
                src="https://www.templateshub.net/uploads/1545118579%201544149615%20marazzo.webp"
              ></img>
            </div>
            <div className="px-[10px] py-[15px]">
              <p className="dark:text-gray-200 text-[15px]">
                Full functionality responsive e-Commerc Website
              </p>
              <div className="flex items-center space-x-3 mt-3 ">
                <div className="px-[8px] py-[2px] bg-gray-300 dark:bg-gray-600 rounded-full dark:text-gray-200 text-[12px]">
                  react
                </div>
                <div className="px-[8px] py-[2px] bg-gray-300 dark:bg-gray-600 rounded-full dark:text-gray-200 text-[12px]">
                  mongo
                </div>
                <div className="px-[8px] py-[2px] bg-gray-300 dark:bg-gray-600 rounded-full dark:text-gray-200 text-[12px]">
                  node
                </div>
              </div>
              <div className="mt-2 flex items-center space-x-3.5">
                <NavLink
                  className="hover:text-gray-600 dark:text-purple-200 text-[12px] dark:hover:text-purple-400"
                  to=""
                >
                  github
                </NavLink>
                <NavLink
                  className="hover:text-gray-600 dark:text-purple-200 text-[12px] dark:hover:text-purple-400"
                  to=""
                >
                  live
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
