import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";

import reactIcon from "../projectImages/react.png";
import nodejs from "../projectImages/node.png";
import mongodb from "../projectImages/mongo.png";
import leetcode from "../projectImages/leetcode.png";

import Tilt from "react-parallax-tilt";

import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiLeetcode } from "react-icons/si";

export default function Home() {
  const selectedItems = useSelector((state) => state.nav.side);
  return (
    <div
      className={`py-[5%] ${
        (selectedItems === "left" && "pl-[0%] md:pl-[10%]") ||
        (selectedItems === "right" && "pr-[0%] md:pr-[10%]") ||
        (selectedItems === "bottom" && "md:mb-[7%]")
      }`}
    >
      <div className=" forresNav flex items-center justify-between md:justify-around h-[60vh]">
        <div className="remove_res_w w-1/2">
          <div className="resinfoitems flex items-center justify-start">
            <div className="remove_max_w max-w-[30%]">
              <div className="h-25 w-25 bg-gray-300 dark:bg-[rgb(16,23,26)] rounded-full">
                <img
                  src="https://cdn.pixabay.com/photo/2019/10/22/13/43/man-4568761_640.jpg"
                  className="h-[100%] w-[100%] object-top rounded-full p-1"
                ></img>
              </div>
            </div>
            <div className="ml-5 resinfoml">
              <div className={`space-y-1`}>
                <h3
                  className={`${
                    selectedItems === "left" || selectedItems === "right"
                      ? "text-[12px] font-bold"
                      : "text-[15px]"
                  } dark:text-gray-300 text-gray-950`}
                >
                  MAMUNUR RASHID SOHAG
                </h3>
                <p className="text-gray-800 dark:text-gray-400 ressmallText">
                  Computer Science Student
                </p>
              </div>
              <div className="res_profileLink flex items-center mt-2 space-x-3">
                <NavLink
                  to=""
                  className="iconHover h-[30px] bg-gray-200 hover:bg-gray-300 dark:hover:bg-[rgb(38,50,56)]  w-[30px]  dark:bg-[rgb(26,35,39)] flex items-center justify-center rounded"
                >
                  <FaLinkedin className="link text-[15px] dark:text-gray-400" />
                </NavLink>
                <NavLink
                  to=""
                  className="iconHover h-[30px] bg-gray-200 hover:bg-gray-300  w-[30px] dark:hover:bg-[rgb(38,50,56)]  dark:bg-[rgb(26,35,39)] flex items-center justify-center rounded"
                >
                  <FaGithub className="github text-[15px] dark:text-gray-400" />
                </NavLink>
              </div>
            </div>
          </div>
          <div className="py-4 w-full">
            <div className="grid-cols-2 gap-2 hidden rescoreSkill">
              <Tilt>
                <div className="bg-[rgb(26,35,39)] flex items-center justify-center py-2 rounded cursor-pointer">
                  <FaReact className="text-[#56BCD7]" />
                  <p className="ml-2 text-gray-300 text-sm font-bold">React</p>
                </div>
              </Tilt>
              <Tilt>
                <div className="bg-[rgb(26,35,39)] flex items-center justify-center py-2 rounded cursor-pointer">
                  <FaNodeJs className="text-[#72A706]" />
                  <p className="ml-2 text-gray-300 text-sm font-bold">Nodejs</p>
                </div>
              </Tilt>
              <Tilt>
                <div className="bg-[rgb(26,35,39)] flex items-center justify-center py-2 rounded cursor-pointer">
                  <DiMongodb className="text-[#02ED64]" />
                  <p className="ml-2 text-gray-300 text-sm font-bold">
                    Mongodb
                  </p>
                </div>
              </Tilt>
              <Tilt>
                <div className="bg-[rgb(26,35,39)] flex items-center justify-center py-2 rounded cursor-pointer">
                  <SiLeetcode className="text-[#FEA41D]" />
                  <p className="ml-2 text-gray-300 text-sm font-bold">
                    Leetcode
                  </p>
                </div>
              </Tilt>
            </div>
            <p className="dark:text-gray-300 p_font introRes">
              I'm a self-taught, disciplined developer with a passion for
              <span className="font-bold">
                {" "}
                JavaScript, React, and problem-solving
              </span>
              . I love turning ideas into code and continuously learning to
              improve.
            </p>
            <div className="flex items-center mt-5">
              <div className="flex items-center px-[10px] py-[5px] bg-gray-200 hover:bg-gray-300   dark:bg-[rgb(26,35,39)] dark:hover:bg-[rgb(38,50,56)] dark:text-gray-200 rounded cursor-pointer">
                Resume
                <IoDownloadOutline className="ml-3" />
              </div>
              <div className="ml-5 px-[10px] py-[5px] bg-gray-200 hover:bg-gray-300  dark:bg-[rgb(26,35,39)] dark:hover:bg-[rgb(38,50,56)] dark:text-gray-200 rounded cursor-text">
                sohagannam5a@gmail.com
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1 bigdcoreSkill">
          <Tilt>
            <div className="bg-gray-200 hover:bg-gray-300  dark:bg-[rgb(16,23,26)] p-2 cursor-pointer dark:hover:bg-[rgb(38,50,56)]   w-[100px] flex items-center justify-center flex-col rounded">
              <img src={reactIcon} className="h-[40px]"></img>
              <p className="dark:text-gray-200 text-md">React</p>
            </div>
          </Tilt>
          <Tilt>
            <div className="bg-gray-200 hover:bg-gray-300 dark:bg-[rgb(16,23,26)] p-2 cursor-pointer dark:hover:bg-[rgb(38,50,56)]   w-[100px] flex items-center justify-center flex-col rounded">
              <img src={nodejs} className="h-[40px]"></img>
              <p className="dark:text-gray-200 text-md">Node.Js</p>
            </div>
          </Tilt>
          <Tilt>
            <div className="bg-gray-200 hover:bg-gray-300 dark:bg-[rgb(16,23,26)] p-2 cursor-pointer dark:hover:bg-[rgb(38,50,56)]  w-[100px] flex items-center justify-center flex-col rounded">
              <img src={mongodb} className="h-[40px]"></img>
              <p className="dark:text-gray-200 text-md">Mongodb</p>
            </div>
          </Tilt>
          <Tilt>
            <div className="bg-gray-200 hover:bg-gray-300 dark:bg-[rgb(16,23,26)] p-2 cursor-pointer dark:hover:bg-[rgb(38,50,56)]   w-[100px] flex items-center justify-center flex-col rounded">
              <img src={leetcode} className="h-[40px]"></img>
              <p className="dark:text-gray-200 text-md">Leetcode</p>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}
