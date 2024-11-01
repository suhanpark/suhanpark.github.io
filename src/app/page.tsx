import Image from "next/image";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center p-8 sm:p-20 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Navbar />
      {/* Header Section */}
      <header className="flex flex-col items-center text-center gap-4 mb-16">
        <h1 className="text-3xl font-bold my-10 mb-0">Hello, I'm Gabi</h1>
        <p className="text-lg font-light">
          A passionate web developer focused on creating elegant solutions
        </p>
      </header>

      {/* About Section */}
      <section className="w-full max-w-2xl mb-16">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-base">
          I architect sophisticated digital solutions that enhance quality and
          accessibility, embodying a commitment to transformative technological
          innovation.
        </p>
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

      {/* Footer */}
      {/* <footer className="mt-20 text-sm text-gray-600 dark:text-gray-400">
        © 2024 Gabi. All rights reserved.
      </footer> */}
    </div>
  );
}
