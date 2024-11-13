const AboutMe = () => {
  return (
    <section className="w-full max-w-2xl ">
      <h2 className="text-3xl text-white font-semibold mb-4">About Me</h2>
      <p className="text-base font-normal  leading-8 mb-10">
        I am currently seeking for Entry-level Machine Learning Engineer and Computer Vision Software Engineer positions.
        I have recently graduated with a Bachelor&apos;s of
        Science in Computer Science. My primary technologies I have been working
        with are:
      </p>
      <ul className="flex flex-wrap gap-2 md:justify-between">
        <li className="flex items-center mb-2">
          <span className="text-[#B6FFA1] mr-2">|</span> Python
        </li>
        <li className="flex items-center mb-2">
          <span className="text-[#CB9DF0] mr-2">|</span> PyTorch
        </li>
        <li className="flex items-center mb-2">
          <span className="text-[#B6FFA1] mr-2">|</span> CUDA
        </li>
        <li className="flex items-center mb-2">
          <span className="text-[#CB9DF0] mr-2">|</span> OpenCV
        </li>
        <li className="flex items-center mb-2">
          <span className="text-[#B6FFA1] mr-2">|</span> FastAPI
        </li>
        <li className="flex items-center mb-2">
          <span className="text-[#CB9DF0] mr-2">|</span> NumPy &amp; Pandas
        </li>
        <li className="flex items-center mb-2">
          <span className="text-[#B6FFA1] mr-2">|</span> AWS &amp; GCP
        </li>
      </ul>
      <p className="text-base font-normal  leading-8 mt-4">
        Outside of work, I enjoy following the advancements of science, and
        creating my own projects. I try to expand my interests in different areas of AI,
         Vision on Drones, Vision Language Models, ML Ops, and more.
      </p>
    </section>
  );
};

export default AboutMe;
