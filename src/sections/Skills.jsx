import { motion } from "framer-motion";
import {
  FaPython,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaChevronDown,
  FaTools,
} from "react-icons/fa";
import { SiDjango, SiMysql, SiJavascript } from "react-icons/si";
import { BsFillTerminalFill } from "react-icons/bs";
import { Link } from "react-scroll";

const skills = [
  { name: "Python", icon: <FaPython className="text-yellow-300" /> },
  { name: "Django", icon: <SiDjango className="text-green-400" /> },
  { name: "SQL", icon: <FaDatabase className="text-blue-300" /> },
  { name: "MySQL", icon: <SiMysql className="text-cyan-400" /> },
  { name: "Tkinter", icon: <BsFillTerminalFill className="text-purple-300" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "OOPs Concepts", icon: <FaReact className="text-sky-400" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full py-20 px-4 sm:px-6 lg:px-12 bg-gradient-to-tr from-gray-900 via-black to-purple-900 text-white flex flex-col items-center relative"
    >
      {/* Section Heading */}
      <motion.div
        className="flex flex-col items-center gap-2 mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <FaTools className="text-4xl text-purple-400 animate-pulse" />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold relative inline-block">
          Skills
          <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-purple-500 rounded-full animate-pulse" />
        </h2>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl w-full"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.1 }}
      >
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl hover:shadow-purple-500/30 transition-all duration-300 group"
            whileHover={{ scale: 1.08 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
          >
            <motion.div
              className="text-4xl mb-3 group-hover:scale-125 transition-transform"
              transition={{ duration: 0.3 }}
            >
              {skill.icon}
            </motion.div>
            <motion.span className="text-sm sm:text-base md:text-lg font-medium tracking-wide text-center">
              {skill.name}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll Down Arrow */}
      <motion.div
        className="mt-12 animate-bounce cursor-pointer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Link to="contact" smooth={true} duration={500}>
          <FaChevronDown size={28} className="hover:text-purple-300" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Skills;
