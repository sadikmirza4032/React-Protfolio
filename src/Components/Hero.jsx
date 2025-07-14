
import { Link } from "react-router-dom";
import heroIcon from "../../src/assets/hero.JPG"

const Hero = () => {
  return (
    <section className="bg-black text-white py-20 px-4 w-full sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        {/* Profile Image */}
        <img
          src={heroIcon}
          alt="Mirza Tanvir Sadik"
          className="mx-auto mb-8 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 rounded-full object-cover border-4 border-cyan-500 shadow-xl hover:scale-105 transition-transform duration-300"
        />

        {/* Name and Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
          I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
            Mirza Tanvir Sadik
          </span>
          , Frontend Developer
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          I’m a React front-end developer. 
          Currently, I’m focused on building  modern and responsive web applications.
        </p>

        {/* Action Buttons with Border */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full text-base font-medium shadow-lg border border-cyan-500 hover:scale-105 hover:shadow-cyan-500/50 transition-all duration-300"
          >
            Projects
          </Link>
          <a
            href="/Mirza_Tanvir_Sadik_CV.pdf"
            download
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full text-base font-medium shadow-lg border border-cyan-500 hover:scale-105 hover:shadow-cyan-500/50 transition-all duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
