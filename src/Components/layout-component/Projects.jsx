import { useEffect, useState } from "react";
import { FaGlobe, FaCode } from "react-icons/fa";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://mocki.io/v1/6b0bfb35-b6ad-43e3-b32e-4d33055fcaf0")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="bg-black text-white py-12 px-4 md:px-10">
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center px-4 sm:px-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#1f1f1f] text-white rounded-xl p-4 shadow-md w-full max-w-xs mx-auto hover:scale-105 hover:shadow-cyan-500/50 transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-md w-full h-40 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
            <div className="text-sm text-gray-400 mb-4 capitalize">{project.category}</div>

            <div className="flex items-center justify-between text-sm">
              <a
                href={`https://${project.demoUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:underline hover:shadow-[0_0_8px_2px_rgba(6,182,212,0.5)] hover:scale-105 transition duration-300 ease-in-out"
              >
                <FaGlobe /> Website
              </a>
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:underline hover:shadow-[0_0_8px_2px_rgba(6,182,212,0.5)] hover:scale-105 transition duration-300 ease-in-out"
              >
                <FaCode /> Source
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
