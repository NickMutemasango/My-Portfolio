
"use client"
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import {
  RxCrop,

  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

const serviceData = [
  {
    icon: <RxCrop />,
    title: "Testing",
    description: "Ensures functionality, usability, and performance across different environments.",
  },
  {
    icon: <RxReader />,
    title: "Problem solving",
    description: "Identifying issues, analyzing solutions, and optimizing code efficiency.",
  },
  {
    icon: <RxRocket />,
    title: "Debugging",
    description: "Identifying and resolving code issues to ensure smooth application functionality.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description: "Building applications, coding features, ensuring performance, and scalability.",
  },
 
];

import { FreeMod, Pagination } from "swiper";

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={{ FreeMod, Pagination }}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-4 md:py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 ">

              {/* icon */}
              <div className="text-[20px] md:text-4xl text-accent mb-4">{item.icon}</div>

              {/* title and desc */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] text-sm leading-normal">{item.description}</p>
              </div>

              {/* arrow */}
              <div className="text-[20px] md:text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"/>
              </div>

            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
