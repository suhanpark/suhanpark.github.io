"use client";
import Navbar from "@/components/Navbar";
import AboutMe from "@/components/home/AboutMe";
import Projects from "@/components/home/Projects";
import Experience from "@/components/home/Experience";
import { FaEnvelope, FaFilePdf } from "react-icons/fa";
import { IoCalendarNumberOutline } from "react-icons/io5";
import React, { useState, useEffect, useRef } from 'react';

const TypingEffect: React.FC<{ 
  words: string[]; 
  typingSpeed: number; 
  blinkSpeed: number; 
}> = ({ words, typingSpeed, blinkSpeed }) => {
  const [currentText, setCurrentText] = useState(' ');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Use refs to manage intervals
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const blinkIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const typeNextCharacter = () => {
      setCurrentText((prevText) => {
        const nextChar = words[currentIndex].charAt(prevText.length);
        return prevText + nextChar;
      });

      // Move to next word when done typing
      if (currentText.length === words[currentIndex].length) {
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
          setCurrentText(" ");
        }, 2000); // Adjust pause duration here
      } else {
        typingTimeoutRef.current = setTimeout(typeNextCharacter, typingSpeed);
      }
    };

    typingTimeoutRef.current = setTimeout(typeNextCharacter, typingSpeed);

    // Cursor blinking effect
    blinkIntervalRef.current = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, blinkSpeed);

    return () => {
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
      if (blinkIntervalRef.current) clearInterval(blinkIntervalRef.current);
    };
  }, [currentIndex, typingSpeed, blinkSpeed, words, currentText.length]);

  return (
    <span className="text-5xl md:text-6xl font-bold">
      {currentText}
      {showCursor && <span className="blinking-cursor" style={{ color: '#C2FFC7' }}> |</span>}
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
          <h1 className="text-3xl text-white md:text-3xl font-bold break-words w-full">
          Hello, I&apos;m
          </h1>
          <h1>
          <TypingEffect words={[' Suhan',' an Engineer', ' a Researcher', ' an AI Zealot', ' a Roboticist', ' a Philanthropist', ' an Innovator']} typingSpeed={130} blinkSpeed={500} />
          </h1>
          <br/>
            {/* <h1 className="text-xl  md:text-2xl mt-10 font-bold  ">
            Transforming Ideas into Reality.
            </h1> */}
          </header>
          <ul className="flex flex-wrap gap-2 md:justify-between">
            <li className="flex items-center mb-2">
              <span className="text-[#B6FFA1] mr-2">•</span>Deep Learning
            </li>
            <li className="flex items-center mb-2">
              <span className="text-[#CB9DF0] mr-2">•</span>2D/3D Computer Vision
            </li>
            <li className="flex items-center mb-2">
              <span className="text-[#B6FFA1] mr-2">•</span>Autonomous Vehicle
            </li>
            <li className="flex items-center mb-2">
              <span className="text-[#CB9DF0] mr-2">•</span>VLM &amp; LLM
            </li>
            <li className="flex items-center mb-2">
              <span className="text-[#B6FFA1] mr-2">•</span>Robotics &amp; AI
            </li>
            <li className="flex items-center mb-2">
              <span className="text-[#CB9DF0] mr-2">•</span>Foundation Models
            </li>
            <li className="flex items-center mb-2">
              <span className="text-[#B6FFA1] mr-2">•</span>Machine Learning
            </li>
            <li className="flex items-center mb-2">
              <span className="text-[#CB9DF0] mr-2">•</span>ML Ops
            </li>
            </ul>
          <div className="mx-auto text-center mt-10 justify-center flex"> 
            <a href="mailto:simon7233@gmail.com">
              <button className="flex items-center mx-auto text-center p-6 px-10 border-[0.1rem] rounded-xl text-[#ffffff] font-bold border-[#ffffff] transition duration-300 hover:text-[#7ED4AD] hover:border-[#7ED4AD]">
                <FaEnvelope className="mr-2" />{" "}
                <h1 className="font-extrabold">Contact</h1>
              </button>
            </a>
            <a href="https://drive.google.com/drive/folders/185m6vIk7T5NE-v8tdvm_zfszv2scF6Il?usp=sharing" className="ml-6"> <button className="flex items-center mx-auto text-center p-6 px-10 border-[0.1rem] rounded-xl text-[#ffffff] font-bold border-[#ffffff] transition duration-300 hover:text-[#7ED4AD] hover:border-[#7ED4AD]">
                <FaFilePdf className="mr-2" />{" "}
                <h1 className="font-extrabold">Résumé</h1>
              </button>
            </a>
            <a href="https://cal.com/suhan-park/30min" className="ml-6"> <button className="flex items-center mx-auto text-center p-6 px-10 border-[0.1rem] rounded-xl text-[#ffffff] font-bold border-[#ffffff] transition duration-300 hover:text-[#7ED4AD] hover:border-[#7ED4AD]">
                <IoCalendarNumberOutline className="mr-2" />{" "}
                <h1 className="font-extrabold">Meeting</h1>
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
          © Inpired by Gabi. Made by Suhan. All rights reserved.
        </footer>
      </div>
    </>
  );
}
