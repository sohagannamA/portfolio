import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const selectedItems = useSelector((state) => state.nav.side);
  const navigate = useNavigate();
  return (
    <div
      className={`py-[5%] ${
        (selectedItems === "left" && "pl-[0%] md:pl-[10%]") ||
        (selectedItems === "right" && "pr-[0%] md:pr-[10%]") ||
        (selectedItems === "bottom" && "md:mb-[7%]")
      }`}
    >
      <div className="flex items-center justify-center h-[60vh]  w-full md:w-[50%] my-0 mx-auto">
        <div className="text-center">
          <h3 className="dark:text-gray-300 text-gray-950 text-[20px]">
            I apologize. Page not found
          </h3>
          <p className="dark:text-gray-300 p_font introRes mt-5">
            This page could not be found. Why do you want to see this page?
            Share with me about your unique ideas.
          </p>
          <div>
            <textarea
              className="mb-5 mt-5 bg-gray-200 dark:bg-[rgb(26,35,39)] px-[10px] py-[8px] rounded dark:text-gray-300 outline-0 w-full resize-none"
              required
            />
            <div className="flex items-center justify-center">
              <div onClick={()=>navigate(-1)} className="flex items-center px-[10px] py-[5px] bg-gray-200 hover:bg-gray-300   dark:bg-[rgb(26,35,39)] dark:hover:bg-[rgb(38,50,56)] dark:text-gray-200 rounded cursor-pointer">
                Back
              </div>
              <div className="ml-5 px-[10px] py-[5px] bg-gray-200 hover:bg-gray-300  dark:bg-[rgb(26,35,39)] dark:hover:bg-[rgb(38,50,56)] dark:text-gray-200 rounded cursor-pointer">
                Submit
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
