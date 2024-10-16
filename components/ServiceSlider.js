"use client";
import Slider from "react-slick";  // Import Slick Slider

// Import Slick Slider styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import icons
import {
  RxCrop,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// Data for services
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

const ServiceSlider = () => {
  // Slick slider settings
  const settings = {
    dots: true,  // Show pagination dots
    infinite: true,  // Infinite scrolling
    speed: 500,  // Transition speed
    slidesToShow: 3,  // Number of slides to show at a time
    slidesToScroll: 1,  // Number of slides to scroll
    autoplay: true,  // Enable autoplay
    autoplaySpeed: 3000,
    arrows: false,  // Autoplay speed in milliseconds (3 seconds)
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,  // Show 1 slide on small screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="h-[240px]  sm:h-[340px]">
      {serviceData.map((item, index) => {
        return (
          <div key={index} className="mr-3">
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
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default ServiceSlider;
