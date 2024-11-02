const Experience = () => {
  return (
    <section className="w-full max-w-2xl mt-40">
      <h2 className="text-3xl font-semibold mb-4 text-[#18ffc9]">Experience</h2>
      <p className="text-base font-normal leading-8 mb-6">
        I am currently a software engineer at the NHS 🏥
      </p>
      <div className="space-y-0">
        {/* Combined Section for Trainee and Graduate */}
        <div className="flex items-start border-l-4 border-[#1865ff] pl-4 bg-none rounded-t-lg p-4 transition-all duration-300">
          <div className="bg-[#18ffc9] h-2 w-5 md:w-2 rounded-full mt-1 mr-2"></div>
          <div className="flex-grow">
            <h3 className="font-semibold text-lg text-[#18ffc9]">NHS</h3>
            <p className="text-base leading-6 text-[#18ffc9]">
              Graduate Systems Analyst @ NHS
            </p>
            <p className="text-sm text-gray-300">2024 - Present</p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
              <li>
                Developing and maintaining complex applications across health
                organizations.
              </li>
              <li>
                Focusing on business intelligence solutions for finance staff.
              </li>
              <li>
                Also working on automations, Microsoft Power Apps, Qlik Sense,
                and Oracle applications.
              </li>
            </ul>
          </div>
        </div>

        {/* Promotion Visual Indicator */}
        <div className="flex items-start border-l-4 border-[#1865ff] pl-4 bg-none  p-4 transition-all duration-300 mt-4">
          <div className="bg-[#18ffc9] h-2 w-5 md:w-2 rounded-full mt-1 mr-2"></div>
          <div className="flex-grow">
            <h3 className="font-semibold text-lg text-[#18ffc9]">NHS</h3>
            <p className="text-base leading-6 text-[#18ffc9]">
              Trainee Systems Analyst @ NHS
            </p>
            <p className="text-sm text-gray-300">2019 - 2024</p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
              <li>Assisted in developing and supporting NHS applications.</li>
              <li>
                Collaborated with senior developers to learn system architecture
                and coding.
              </li>
              <li>
                Participated in training sessions to enhance technical skills.
              </li>
            </ul>
          </div>
        </div>

        {/* Promotion Visual Indicator */}
        <div className="flex items-start border-l-4  border-[#18ffc9] pl-4 bg-none  p-4 transition-all duration-300 ">
          <div className="bg-[#18ffc9] h-2 w-[0.6rem] md:w-2 rounded-full mt-1 mr-2"></div>
          <div className="flex-grow">
            <h3 className="font-semibold text-lg text-[#18ffc9]">DEPOT</h3>
            <p className="text-base leading-6 text-[#18ffc9]">
              Bartender @ DEPOT
            </p>
            <p className="text-sm text-gray-300">2023 - 2024</p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
              <li>Bartended at huge events & festivals.</li>
            </ul>
          </div>
        </div>
        {/* Promotion Visual Indicator */}
        <div className="flex items-start border-l-4  border-[#18ffc9] pl-4 bg-none p-4 transition-all duration-300 ">
          <div className="bg-[#18ffc9] h-2 w-[0.8rem] md:w-2 rounded-full mt-1 mr-2"></div>
          <div className="flex-grow">
            <h3 className="font-semibold text-lg text-[#18ffc9]">
              McDonald&apos;s
            </h3>
            <p className="text-base leading-6 text-[#18ffc9]">
              Team Member @ McDonald&apos;s
            </p>
            <p className="text-sm text-gray-300">2017 - 2019</p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
              <li>Served customers in a fast-paced environment.</li>
            </ul>
          </div>
        </div>
        {/* Promotion Visual Indicator */}
        <div className="flex items-start border-l-4  border-[#18ffc9] pl-4 bg-none rounded-b-lg p-4 transition-all duration-300 ">
          <div className="bg-[#18ffc9] h-2 w-[1.3rem] md:w-2 rounded-full mt-1 mr-2"></div>
          <div className="flex-grow">
            <h3 className="font-semibold text-lg text-[#18ffc9]">
              Whitchurch Golf Club
            </h3>
            <p className="text-base leading-6 text-[#18ffc9]">
              Waitress @ Whitchurch Golf Club
            </p>
            <p className="text-sm text-gray-300">2016 - 2017</p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
              <li>
                Providing excellent customer service while providing food,
                beverages and cleaning.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
