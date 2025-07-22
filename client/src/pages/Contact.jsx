import React, { useState } from "react";
import { useSelector } from "react-redux";
import { GrPhone } from "react-icons/gr";
import { MdOutlineMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


export default function Contact() {
  const selectedItems = useSelector((state) => state.nav.side);
  const [selectContact, setSelectContact] = useState("emailcontact");
  return (
    <div
      className={`py-[5%] ${
        (selectedItems === "left" && "pl-[0%] md:pl-[10%]") ||
        (selectedItems === "right" && "pr-[0%] md:pr-[10%]") ||
        (selectedItems === "bottom" && "md:mb-[7%]")
      }`}
    >
      <div className="w-full md:w-[80%] my-0 mx-auto">
        <h3 className="text-xl dark:text-gray-200">Contact Me</h3>
        <p className="p_font dark:text-gray-300 mt-3">
          Got a project in mind? Let's make something great together — contact
          me to chat or see more of my work!
        </p>
        <div className="block lg:flex items-start justify-between mt-10">
          <div>
            <div className="flex items-center mt-4">
              <GrPhone className="text-xl dark:text-gray-200" />
              <p className="ml-2 dark:text-gray-300">+8801722808864</p>
            </div>

            <div className="flex items-center mt-4">
              <MdOutlineMail className="text-xl dark:text-gray-200" />
              <p className="ml-2 dark:text-gray-300">sohagannam5a@gmail.com</p>
            </div>

            <div className="flex items-center mt-4">
              <FaLocationDot className="text-xl dark:text-gray-200" />
              <p className="ml-2 dark:text-gray-300">
                Bangladesh. Dinajpur, Phulbari
              </p>
            </div>
          </div>
          <div className="full lg:w-1/2">
            <div className="flex items-center space-x-3 mt-10 lg:mt-0">
              <button
                onClick={() => setSelectContact("emailcontact")}
                className={`${
                  selectContact === "emailcontact"
                    ? "border-purple-500"
                    : "border-transparent"
                } border-b-2  dark:text-gray-300 px-2 py-1  cursor-pointer dark:hover:text-gray-200`}
              >
                Email
              </button>
              <button
                onClick={() => setSelectContact("livemessage")}
                className={`${
                  selectContact === "livemessage"
                    ? "border-purple-500"
                    : "border-transparent"
                } border-b-2 dark:text-gray-300 px-2 py-1  cursor-pointer dark:hover:text-gray-200`}
              >
                Live Chat
              </button>
            </div>
            <div className="mt-5">
              <form>
                <div>
                  <input
                    type="email"
                    placeholder="Please write your email"
                    required
                    className="mb-2 w-full bg-gray-200  dark:bg-[rgb(26,35,39)] px-[10px] py-[8px] rounded dark:text-gray-300 outline-0"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Please write your subject"
                    required
                    className="mb-2 w-full bg-gray-200 dark:bg-[rgb(26,35,39)] px-[10px] py-[8px] rounded dark:text-gray-300 outline-0"
                  />
                </div>
                <div>
                  <textarea
                    className="mb-1 bg-gray-200 dark:bg-[rgb(26,35,39)] px-[10px] py-[8px] rounded dark:text-gray-300 outline-0 w-full resize-none"
                    required
                  />
                </div>
                <div className="w-auto bg-gray-200 mx-auto my-0  px-[10px] py-[8px] text-center dark:bg-[rgb(26,35,39)] dark:hover:bg-[rgb(38,50,56)] hover:bg-gray-300  dark:text-gray-200 rounded cursor-pointer">
                  Send
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
