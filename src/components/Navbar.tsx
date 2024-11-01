// components/Navbar.tsx

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 p-4   z-10">
      <div className="container mx-auto flex justify-between   items-center">
        {/* <ul className="flex space-x-8">
          <li>
            <Link href="#about" className="hover:text-blue-500">
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-blue-500">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-blue-500">
              Contact
            </Link>
          </li>
        </ul> */}

        {/* <div className="flex space-x-4 text-center mx-auto ">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="text-xl hover:text-blue-500" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-xl hover:text-blue-500" />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className="text-xl hover:text-blue-500" />
          </a>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
