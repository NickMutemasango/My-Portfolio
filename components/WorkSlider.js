"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


import { Pagination } from "swiper";

import { BsArrowRight } from "react-icons/bs";

// data
const workSlider = {
  slides: [
    {
      images: [
        {
          title: "VanLife",
          path: "/one.svg",
          url: "https://van-life-complete.vercel.app",
        },
        {
          title: "Air-bnb",
          path: "/two.svg",
          url: "https://air-bn-b-pi.vercel.app/",
        },
        {
          title: "build products",
          path: "/three.svg",
          url: "https://nickmutemasango.github.io/First-Tailwind-Project/",
        },
        {
          title: "bussinessCards",
          path: "/four.svg",
          url: "https://business-cards-snowy.vercel.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "Wildlife",
          path: "/five.svg",
          url: "https://nickmutemasango.github.io/Third-project-Nyamatusi-/",
        },
        {
          title: "travel journal",
          path: "/six.svg",
          url: "https://travel-journal-smoky-ten.vercel.app/",
        },
        {
          title: "  Upcomming",
          path: "/thumb2.jpg",
          url: "",
        },
        {
          title: "Upcomming",
          path: "/thumb3.jpg",
          url: "",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={{ Pagination }}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <a
                    key={index}
                    href={image.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden">
                      {/* images */}
                      <Image src={image.path} width={300} height={100} alt={image.title} />

                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-purple-900 opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:lg:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title part 1 */}
                          <div className="delay-100">LIVE</div>
                          {/* title part 2 */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            PROJECT
                          </div>
                          {/* icon */}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
