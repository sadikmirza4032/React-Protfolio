import {
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const ContactMe = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="bg-black text-white py-24 px-4 sm:px-6 lg:px-20 overflow-x-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">
          <span className=" text-4xl">. </span>Get in Touch
        </h2>
        <p className="text-5xl text-gray-400 font-semibold mt-8 mb-8">
          Need a developer?
        </p>
        <p className="text-gray-300 mb-12 text-md max-w-xl mx-auto">
          I'm available for developer, full-time, or collaborative projects.
          Reach out and let’s connect!
        </p>

        {/* Send Email Button */}
        <div className="mb-12">
          <a
  href="mailto:sadik.mirza4032@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Sadik,%0D%0A%0D%0AI%20am%20interested%20in%20collaborating%20with%20you%20on%20a%20project.%20Please%20get%20back%20to%20me.%0D%0A%0D%0AThanks!"
  className="inline-flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full text-base font-medium shadow-lg hover:scale-105 hover:shadow-cyan-500/50 transition-all duration-300"
>
  <FaEnvelope className="text-white" />
  Send Email
</a>
        </div>

        {/* Contact Links */}
        <div className="flex flex-wrap justify-center gap-8 text-lg">
          <a
            href="tel:+8801234567890"
            className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full text-base font-medium shadow-lg hover:scale-105 hover:shadow-cyan-500/50 transition-all duration-300"
          >
            <FaPhoneAlt /> <span>+880 1681237386</span>
          </a>

          <a
            href="https://github.com/sadikmirza4032?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 bg-black text-white px-6 py-2 rounded-full text-base font-medium shadow-lg hover:scale-105 hover:shadow-cyan-500/50 transition-all duration-300"
          >
            <FaGithub /> <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/mirzasadik4032"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2  bg-black text-white px-6 py-2 rounded-full text-base font-medium shadow-lg hover:scale-105 hover:shadow-cyan-500/50 transition-all duration-300"
          >
            <FaLinkedin /> <span>LinkedIn</span>
          </a>

          <a
            href="https://instagram.com/mirza.tanvir"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full text-base font-medium shadow-lg hover:scale-105 hover:shadow-cyan-500/50 transition-all duration-300"
          >
            <FaInstagram /> <span>Instagram</span>
          </a>
        </div>

        {/* Back to Top Button */}
        <div className="mt-16">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-2 
            rounded-full text-base font-medium shadow-lg border border-cyan-500 
            hover:scale-105 hover:shadow-cyan-500/50 transition-all duration-300"
          >
            <FaArrowUp className="text-white" />
            Back to Top
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
