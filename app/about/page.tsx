"use client";

import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

// Define the types for aboutData
type InfoItem =
  | { title: string; icons: JSX.Element[] } // for skills section
  | { title: string; stage: string }; // for experience section

interface AboutData {
  title: string;
  info: InfoItem[];
}

const aboutData: AboutData[] = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - Uncommon.org",
        stage: "February - March",
      },
      {
        title: "Web Developer - Uncommon.org",
        stage: "2024 - Present",
      },
    ],
  },
];

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <motion.div variants={fadeIn("right", 0.2)}
    initial="hidden"
    animate="show"
    exit="hidden" className="h-full bg-primary/30 py-32 text-center lg:text-left ">
      <Circles />

      {/* avatar image */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden lg:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center lg:flex-row gap-x-6 ">
        <div className="flex flex-col justify-center ">
          <div>
            <motion.h2 className="h2">
              Captivating <span className="text-accent">stories</span> birth
              magnificent websites.
            </motion.h2>
            <motion.p className="max-w-[500px] mx-auto lg:mx-0 mb-6 lg:mb-12 px-2 lg:px-0">
              10 years ago, I began freelancing as a developer. Since then, I've
              done remote work for agencies.
            </motion.p>
          </div>

          {/* counters */}
          <div>
            <div className="flex">
              {/* experience */}
              <div className="flex-1 relative after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1} duration={9} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                  Year of experience
                </div>
              </div>
              <div className="flex-1 relative after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={9} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                  Satisfied customers
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[50%] h-[480px] justify-center">
          <div className="flex gap-x-4 lg:gap-x-6 xl:gap-x-8 mx-auto lg:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalise lg:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="py-2 lg:py-6 flex flex-col gap-y-2 lg:gap-y-4 items-center lg:items-start">
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">
                  {item.title}
                  {/* Conditionally render 'stage' if it exists */}
                  {"stage" in item && <div>{item.stage}</div>}
                  {/* Conditionally render 'icons' if it exists */}
                  {"icons" in item && (
                    <div className="flex gap-x-4">
                      {item.icons.map((icon, iconIndex) => (
                        <div key={iconIndex} className="text-2xl text-white">
                          {icon}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div >
  );
};

export default About;