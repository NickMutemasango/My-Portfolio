"use client";

import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Contact = () => {
  const handleSubmit = async () => {
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      console.log("Error in form submission:", error);
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 2000,
        position: "top",
      });
    }
  };



  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="h-full bg-primary"
    >
      <div className="container mx-auto py-32 text-center lg:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px] ">
          <h2 className="text-2xl md:h2 text-center mb-5 md:mb-10">
            Let&apos;s <span className="text-accent">connect.</span>
          </h2>
          <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-3 md:gap-6 w-full mx-auto">
            <div className="flex gap-x-6 w-full">
              <input name="name" type="text" placeholder="name" className="input h-10 md:h-[46px]" required />
              <input name="email" type="email" placeholder="email" className="input h-10 md:h-[46px]" required />
            </div>
            <input name="subject" type="text" placeholder="subject" className="input h-10 md:h-[46px]" required />
            <textarea name="message" placeholder="message" className="textarea h-28 md:h-44" required></textarea>
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

