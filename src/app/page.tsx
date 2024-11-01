import Navbar from "@/components/Navbar";
import AboutMe from "@/components/home/AboutMe";
import Projects from "@/components/home/Projects";
import Experience from "@/components/home/Experience";
import { FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center p-8 sm:p-20  text-gray-800 dark:text-gray-100">
        {/* Header Section */}
        {/* About Section */}
        <section className="w-full min-h-screen md:min-h-[80rem] max-w-2xl justify-center content-center ">
          <header className="flex flex-col items-center  text-center gap-4 mb-7">
            <h1 className="text-5xl text-[#0c3f33]  dark:text-[#64FFDA] md:text-6xl font-bold  ">
              Hello, I&apos;m Gabi
            </h1>
            <h1 className="text-xl md:text-2xl font-bold  ">
              I enjoy creating applications
            </h1>
          </header>
          <p className="text-base font-normal text-center leading-8">
            I&apos;m a software engineer based in the United Kingdom
            specializing in healthcare applications. My goal is to deliver &
            maintain substantial and highly complex applications for all health
            organizations. I am captivated by the latest advancements in
            scientific inquiry, closely following pioneering research that
            reshapes the boundaries of human knowledge.
          </p>
          <div className="mx-auto text-center mt-10 justify-center ">
            <button className="flex items-center mx-auto text-center p-6 px-10 border-[0.1rem] rounded-xl text-[#0c3f33] dark:text-[#64FFDA] font-bold border-[#0c3f33] dark:border-[#18ffc9]">
              <FaEnvelope className="mr-2" />{" "}
              {/* Add margin to the right of the icon */}
              <h1 className="font-extrabold">Contact</h1>
            </button>
          </div>
        </section>
        <section className="mt-0 md:mt-0">
          <AboutMe />
        </section>
        <section className="mt-0 md:mt-0">
          <Experience />
        </section>
        <section className="mt-0 md:mt-0">
          <Projects />
        </section>
        {/* Projects Section */}
        {/* <section className="w-full max-w-2xl mb-16">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="font-medium text-lg">Project 1</h3>
            <p>A brief description of your project and technologies used.</p>
            <a href="#" className="text-blue-500">
              View Project
            </a>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="font-medium text-lg">Project 2</h3>
            <p>A brief description of your project and technologies used.</p>
            <a href="#" className="text-blue-500">
              View Project
            </a>
          </div>
        </div>
      </section> */}
        {/* Contact Section */}
        {/* <section className="w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-base">
          Feel free to reach out to me for collaboration or just to say hi!
        </p>
        <a
          href="mailto:your.email@example.com"
          className="text-blue-500 hover:underline"
        >
          your.email@example.com
        </a>
      </section> */}

        <footer className="mt-20 text-sm text-gray-600 dark:text-gray-400">
          © 2024 made by Gabi. All rights reserved.
        </footer>
      </div>
    </>
  );
}
