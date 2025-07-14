import { FaDownload } from "react-icons/fa";
import aboutPic from "../../assets/aboutme.png"

const AboutMe = () => {
  return (
    <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-14">About Me</h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img
              src={aboutPic}
              alt="Mirza Tanvir Sadik"
              className="w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full object-cover border-4 border-cyan-500 shadow-lg hover:scale-105 transition duration-300 mx-auto md:mx-0"
            />
          </div>

          {/* About Text */}
          <div className="text-left max-w-2xl mx-auto space-y-6">
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              Hi! I'm <span className="text-green-400 font-semibold">Mirza Tanvir Sadik</span>, a passionate Frontend Developer from Bangladesh. I focus on building clean, responsive, and high-performance web applications using modern tools like{" "}
              <span className="text-blue-400 font-medium">React</span>,{" "}
              <span className="text-yellow-400 font-medium">JavaScript</span>, and{" "}
              <span className="text-cyan-400 font-medium">Tailwind CSS</span>.
            </p>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              I also work with <span className="text-purple-400 font-medium">Redux</span> for state management and build robust backend APIs using{" "}
              <span className="text-green-400 font-medium">Node.js</span> and{" "}
              <span className="text-orange-200 font-medium">Express.js</span>.
            </p>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              I enjoy solving real-world problems through code, and I’m always learning to grow as a developer. My goal is to contribute to meaningful projects and deliver smooth, user-friendly digital experiences.
            </p>

            {/* CV Download Button */}
            <div className="pt-4">
              <a
                href="/Mirza_Tanvir_Sadik_CV.pdf"
                download
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-2
                 rounded-full text-base font-medium shadow-lg border border-cyan-500 hover:scale-105
                  hover:shadow-cyan-500/50 transition-all duration-300"
              >
                <FaDownload className="text-white" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
