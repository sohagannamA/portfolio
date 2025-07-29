import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { RiSettings2Line } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toggleham } from "../features/nav/NavSlice";
import { GoHome } from "react-icons/go";
import { IoBagOutline } from "react-icons/io5";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { PiCertificateThin } from "react-icons/pi";
import { TfiWrite } from "react-icons/tfi";
import { MdOutlineMailOutline } from "react-icons/md";
import HomeData from "../projectdata/home.json";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import SkillSlide from "./SkillSlide";
import { IoClose } from "react-icons/io5";

export default function ResNave() {
  const isNavshow = useSelector((state) => state.nav.resnav);
  const dispatch = useDispatch();

  const [scrollHeight, setScrollHeight] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", function () {
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
          onClick={() => dispatch(toggleham(!isNavshow))}
          className="active_set h-9 w-9 bg-gray-200 hover:bg-gray-300   dark:bg-[rgb(21,31,39)] text-[20px] rounded-full cursor-pointer flex items-center justify-center dark:text-gray-200 dark:hover:bg-[rgb(38,50,56)]"
        >
          <AiOutlineMenu />
        </div>
      </div>
      <div
        className={` fixed w-full h-[100vh] top-[0%] left-0 p-[5%]  rounded bg-gradient-to-t from-[#ffffff] via-[rgb(203,200,200)] to-[rgb(206,204,204)] dark:from-[#214243] dark:via-[#000000] dark:to-[rgba(0,0,0,0.90)] ${
          !isNavshow ? "opacity-0 hidden" : "opacity-100 block"
        }`}
      >
        <div className="fixed top-0 left-0 w-full">
          <div onClick={()=>dispatch(toggleham(!isNavshow))} className="h-[35px] fixed z-50 top-0 m-3 rounded-full right-0 w-[35px] hover:bg-[#161616] cursor-pointer flex items-center justify-center">
            <IoClose className="text-[22px] text-gray-300" />
          </div>
          <div className="h-42 relative  w-full dark:bg-[linear-gradient(rgba(0,0,0,0.60),rgba(0,0,0,0.90)),url('https://cdn.pixabay.com/photo/2021/12/10/13/30/working-6860520_640.jpg')] bg-[linear-gradient(rgba(0,0,0,0.20),rgb(207,202,202))),url('https://cdn.pixabay.com/photo/2021/12/10/13/30/working-6860520_640.jpg')] bg-cover bg-center"></div>
          <div className="h-[100px] absolute_position w-[100px] rounded-full bg-gray-300 dark:bg-[rgb(16,23,26)]">
            <img
              className="h-[100%] object-top p-1 w-[100%] rounded-full"
              src="https://cdn.pixabay.com/photo/2019/10/22/13/43/man-4568761_640.jpg"
            ></img>
          </div>
        </div>

        <div className="mt-50">
          <div className="my-10 text-center">
            <div className="dark:text-gray-300 text-gray-950">
              MAMUNUR RASHID SOHAG
            </div>
            <p className="text-gray-800 mt-2 dark:text-gray-400 ressmallText">
              Computer Science Student
            </p>

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
            <div className="skill_slide">
              <SkillSlide />
            </div>
          </div>
          <div className="forActive_Nav mt-15 grid grid-cols-3 gap-3">
            <NavLink
              onClick={() => dispatch(toggleham(!isNavshow))}
              to="/"
              className="flex items-center flex-col p-2 rounded text-gray-700 hover:text-gray-900 dark:text-gray-300 hover:dark:text-gray-200"
            >
              <GoHome className="text-center text-[20px]" />
              <p className="text-[15px] mt-2">Home</p>
            </NavLink>
            <NavLink
              onClick={() => dispatch(toggleham(!isNavshow))}
              to="/projects"
              className="flex items-center flex-col p-2 rounded text-gray-700 hover:text-gray-900 dark:text-gray-300 hover:dark:text-gray-200"
            >
              <IoBagOutline className="text-center text-[20px]" />
              <p className="text-[15px] mt-2">Projects</p>
            </NavLink>
            <NavLink
              onClick={() => dispatch(toggleham(!isNavshow))}
              to="/skill"
              className="flex items-center flex-col p-2 rounded text-gray-700 hover:text-gray-900 dark:text-gray-300 hover:dark:text-gray-200"
            >
              <TbDeviceDesktopCode className="text-center text-[20px]" />
              <p className="text-[15px] mt-2">Skills</p>
            </NavLink>

            <NavLink
              onClick={() => dispatch(toggleham(!isNavshow))}
              to="/certificate"
              className="flex items-center flex-col p-2 rounded text-gray-700 hover:text-gray-900 dark:text-gray-300 hover:dark:text-gray-200"
            >
              <PiCertificateThin className="text-center text-[20px]" />
              <p className="text-[15px] mt-2">Certificate</p>
            </NavLink>

            <NavLink
              onClick={() => dispatch(toggleham(!isNavshow))}
              to="/blogs"
              className="flex items-center flex-col p-2 rounded text-gray-700 hover:text-gray-900 dark:text-gray-300 hover:dark:text-gray-200"
            >
              <TfiWrite className="text-center text-[20px]" />
              <p className="text-[15px] mt-2">Blogs</p>
            </NavLink>

            <NavLink
              onClick={() => dispatch(toggleham(!isNavshow))}
              to="/contact"
              className="flex items-center flex-col p-2 rounded text-gray-700 hover:text-gray-900 dark:text-gray-300 hover:dark:text-gray-200"
            >
              <MdOutlineMailOutline className="text-center text-[20px]" />
              <p className="text-[15px] mt-2">Contact</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
