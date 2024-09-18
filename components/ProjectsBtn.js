// next image
import Image from "next/image";

// next link
import Link from "next/link";

// icons
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto lg:mx-0">
      <Link
        href={"/work"}
        className="relative w-[135px] md:w-[175px] xl:w-[175px] xl:h-[175px] lg:w-[115px] lg:h-[115px] md:h-[175px] h-[135px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group "
      >
        <Image
          src={"/rounded-text.png"}
          width={141}
          height={148}
          alt=""
          className="animate-spin-slow w-[105px] lg:w-[90px] lg:h-[95px] h-[115px] xl:w-[141px] xl:h-[148px] md:w-[141px] md:h-[148px] ] "
        />
        <HiArrowRight className="absolute text-2xl lg:text-2xl xl:text-4xl md:text-4xl md:group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
