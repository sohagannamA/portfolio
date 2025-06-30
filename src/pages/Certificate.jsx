import React from "react";
import { useSelector } from "react-redux";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function Certificate() {
  const selectedItems = useSelector((state) => state.nav.side);

  const certificate = [1, 2, 3, 4, 5];

  const [slidRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 3,
      spacing: 10,
    },
    breakpoints:{
      "(max-width:994px)":{
        slides:{
          perView:2,
          spacing:10
        }
      },
      "(max-width:768px)":{
        slides:{
          perView:1,
          spacing:10
        }
      }
    }  
  });
  return (
    <div
      className={`py-[5%] ${
        (selectedItems === "left" && "pl-[0%] md:pl-[10%]") ||
        (selectedItems === "right" && "pr-[0%] md:pr-[10%]") ||
        (selectedItems === "bottom" && "md:mb-[7%]")
      }`}
    >
      <div className="w-full md:w-[80%] my-0 mx-auto">
        <div>
          <h3 className="text-xl dark:text-gray-200">Certificates</h3>
          <p className="p_font dark:text-gray-300 mt-3">
            I hold certificates in{" "}
            <span className="font-bold">
              MERN stack, Python, and Machine Learning
            </span>
            , proving my skills. These achievements show my dedication to growth
            and real-world application.
          </p>
          <div ref={slidRef} className="keen-slider mt-5">
            {certificate.map((cer) => (
              <div className="keen-slider__slide bg-gray-200 hover:bg-gray-300 dark:hover:bg-[rgb(38,50,56)]  dark:bg-[rgb(26,35,39)] rounded-xl hover:cursor-grabbing">
                <img
                  className="w-full"
                  src="data:image/jpeg;base64,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"
                ></img>
                <div className="p-2">
                  <h3 className="dark:text-gray-200 font-stretch-semi-condensed dark:font-bold text-[16px]">
                    Web design and development
                  </h3>
                  <p className="text-gray-800 dark:text-gray-300 p_font">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nam, magnam?
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
