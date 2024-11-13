"use client";
import Navbar from "@/components/Navbar";
import AboutMe from "@/components/home/AboutMe";
import Projects from "@/components/home/Projects";
import Experience from "@/components/home/Experience";
import { FaEnvelope, FaFilePdf } from "react-icons/fa";
import React, { useState, useEffect } from 'react';

const TypingEffect = ({ words, typingSpeed, blinkSpeed }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout;
    const blinkInterval: NodeJS.Timeout;

    const typeNextCharacter = () => {
      setCurrentText((prevText) => prevText + words[currentIndex].charAt(prevText.length));

      if (currentText.length === words[currentIndex].length) {
        // Pause briefly before moving to the next word
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length); // Cycle through words
          setCurrentText(''); // Reset for the next word
        }, 1700); // Adjust pause duration (in milliseconds) as needed
      } else {
        typingTimeout = setTimeout(typeNextCharacter, typingSpeed);
      }
    };

    if (currentIndex < words.length) {
      typingTimeout = setTimeout(typeNextCharacter, typingSpeed);
    }

    // Cursor blinking effect
    blinkInterval = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, blinkSpeed);

    // Cleanup
    return () => {
      clearTimeout(typingTimeout);
      clearInterval(blinkInterval);
    };
  }, [currentText, currentIndex, typingSpeed, blinkSpeed, words]);

  return (
    <span className="text-5xl md:text-6xl font-bold"> {/* Apply heading styles */}
      {currentText}
      {showCursor && <span className="blinking-cursor" style={{ color: '#C2FFC7' }}>|</span>}
    </span>
  );
};

export default function Home() {
    return (
    <>
      <meta
        name="google-site-verification"
        content="vGIrbnxgP14aKX74bPNwJvPzoUm1Uk_YeZo1WnMSgxI"
      />
      <Navbar />
      <div className=" flex flex-col items-center p-8 sm:p-20 text-gray-100">
        {/* Header Section */}
        {/* About Section */}
        <section className="w-full  3xl:min-h-[80rem] max-w-2xl justify-center content-center ">
          <header className="flex flex-col items-center  text-center gap-4 mb-7">
          <h1 className="text-5xl text-white md:text-6xl font-bold break-words w-full">
          Hello, I&apos;m
          <br/>
          <TypingEffect words={['Suhan Park','Computer Vision Engineer', 'Deep Learning Researcher', 'Robotics Enthusiast', 'Autonomous Vehicle Zealot', 'Philantropist', 'Innovator', 'Software Engineer']} typingSpeed={120} blinkSpeed={500} />

          </h1>
            
            <h1 className="text-xl  md:text-2xl mt-10 font-bold  ">
            Transforming Ideas into Reality.
            </h1>
          </header>
          <p className="text-base font-normal text-center leading-8">
            I&apos;m an aspiring deep learning researcher and autonomous machine perception engineer.
            I am passionate about machine learning, deep learning, and computer vision,
            actively keeping up with innovative research and advancements that expands my knowledge.
          </p>

          <div className="mx-auto text-center mt-10 justify-center flex"> 
            <a href="mailto:simon7233@gmail.com">
              <button className="flex items-center mx-auto text-center p-6 px-10 border-[0.1rem] rounded-xl text-[#ffffff] font-bold border-[#ffffff] transition duration-300 hover:text-[#7ED4AD] hover:border-[#7ED4AD]">
                <FaEnvelope className="mr-2" />{" "}
                <h1 className="font-extrabold">Contact</h1>
              </button>
            </a>
            <a href="https://drive.google.com/file/d/1ULykEzOef8IUKPg2FFX45RrNa0m0u21H/view?usp=sharing" className="ml-6"> <button className="flex items-center mx-auto text-center p-6 px-10 border-[0.1rem] rounded-xl text-[#ffffff] font-bold border-[#ffffff] transition duration-300 hover:text-[#7ED4AD] hover:border-[#7ED4AD]">
                <FaFilePdf className="mr-2" />{" "}
                <h1 className="font-extrabold">Résumé</h1>
              </button>
            </a>
          </div>
        </section>
        <section id="about" className="mt-32">
          <AboutMe />
        </section>
        <section id="experience" className="mt-0 md:mt-0">
          <Experience />
        </section>
        <section id="projects" className="mt-0 md:mt-0">
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

        <footer className="mt-20 text-sm text-gray-400">
          © 2024 Modified by Suhan. All rights reserved.
        </footer>
      </div>
    </>
  );
}
