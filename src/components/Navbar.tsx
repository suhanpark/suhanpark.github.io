// components/Navbar.tsx

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" top-0 left-0 right-0 p-4   z-10">
      <div className="container mx-auto  flex justify-between w-[90%] lg:w-[60rem]   items-center">
        <ul className="flex space-x-8 hidden md:flex">
          <li>
            <Link
              href="#about"
              className="relative inline-block text-[#18ffe8] transition duration-300 group hover:text-[#00d8ff]"
            >
              <p className="text-[1.3rem] font-bold mb-2">Gabi</p>
              <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-gradient-to-r from-[#18ffe8] to-[#00d8ff] scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="relative mt-[0.3rem] inline-block text-[#f5f5f5] transition duration-300 group hover:text-[#2abfff]"
            >
              Projects
              <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-gradient-to-r from-[#00d8ff] to-[#00ffe5] scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="relative mt-[0.3rem]  inline-block text-[#f5f5f5] transition duration-300 group hover:text-[#45f9ff]"
            >
              Contact
              <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-gradient-to-r from-[#4ca8ff] to-[#00ffee] scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
            </Link>
          </li>
        </ul>

        <div className="flex space-x-4 text-center md:mx-0 mx-auto">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[#f5f5f5] transition duration-300 hover:text-[#9dff00]"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[#f5f5f5] transition duration-300 hover:text-[#00d8ff]"
          >
            <FaLinkedin className="text-xl" />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-[#f5f5f5] transition duration-300 hover:text-[#ff61a6]"
          >
            <FaTwitter className="text-xl" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
