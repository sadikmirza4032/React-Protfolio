const MySkills = () => {
const skills = [
  {
    name: "HTML",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    color: "border-orange-500",
  },
  {
    name: "CSS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    color: "border-blue-500",
  },
  {
    name: "Bootstrap",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    color: "border-purple-500",
  },
  {
    name: "Tailwind",
    img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    color: "border-cyan-400",
  },
  {
    name: "JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "border-yellow-400",
  },
  {
    name: "React",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "border-cyan-300",
  },
  {
    name: "Redux Toolkit",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    color: "border-purple-600",
  },
  {
    name: "Node.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "border-green-500",
  },
  {
    name: "Express.js",
    img: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
    color: "border-gray-400 bg-gray-800",
  },
  {
    name: "Firebase",
    img: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
    color: "border-green-500",
  },
  {
    name: "MongoDB",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    color: "border-green-600",
  },
];


  return (
    <div className="bg-black text-white py-16 text-center">
      <h2 className="text-3xl font-bold mb-10 ">MY SKILLS</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 px-4 sm:px-8 md:px-24">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`bg-[#111827] rounded-lg border-b-4 ${skill.color} p-5 flex flex-col items-center justify-center shadow-md transform hover:scale-105 hover:shadow-cyan-500/50 transition-all duration-300 text-lg`}
          >
            <img
              src={skill.img}
              alt={skill.name}
              className="w-12 h-12 mb-3 object-contain"
            />
            <span className="text-sm font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
