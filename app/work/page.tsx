"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import Vanlife from "../../public/one.png";
import Projects from "../../components/Projects";
import Manage from "../../public/bring.png";
import Nyamatusi from "../../public/nyama.png";
import Air from "../../public/air.png";
import Travel from "../../public/travel.png";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";

const Work = () => {
  const slides = [
    { image: Vanlife, alt: "vanlife", link: "https://van-life-complete.vercel.app" },
    { image: Nyamatusi, alt: "vanlife", link: "https://nickmutemasango.github.io/Third-project-Nyamatusi-/" },
    { image: Air, alt: "vanlife", link: "https://air-bn-b-pi.vercel.app" },
    { image: Travel, alt: "vanlife", link: "https://travel-journal-smoky-ten.vercel.app" },
    { image: Manage, alt: "vanlife", link: "https://nickmutemasango.github.io/First-Tailwind-Project/" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="h-full bg-primary/30 py-36 items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-8">
          {/* text */}
          <div className="text-center lg:w-[440%] flex flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-[24px] md:h2 xl:mt-12"
            >
              My Work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 text-xs md:text-base max:w-[400px] mx-auto lg:mx-0"
            >
              As a front-end developer, focusing on building functional and responsive web applications.
            </motion.p>
          </div>

          {/* slider */}
          <div className="relative text-white">
            {/* Projects Slider */}
            <div className="w-full lg:w-[60%] flex justify-center items-center overflow-hidden relative">
              {/* Projects components that slide */}
              <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(${-currentIndex * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <a
                    key={index}
                    href={slide.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex-shrink-0 lg:flex lg:items-center"
                  >
                    <Projects image={slide.image} link={slide.link}/>

                  </a>
                ))}
              </div>
            </div>

            {/* Slider Controls */}
            <div className="flex justify-center w-full lg:w-[25%] xl:w-[35%] space-x-5 mt-5">
              <button
                onClick={prevSlide}
                className="bg-white hover:bg-accent text-black py-2 px-4 rounded-lg"
              >
                <RxDoubleArrowLeft className="hover:text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="bg-white hover:bg-accent text-black py-4 px-4 rounded-lg"
              >
                <RxDoubleArrowRight  className="hover:text-white"/>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
