import Image from "next/image";
import SDLogo from "@/app/sd.png";
import BMWLogo from "@/app/bmw.png";
import MSULogo from "@/app/msu.png";
import TFGLogo from "@/app/tfg.png";
import UMLogo from "@/app/um.png";
import ESDLogo from "@/app/esd.jpg";


const Experience = () => {
  return (
    <section className="w-full max-w-2xl mt-40">
      <h2 className="text-3xl font-semibold mb-4 text-white">Experience</h2>
      <p className="text-base font-normal leading-8 mb-6">
        I am currently working on revolutionizing US Manufcturing Industry.
      </p>
      <div className="space-y-0">
      <div className="flex items-start border-l-4 border-[#F72C5B] pl-4 bg-none rounded-t-lg p-4 transition-all duration-300">
          <div className="bg-[#F72C5B] h-2 w-2.5 rounded-full mt-1 mr-2"></div>
          <div className="flex-grow">
          <h3 className="font-semibold text-lg flex items-center">
              <span>Standard Data </span> {/* Add space after text */}
              <Image src={SDLogo} alt="Standard Data Logo" width={24} height={24} className="ml-2" /> 
            </h3>
            <p className="text-base leading-6 ">Founding Engineer</p>
            <p className="text-sm text-gray-300">Jan. 2025 - Present</p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
            <em className="italic">
            Python, PyTorch, GCP, CUDA, FastAPI, Kubernetes, Kubeflow, etc.
            </em>
            <br/>
              <li>
              Utilizing ML to systemize, optimize, and change the US manufacturing industry.
              </li>
            </ul>
          </div>
        </div>
        {/* Combined Section for Trainee and Graduate */}
        <div className="flex items-start border-l-4 border-[#83B4FF] pl-4  p-4 transition-all duration-300">
          <div className="bg-[#83B4FF] h-2 w-2 rounded-full mt-1 mr-2"></div>
          <div className="flex-grow">
          <h3 className="font-semibold text-lg flex items-center">
              <span>BMW Group </span> {/* Add space after text */}
              <Image src={BMWLogo} alt="BMW Logo" width={24} height={24} className="ml-2" />  {/* Add margin-left */}
            </h3>
            <p className="text-base leading-6 ">Innovation and Research Intern</p>
            <p className="text-sm text-gray-300">Jan. 2024 - Apr.2024</p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
            <em className="italic">
              Python, PyTorch, CUDA, AWS EC2, AWS S3, OpenCV, ONNX, FastAPI, Pandas, Matplotlib
            </em>
            <br/>
              <li>
              Created custom vehicle dataset to develop 2D vehicle recognition model for AR.
              </li>
              <li>
              Developed training and inference pipeline for vehicle recognition model.
              </li>
              <li>
              Researched and implemented 3D reconstruction &amp; segmentation models.
              </li>
              <li>
              Researched point-cloud-based 3D object recognition.
              </li>
              <li>
              Camera perspective automation in 3D scene.
              </li>
            </ul>
          </div>
        </div>

        {/* Promotion Visual Indicator */}
        <div className="flex items-start border-l-4 border-[#15B392] pl-4 bg-none  p-4 transition-all duration-300 mt-4">
          <div className="bg-[#15B392] h-2 w-2 rounded-full mt-1 mr-2"></div>
          <div className="flex-grow">
          <h3 className="font-semibold text-lg flex items-center">
              <span><a href="https://www.egr.msu.edu/~yukong/" target="_blank" rel="noopener noreferrer" className="underline italic hover:text-[#15B392]">Action Lab</a> @ MSU </span> {/* Add space after text */}
              <Image src={MSULogo} alt="MSU Logo" width={24} height={24} className="ml-2" />  {/* Add margin-left */}
            </h3>
            <h3 className="font-semibold text-lg "></h3>
            <p className="text-base leading-6 ">Research Assistant</p>
            <p className="text-sm text-gray-300">Jan. 2023 - Dec. 2023</p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
            <em className="italic">
              Python, Pytorch, Pandas, NumPy, Matplotlib, CUDA
            </em>
            <br/>
              <li>Conducted a research project advised by <a href="https://www.egr.msu.edu/~yukong/team/" target="_blank" rel="noopener noreferrer" className="underline italic hover:text-[#15B392]">Dr. Yu Kong</a>.
                <ul className="list-disc list-inside ml-6"> 
                  <li>
                  In various generative AI and biometric synthesis models.
                  </li>
                  <li>
                  In GAN, VAE, ViT, etc. in the deep fake generation/detection field.
                  </li>
                </ul>
              </li>
              <li>
              Prepared and preprocessed various datasets using CV frameworks.
              </li>
              <li>
              <a href="https://drive.google.com/drive/folders/1-0rW1a63OZBC0yHz0n3FLmOfYewlxG08?usp=sharing" target="_blank" rel="noopener noreferrer" className="underline italic hover:text-[#15B392]">Developed EDL model</a> improved vanilla CNN and ViT backbones to be capable of
              </li>
              <li>
                <ul className="list-disc list-inside ml-6">
                  Multi-label open-set problems
                  <li>
                  Uncertainty estimation in deep fake detection.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-start border-l-4 border-[#15B392] pl-4 bg-none  p-4 transition-all duration-300 mt-4">
          <div className="bg-[#15B392] h-2 w-2 rounded-full mt-1 mr-2"></div>
          <div className="flex-grow">
          <h3 className="font-semibold text-lg flex items-center">
              <span><a href="https://www.cse.msu.edu/~cse231/" target="_blank" rel="noopener noreferrer" className="underline italic hover:text-[#15B392]">CSE 231</a> @ MSU</span> {/* Add space after text */}
              <Image src={MSULogo} alt="MSU Logo" width={24} height={24} className="ml-2" />  {/* Add margin-left */}
            </h3>
            <h3 className="font-semibold text-lg "></h3>
            <p className="text-base leading-6 ">Teaching Assistant</p>
            <p className="text-sm text-gray-300">Aug. 2022 - Dec. 2023</p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
            <em className="italic">
              Python, Pycharm, Visual Studio Code, Presentation Skills, Public Speaking, Teaching
            </em>
            <br/>
              <li>
                Conducted weekly labs &amp; lectures guiding 50 students in Python.
                <ul className="list-disc list-inside ml-6">
                  <li>
                    Data Structures
                  </li> 
                  <li>
                    If-statement and Loops
                  </li>
                  <li>
                    Files and Exceptions
                  </li>
                  <li>
                    Functions and Algorithms Development
                  </li>
                  <li>
                    Classes and Object-Oriented Programming Fundamentals
                  </li>
                </ul>
              </li>
              <li>
                Proctored exams and graded projects, including one I built, to ensure student understanding.
              </li>
              <li>
                Held weekly office hours to provide additional support and help students improve their knowledge.
              </li>
            </ul>
          </div>
        </div>
        {/* Promotion Visual Indicator */}
        <div className="flex items-start border-l-4  border-[#1230AE] pl-4 bg-none  p-4 transition-all duration-300 ">
          <div className="bg-[#1230AE] h-2 w-2 rounded-full mt-1 mr-2"></div>
          <div className="flex-grow">
          <h3 className="font-semibold text-lg flex items-center">
              <span>Engineering Society of Detroit</span> {/* Add space after text */}
              <Image src={ESDLogo} alt="ESD Logo" width={24} height={24} className="ml-2" />  {/* Add margin-left */}
            </h3>
            <p className="text-base leading-6 ">Math and Computer Science Instructor</p>
            <p className="text-sm text-gray-300">Jun. 2022 - Aug. 2022</p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
            <em className="italic">
              Python, OpenCV, DJI API, DJI Tello Drone, Teaching, Presentation Skills, Public Speaking
            </em>
            <br/>
              <li>Developed &amp; taught curriculums in Algebra I/II and Computer Science/Drone Mechanics.</li>
              <li>Created educational materials and activities based on Michigan Education Standards.</li>
            </ul>
          </div>
        </div>
        {/* Promotion Visual Indicator */}
        <div className="flex items-start border-l-4  border-[#8B5DFF] pl-4 bg-none p-4 transition-all duration-300 ">
          <div className="bg-[#8B5DFF] h-2 w-2 rounded-full mt-1 mr-2"></div>
          <div className="flex-grow">
            
          <h3 className="font-semibold text-lg flex items-center">
              <span>Tech For Good </span> {/* Add space after text */}
              <Image src={TFGLogo} alt="TFG Logo" width={24} height={24} className="ml-2" />  {/* Add margin-left */}
            </h3>
            <p className="text-base leading-6 ">
              Software Engineer Intern, Project Lead
            </p>
            <p className="text-sm text-gray-300">Jun. 2021 - Aug. 2021</p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
            <em className="italic">
              Python, Firebase Firestore, FastAPI, Team Management, Project Management, Budget Management
            </em>
            <br/>
              <li>Worked on weapon detection alerting system.</li>
              <li>Developed database update automation module with Azure SQL database.</li>
              <li>Developed an authentication module for the authorities and building managements.</li>
              <li>Managed the entire weapon detection alerting AI project team of 30 members.</li>
              <li>Organized meetings and repositories of the project.</li>
              <li>All teams have met their benchmarks and achieved the final project goals.</li>
            </ul>
          </div>
        </div>
        {/* Promotion Visual Indicator */}
        <div className="flex items-start border-l-4  border-[#FFF100] pl-4 bg-none rounded-b-lg p-4 transition-all duration-300 ">
          <div className="bg-[#FFF100] h-2 w-2 rounded-full mt-1 mr-2"></div>
          <div className="flex-grow">
          <h3 className="font-semibold text-lg flex items-center">
              <span><a href="https://1cademy.com" target="_blank" rel="noopener noreferrer" className="underline italic hover:text-[#15B392]">1Cademy</a> @ University of Michigan School of Information</span> {/* Add space after text */}
              <Image src={UMLogo} alt="UM Logo" width={24} height={24} className="ml-2" />  {/* Add margin-left */}
            </h3>
            <h3 className="font-semibold text-lg "></h3>
            <p className="text-base leading-6 ">Python Research Intern</p>
            <p className="text-sm text-gray-300">May. 2021 - Aug. 2021</p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
            <em className="italic">
              Python
            </em>
            <br/>
              <li>
              Collaborated to create a web of Python nodes.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
