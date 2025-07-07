import { motion } from "framer-motion";
import avatar from "../assets/Aditi.jpg";
import { FaLinkedin, FaGithub, FaChevronDown } from "react-icons/fa";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
import resume from "../assets/resume.pdf";

const Home = () => {
  return (
    <section
      id="home"
      className="relative w-full bg-gradient-to-br from-black via-purple-900 to-gray-900 text-white py-16 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="absolute w-[700px] h-[700px] bg-purple-600 opacity-20 rounded-full blur-3xl -top-96 -left-64 animate-pulse" />
      <div className="absolute w-[500px] h-[500px] bg-pink-600 opacity-20 rounded-full blur-3xl -bottom-64 right-0 animate-ping" />

      {/* Content container */}
      <motion.div
        className="relative max-w-4xl mx-auto flex flex-col justify-center items-center text-center z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Avatar with glow */}
        <motion.div
          className="relative mb-6"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 blur-xl opacity-30 animate-pulse" />
          <img
            src={avatar}
            alt="Aaditi Yadav"
            className="relative w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-white object-cover shadow-xl"
          />
        </motion.div>

        {/* Name */}
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Aaditi Yadav
        </motion.h2>

        {/* Typewriter text */}
        <motion.p
          className="text-lg md:text-2xl text-purple-200 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Typewriter
            words={[
              "Entry-Level Software Engineer",
              "Python & Django Enthusiast",
              "Full Stack Developer",
              "Team Player | Critical Thinker",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1200}
          />
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="flex gap-6 mt-4 mb-8 text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="https://www.linkedin.com/in/aaditiyadav29"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transform hover:scale-110 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/aaditiyadav29"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transform hover:scale-110 transition duration-300"
          >
            <FaGithub />
          </a>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a
            href={resume}
            download
            className="px-6 py-2 bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-200 hover:scale-105 transition-all duration-300"
          >
            📄 Download Resume
          </a>

          <Link
            to="contact"
            smooth
            duration={500}
            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold rounded-full shadow-md hover:scale-105 hover:shadow-purple-500/30 transition-all duration-300 cursor-pointer"
          >
            🤝 Connect with Me
          </Link>
        </motion.div>

        {/* Scroll Down Arrow */}
        <motion.div
          className="mt-10 animate-bounce cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Link to="about" smooth={true} duration={500}>
            <FaChevronDown size={28} className="hover:text-purple-300" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
