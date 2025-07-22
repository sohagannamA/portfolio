import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoContract, IoDownloadOutline, IoSend } from "react-icons/io5";

import Tilt from "react-parallax-tilt";

import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiLeetcode } from "react-icons/si";

import HomeData from "../projectdata/home.json";

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
                  {HomeData[0].name}
                </h3>
                <p className="text-gray-800 dark:text-gray-400 ressmallText">
                  {HomeData[0].work_as}
                </p>
              </div>
              <div className="res_profileLink flex items-center mt-2 space-x-3">
                {HomeData[0].socialLink.map((link) => (
                  <NavLink
                    to={link.link}
                    className="iconHover h-[30px] bg-gray-200 hover:bg-gray-300 dark:hover:bg-[rgb(38,50,56)]  w-[30px]  dark:bg-[rgb(26,35,39)] flex items-center justify-center rounded"
                  >
                    {(link.name === "github" && (
                      <FaGithub className="link text-[15px] dark:text-gray-400" />
                    )) ||
                      (link.name === "linkedin" && (
                        <FaLinkedin className="link text-[15px] dark:text-gray-400" />
                      ))}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className="py-2 w-full">
            <div className="mb-2 md:hidden">
              <div className="px-[10px] text-center py-[5px] bg-gray-200 hover:bg-gray-300  dark:bg-[rgb(26,35,39)] dark:hover:bg-[rgb(38,50,56)] dark:text-gray-200 rounded cursor-text">
                {HomeData[0].email}
              </div>
            </div>
            <div className="grid-cols-2 gap-2 hidden rescoreSkill">
              {HomeData[0].skillSet.homeSkill.map((skill) => (
                <Tilt>
                  <div className="bg-gray-200 hover:bg-gray-300 dark:bg-[rgb(26,35,39)] dark:hover:bg-[rgb(38,50,56)] flex items-center justify-center py-2 rounded cursor-pointer">
                    {(skill.icon === "react" && (
                      <FaReact className="text-[#56BCD7]" />
                    )) ||
                      (skill.icon === "nodejs" && (
                        <FaNodeJs className="text-[#72A706]" />
                      )) ||
                      (skill.icon === "mongodb" && (
                        <DiMongodb className="text-[#02ED64]" />
                      )) ||
                      (skill.icon === "leetcode" && (
                        <SiLeetcode className="text-[#f1a635]" />
                      ))}
                    <p className="ml-2 dark:text-gray-300 text-sm font-bold">
                      {skill.name}
                    </p>
                  </div>
                </Tilt>
              ))}
            </div>
            <p className="dark:text-gray-300 p_font introRes">
              {HomeData[0].selfinfo1}
              {HomeData[0].skillSet.selfinfoSkill.map((slfskill) => (
                <span className="font-bold"> {slfskill}. </span>
              ))}
              {HomeData[0].selfinfo2}.
            </p>
            <div className="flex items-center gap-2  justify-between  mt-4 mb-4">
              <div className="flex items-center justify-center w-full px-[10px] py-[5px] bg-gray-200 hover:bg-gray-300   dark:bg-[rgb(26,35,39)] dark:hover:bg-[rgb(38,50,56)] dark:text-gray-200 rounded cursor-pointer">
                Resume
                <IoDownloadOutline className="ml-3" />
              </div>
              <div className="flex md:hidden items-center justify-center w-full px-[10px] py-[5px] bg-gray-200 hover:bg-gray-300   dark:bg-[rgb(26,35,39)] dark:hover:bg-[rgb(38,50,56)] dark:text-gray-200 rounded cursor-pointer">
                Contact
                <IoSend className="ml-3" />
              </div>
              <div className="hidden md:flex items-center justify-center w-full px-[10px] py-[5px] bg-gray-200 hover:bg-gray-300   dark:bg-[rgb(26,35,39)] dark:hover:bg-[rgb(38,50,56)] dark:text-gray-200 rounded cursor-pointer">
                {HomeData[0].email}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1 bigdcoreSkill">
          {HomeData[0].skillSet.homeSkill.map((skill) => (
            <Tilt>
              <div className="bg-gray-200 hover:bg-gray-300  dark:bg-[rgb(16,23,26)] p-2 cursor-pointer dark:hover:bg-[rgb(38,50,56)]   w-[100px] flex items-center justify-center flex-col rounded">
                <img src={skill.src} className="h-[40px]"></img>
                <p className="dark:text-gray-200 text-md">{skill.name}</p>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
}
