"use client";

import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Contact = () => {
  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="h-full bg-primary"
    >
      <div className="container mx-auto py-32 text-center lg:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px] ">
          {/* text */}
          <h2 className="text-2xl md:h2 text-center mb-5 md:mb-10">
            Let&apos;s <span className="text-accent">connect.</span>
          </h2>
          {/* form */}
          <form className="flex-1 flex flex-col gap-3 md:gap-6 w-full mx-auto">
            {/* input groups */}
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="name" className="input h-10 md:h-[46px]" />
              <input type="email" placeholder="email" className="input h-10 md:h-[46px]" />
            </div>
            <input type="text" placeholder="subject" className="input h-10 md:h-[46px]" />
            <textarea placeholder="message" className="textarea h-28 md:h-44"></textarea>
            <button className="btn rounded-full border border-white/50 max-w-[150px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group ">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 ">
                Let&apos;s talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
