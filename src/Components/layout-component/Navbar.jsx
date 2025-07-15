import { FaRegHand } from "react-icons/fa6";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-4 md:px-24 lg:px-24 py-4 z-50 relative">
      <div className="flex items-center justify-between">
        {/* Logo with Hover Glow and Pulse */}
        <div className="relative group w-fit overflow-hidden">
          <p className="text-2xl font-bold transition-all duration-300 group-hover:shadow-cyan-500/50 group-hover:shadow-lg group-hover:animate-pulse">
            {`<Sadik/>`}
          </p>

          {/* Hover "Hello  */}
          <div
            className="absolute inset-0 flex items-center justify-center
            opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100
            transition-all duration-500 ease-in-out"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full text-base font-medium shadow-lg shadow-cyan-500/50 border border-cyan-500 hover:scale-105 transition-all duration-300"
            >
              Hello <FaRegHand />
            </Link>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/projects" className="nav-link">
            Projects
          </NavLink>
          <NavLink to="/skills" className="nav-link">
            Skills
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About Me
          </NavLink>
          <NavLink to="/contact"className="nav-link">
            Contact
          </NavLink>

          {/* GitHub Button */}
          <a
            href="https://github.com/sadikmirza4032?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-2 
            rounded-full text-base font-medium shadow-lg border border-cyan-500 
            hover:scale-109 hover:shadow-cyan-500/50 transition-all duration-300"
          >
            GitHub
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="mt-4 flex flex-col space-y-4 md:hidden">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-400"
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-400"
          >
            Projects
          </NavLink>
          <NavLink
            to="/skills"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-400"
          >
            Skills
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-400"
          >
            About Me
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-400"
          >
            Contact
          </NavLink>

          {/* Mobile GitHub Button */}
          <a
            href="https://github.com/sadikmirza4032?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-center"
          >
            Connect Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
