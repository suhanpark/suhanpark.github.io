import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" top-0 left-0 right-0 p-4 mt-6  z-10">
      <div className="container mx-auto  flex justify-between w-[90%] lg:w-[60rem]   items-center">
        <ul className="flex space-x-8 hidden md:flex">
          <li>
            <Link
              href="https://suhanpark.github.io/"
              className="relative inline-block text-[#C2FFC7] text-2xl transition duration-300 group hover:text-[#C2FFC7] text-2xl"
            >
              <p className="text-[1.3rem] font-bold mb-2">Suhan</p>
              <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-gradient-to-r from-[#C2FFC7] to-[#C2FFC7] scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="relative mt-[0.3rem] inline-block text-[#f5f5f5] text-xl transition duration-300 group hover:text-[#C2FFC7] text-xl"
            >
              About
              <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-gradient-to-r from-[#C2FFC7] to-[#C2FFC7] scale-x-0 text-xl transition-transform duration-300 origin-left group-hover:scale-x-100 text-xl"></span>
            </Link>
          </li>
          <li>
            <Link
              href="#experience"
              className="relative mt-[0.3rem] inline-block text-[#f5f5f5] text-xl transition duration-300 group hover:text-[#C2FFC7] text-xl"
            >
              Experience
              <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-gradient-to-r from-[#C2FFC7] to-[#C2FFC7] scale-x-0 text-xl transition-transform duration-300 origin-left group-hover:scale-x-100 text-xl"></span>
            </Link>
          </li>

          <li>
            <Link
              href="#projects"
              className="relative mt-[0.3rem] inline-block text-[#f5f5f5] text-xl transition duration-300 group hover:text-[#C2FFC7] text-xl"
            >
              Projects
              <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-gradient-to-r from-[#C2FFC7] to-[#C2FFC7] scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
            </Link>
          </li>
        </ul>

        <div className="flex space-x-4 text-center md:mx-0 mx-auto">
          <a
            href="https://github.com/suhanpark"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[#f5f5f5] transition duration-300 hover:text-[#C2FFC7]"
          >
            <FaGithub className="text-3xl" />
          </a>
          <a
            href="https://linkedin.com/in/suhanpark01"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[#f5f5f5] transition duration-300 hover:text-[#C2FFC7]"
          >
            <FaLinkedin className="text-3xl" />
          </a>
       
          {/* Light/Dark Mode Button */}
          
          {/* <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-[#f5f5f5] transition duration-300 hover:text-[#ff61a6]"
          >
            <FaTwitter className="text-xl" />
          </a> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
