const Projects = () => {
  return (
    <section className="w-full max-w-2xl mt-40">
      <h2 className="text-3xl font-semibold mb-4 text-white">Projects</h2>
      <p className="text-base font-normal leading-8 mb-6">
      My path as a Software Engineer and AI Enthusiast has been marked by both challenges and successes.
       Here are some of the significant projects that have honed my skills and deepened 
       my understanding of technology:
      </p>
      <div className="space-y-4">
        <div className="flex items-start border-l-2 border-[#C2FFC7] pl-4">
          <div className="bg-[#C2FFC7] h-2 w-2 rounded-full mt-1 mr-2"></div>
          <div>
            <h3 className="font-semibold text-lg"><a href="https://www.github.com/suhanpark/muzik.ai" target="_blank" rel="noopener noreferrer" className="underline italic hover:text-[#15B392]">muzik.ai</a></h3>
            <p className="text-base leading-6">
            <em className="italic">
                Python, PyTorch, GCP Compute Engine, GCP Storage, ffmpeg, mido, Pandas
            </em> 
            </p>
            <li>
                Developed ML pipeline of preprocessing audio data and training music generation transformer.
              </li>
              <li>
              It scrapes YouTube videos in chosen genre (e.g., Lofi-Jazz).
              </li>
              <li>
                Then it converts each one into a .wav and .mid file to store into Google Cloud Storage (GCP).
              </li>
              <li>
                It preprocesses and tokenizes audio files automatically before training.
              </li>
              <li>
                Currently under construction.
              </li>       
          </div>
        </div>
        <div className="flex items-start border-l-2 border-[#C2FFC7] pl-4">
          <div className="bg-[#C2FFC7] h-2 w-2 rounded-full mt-1 mr-2"></div>
          <div>
            <h3 className="font-semibold text-lg"><a href="http://www.capstone.cse.msu.edu/2023-08/projects/urban-science/" target="_blank" rel="noopener noreferrer" className="underline italic hover:text-[#15B392]">Synthetic Media</a></h3>
            <p className="text-base leading-6">
            <em className="italic">
                Python, FastAPI, GPT-3.5 Turbo API, D-ID API, Firebase Realtime Database, Firebase Host Server, Angular JS, Docker
            </em>
            </p>
              <li>
                Developed an API module to control module-database connection for smoother data transfer and interaction.
              </li>
              <li>
                Created database management modules to maintain Firebase Realtime Database.
              </li>
              <li>
                Integrated backend for text-to-video generation tasks.
                <ul className="list-disc list-inside ml-6">
                  <li>
                    Data analysis package
                  </li>
                  <li>
                    T2TF (Text-to-Talking Face) Video Synthesis API
                  </li>
                  <li>
                    GPT-3.5 API
                  </li>
                </ul>
              </li>
              <li>
              Led the team by organized meetings and repositories of the project, assigning tasks, and progress checks.
              </li>
          </div>
        </div>
        <div className="flex items-start border-l-2 border-[#C2FFC7] pl-4">
          <div className="bg-[#C2FFC7] h-2 w-2 rounded-full mt-1 mr-2"></div>
          <div>
            <h3 className="font-semibold text-lg">Gun Violence Locator</h3>
            <p className="text-base leading-6">
            <em className="italic">
                Android Studio, Java, Firebase Realtime Database, Firebase Host Server, Python, Docker
            </em>
            </p>
              <li>
                Developed an app for informing the gun violence danger level in for current location.
              </li>
              <li>
                Created web scraping and Firebase Realtime Database management modules for gun violence big data.
              </li>
              <li>
                Integrated dashboard frontend for informing current danger level in the current GPS location.
              </li>
              <li>
                Integreted search functionality for users to find dnager level of the prompted location.
              </li>
          </div>
        </div>
        <div className="flex items-start border-l-2 border-[#C2FFC7] pl-4">
          <div className="bg-[#C2FFC7] h-2 w-2 rounded-full mt-1 mr-2"></div>
          <div>
            <h3 className="font-semibold text-lg"><a href="https://www.github.com/suhanpark/The-Lottery-App" target="_blank" rel="noopener noreferrer" className="underline italic hover:text-[#15B392]">The Lottery App</a></h3>
            <p className="text-base leading-6">
            <em className="italic">
              Python, FastAPI, Docker, Twilio API, Firebase Realtime Database, Firebase Host Server
            </em>
              <br/>
            </p>
            <li>
                Developed an app to find the most probable number combination for Mega Millions Lottery.
              </li>
              <li>
                The app utilizes big data collected from lotter website from 2003 to 2021.
              </li>
              <li>
                It sends the found number combinations as a SMS text message.
              </li>
          </div>
        </div>
        <div className="flex items-start border-l-2 border-[#C2FFC7] pl-4">
          <div className="bg-[#C2FFC7] h-2 w-2 rounded-full mt-1 mr-2"></div>
          <div>
            <h3 className="font-semibold text-lg">Small Side Projects</h3>
            <p className="text-base leading-6">
            <em className="italic">
              Python, Javascript, React, PyTorch, OpenCV
            </em>
            </p>
              <li>
              <a href="https://www.github.com/suhanpark/leetcode" target="_blank" rel="noopener noreferrer" className="underline italic hover:text-[#15B392]">leetcode</a>
              </li>
              <li>
              <a href="https://www.github.com/suhanpark/parking-lot-space-counter" target="_blank" rel="noopener noreferrer" className="underline italic hover:text-[#15B392]">Parking Space Counter</a>
              </li>
              <li>
              <a href="https://www.github.com/suhanpark/todo-web-app" target="_blank" rel="noopener noreferrer" className="underline italic hover:text-[#15B392]">Todo Web App</a>
              </li>
              <li>
              <a href="https://www.github.com/suhanpark/Pose-Detection" target="_blank" rel="noopener noreferrer" className="underline italic hover:text-[#15B392]">Pose Estimation</a>
              </li>
              <li>
              <a href="https://www.github.com/suhanpark/OSVC" target="_blank" rel="noopener noreferrer" className="underline italic hover:text-[#15B392]">Overspeeding Vehicle Tracker</a>
              </li>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
