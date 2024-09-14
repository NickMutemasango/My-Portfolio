"use client"
// components

import ProjectsBtn from "../components/ProjectsBtn";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 ">
        <div className="text-center flex flex-col justify-center lg:pt-40 lg:text-left h-full container mx-auto ">
          {/* title */}
          <h1 className="h2">
            Transforming Ideas <br /> Into{" "}
            <span className="text-accent">Digital Reality</span>
          </h1>
          {/* subtitle */}
          <p className="max-w-sm lg:max-w-xl mx-auto lg:mx-0 mb-10 lg:mb-16">
            Skilled frond-end developer with a strong foundation in coding, debugging,
            testing, and problem-solving. Adept at writing clean, efficient code
            and identifying and resolving issues in both front-end and back-end.
            {/* environments.  Proactive in
            troubleshooting and resolving complex technical challenges, ensuring
            optimal performance and reliability of applications. */}
          </p>
          {/* Btn */}
          <div className="flex justify-center lg:hidden relative">
            <ProjectsBtn />
          </div>
          <div className="hidden lg:flex">
            <ProjectsBtn />
          </div>
        </div>
      </div>
      {/* image */}
      <div className="lg:w-[1200px] md:w-[1000px] w-full h-full absolute right-0 bottom-0">
        {/* bg image */}
        <div className="bg-none lg:bg-explosion lg:bg-cover lg:bg-right lg:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        
        
      </div>
    </div>
  );
};

export default Home;
