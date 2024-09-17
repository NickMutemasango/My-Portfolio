import Link from "next/link";

import {
  RiGithubLine,
  RiLinkedinLine,
  RiWhatsappLine,

} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-2xl ">
      <Link href='https://wa.me/+263715641018' className="hover:text-accent transition-all duration-300 ">
      <RiWhatsappLine/>
      </Link>
      <Link href='https://www.linkedin.com/in/nick-mutemasango-8847692ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className="hover:text-accent transition-all duration-300 ">
      <RiLinkedinLine/>
      </Link>
      <Link href='https://github.com/NickMutemasango?tab=repositories' className="hover:text-accent transition-all duration-300 ">
      <RiGithubLine/>
      </Link>

    </div>
  );
};

export default Socials;
