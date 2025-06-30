import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBottom, setLeft, setRight, setTop } from "../features/nav/NavSlice";
import { toggleBright, toggleDark } from "../features/theme/ThemeSlice";

export default function Setting() {
  const selectedItems = useSelector((state) => state.nav.side);
  const selectedTheme = useSelector((state)=>state.theme.theme);
  console.log(selectedTheme)
  const dispatch = useDispatch();


  return (
    <div
      className={`py-[5%] ${
        (selectedItems === "left" && "pl-[0%] md:pl-[10%]") ||
        (selectedItems === "right" && "pr-[0%] md:pr-[10%]") ||
        (selectedItems === "bottom" && "md:mb-[7%]")
      }`}
    >
      <div className="md:w-[75%] my-0 mx-auto setting_res">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div onClick={()=>dispatch((toggleDark()))} className={`bg-[rgb(20,23,24)] w-full p-3 rounded cursor-pointer border-2 ${selectedTheme==="dark"?" border-purple-500":"border-transparent"} `}>
            <div className="flex items-center space-x-2">
              <div className="h-12 w-12 bg-gray-700 rounded-full"></div>
              <div className="w-1/2">
                <div className="h-7 bg-gray-700 rounded"></div>
                <div className="flex items-center space-x-2">
                  <div className="p-2 w-1/2 rounded bg-gray-800 mt-3"></div>
                  <div className="p-2 w-1/2 rounded bg-gray-800 mt-3"></div>
                </div>
              </div>
            </div>
            <div className="px-[40px] py-[20px] rounded bg-gray-700 mt-3"></div>
            <div className="flex items-center mt-3">
              <div className="px-[40px] py-[15px] rounded bg-gray-700"></div>
              <div className="px-[40px] py-[15px] rounded bg-gray-700 ml-3"></div>
            </div>
          </div>

          <div onClick={()=>dispatch(toggleBright())} className={`bg-[rgb(206,211,211)] w-full p-3 border-2 ${selectedTheme==="bright"?" border-purple-500":"border-transparent"}  rounded cursor-pointer`}>
            <div className="flex items-center space-x-2">
              <div className="h-12 w-12 bg-gray-400 rounded-full"></div>
              <div className="w-1/2">
                <div className="w-full h-7 bg-gray-400 rounded"></div>
                <div className="flex items-center space-x-2">
                  <div className="p-2 w-1/2 rounded bg-gray-500 mt-3"></div>
                  <div className="p-2 w-1/2 rounded bg-gray-500 mt-3"></div>
                </div>
              </div>
            </div>
            <div className="px-[40px] py-[20px] rounded bg-gray-400 mt-3"></div>
            <div className="flex items-center mt-3">
              <div className="px-[40px] py-[15px] rounded bg-gray-400"></div>
              <div className="px-[40px] py-[15px] rounded bg-gray-400 ml-3"></div>
            </div>
          </div>
        </div>
        <div className="mt-5 w-full hidden md:block">
          <div className="w-full rounded  grid grid-cols-2 md:grid-cols-4 gap-3 mt-3 p-3 bg-gray-200 dark:bg-[rgb(39,48,52)]">
            <button
              onClick={() => dispatch(setTop())}
              className={`px-[20px] rounded py-[5px] ${
                localStorage.getItem("side") === "top"
                  ? "bg-purple-500"
                  : "bg-[rgb(69,72,80)]"
              } cursor-pointer  hover:bg-purple-500 text-gray-300 cursor-pointer"
  `}
            >
              Default
            </button>
            <button
              onClick={() => dispatch(setLeft())}
              className={`px-[20px] rounded py-[5px] ${
                localStorage.getItem("side") === "left"
                  ? "bg-purple-500"
                  : "bg-[rgb(69,72,80)]"
              } hover:bg-purple-500 text-gray-300 cursor-pointer`}
            >
              Left
            </button>
            <button
              onClick={() => dispatch(setRight())}
              className={`px-[20px] rounded py-[5px] ${
                localStorage.getItem("side") === "right"
                  ? "bg-purple-500"
                  : "bg-[rgb(69,72,80)]"
              } hover:bg-purple-500 text-gray-300 cursor-pointer`}
            >
              Right
            </button>
            <button
              onClick={() => dispatch(setBottom())}
              className={`px-[20px] rounded py-[5px] ${
                localStorage.getItem("side") === "bottom"
                  ? "bg-purple-500"
                  : "bg-[rgb(69,72,80)]"
              } hover:bg-purple-500 text-gray-300 cursor-pointer`}
            >
              Bottom
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
