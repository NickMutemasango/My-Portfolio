"use client"
import ServiceSlider from "../../components/ServiceSlider";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row  gap-x-8">
          {/* text */}
          <div className="text-center flex lg:w-[20vw] xl:w-[30vw] flex-col lg:text-left mb-4 lg:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="md:h2 lg:text-[32px] lg:font-bold xl:mt-8"
            >
              My Services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max:w-[400px] text-sm md:text-2xl mx-auto lg:mx-0"
            >
              As a skilled developer, I offer comprehensive testing, debugging,
              and problem-solving services to ensure your website run
              smoothly and efficiently. I test functionality,
              identify bugs, and implement fixes to maintain optimal performance
            </motion.p>
          </div>
          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full lg:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;

