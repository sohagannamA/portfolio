import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { IoClose } from "react-icons/io5";

import CertificateData from "../projectdata/Certificates.json";

export default function Certificate() {
  const selectedItems = useSelector((state) => state.nav.side);
  const [activeCertificate, setActiveSrc] = useState({});


  const [slidRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 3,
      spacing: 10,
    },
    breakpoints: {
      "(max-width:994px)": {
        slides: {
          perView: 2,
          spacing: 10,
        },
      },
      "(max-width:768px)": {
        slides: {
          perView: 1,
          spacing: 10,
        },
      },
    },
  });

  const handleShowCert = (certificateData) => {
    if (certificateData.flag===true) {
      setActiveSrc(certificateData);
    }
    // setActiveSrc(certificateData.src)
  };

  return (
    <div
      className={`py-[5%] ${
        (selectedItems === "left" && "pl-[0%] md:pl-[10%]") ||
        (selectedItems === "right" && "pr-[0%] md:pr-[10%]") ||
        (selectedItems === "bottom" && "md:mb-[7%]")
      }`}
    >
      <div
        className={`w-full h-full bg-[#000000cf] flex items-center justify-center fixed left-0 top-0 z-10 ${
          activeCertificate.flag ? "scale-100" : "scale-0"
        } transition-all duration-400`}
      >
        <div className="bg-[#091b18] rounded w-full ml-3 mr-3 md:ml-0 md:mr-0 md:w-[700px]">
          <div className="flex items-center justify-between px-5 md:px-7 py-3 md:py-5">
            <h3 className="text-gray-200  text-[16px] md:text-[20px]">
              {activeCertificate.flag && activeCertificate.title}
            </h3>
            <IoClose
              onClick={() => setActiveSrc({})}
              className="text-xl cursor-pointer text-gray-300"
            />
          </div>
          <img
            src={activeCertificate.src}
            className="w-full pl-2 pr-2 pb-2 rounded-2xl"
          ></img>
        </div>
      </div>
      <div className="w-full md:w-[80%] my-0 mx-auto">
        <div>
          <h3 className="text-xl dark:text-gray-200">Certificates</h3>
          <p className="p_font dark:text-gray-300 mt-3">
            {CertificateData[0].aboutCertificate_firstCol}{" "}
            <span className="font-bold">
              {CertificateData[0].skillCertificate}
            </span>
            {CertificateData[0].aboutCertificate_secondCol}
          </p>
          <div ref={slidRef} className="keen-slider mt-5">
            {Object.entries(CertificateData[0].Certificateinfo).map(
              ([key, values]) => {
                const certificate = values[0];
                return (
                  <div key={key}
                    onClick={() =>
                      handleShowCert({
                        title: certificate.title,
                        src: certificate.src,
                        flag:true
                      })
                    }
                    className="keen-slider__slide bg-gray-200 hover:bg-gray-300 dark:hover:bg-[rgb(38,50,56)]  dark:bg-[rgb(26,35,39)] rounded hover:cursor-grabbing"
                  >
                    <img
                      className="w-full md:h-[170px] border-3 border-gray-200 rounded dark:border-0"
                      src={certificate.src}
                    ></img>
                    <div className="p-2">
                      <h3 className="dark:text-gray-200 text-center font-stretch-semi-condensed dark:font-bold text-[16px]">
                        {certificate.title}
                      </h3>
                      {/* <p className="text-gray-800 dark:text-gray-300 p_font">
                       {certificate.subtitle}
                      </p> */}
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
