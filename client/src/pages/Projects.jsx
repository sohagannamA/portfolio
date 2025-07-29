import React from "react";
import { useSelector } from "react-redux";
import "../App.css";
import { NavLink } from "react-router-dom";

export default function Projects(props) {
  const { isPreview } = props;
  const selectedItems = useSelector((state) => state.nav.side);

  const projectList = [1, 2, 3, 4, 5, 6];
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
        <div className="mt-5 flex items-center space-x-3">
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
          {projectList.map((p) => (
            <NavLink to={`/projects/projectdetails?id=${p}`}>
              <div>
                <div className="w-full h-[200px] responsefull">
                  <img
                    className="w-full rounded h-[100%]"
                    src="https://www.templateshub.net/uploads/1545118579%201544149615%20marazzo.webp"
                  ></img>
                </div>
                <div className="px-2 py-2">
                  <p className="dark:text-gray-300 text-center leading-[30px] text-[15px] font-semibold">
                    Full functionality responsive e-Commerc Website
                  </p>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
