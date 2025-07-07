import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-scroll";

import faceImg from "../assets/Face-spoofing.png";
import billImg from "../assets/Electricity-bill.png";
import studentImg from "../assets/Student Management.png";
import todoImg from "../assets/Todo-app.png";

const projects = [
  {
    title: "Face Spoofing Detection System",
    description:
      "Built a system to detect face spoofing using advanced detection techniques to prevent unauthorized access.",
    image: faceImg,
  },
  {
    title: "Electricity Bill Management System",
    description:
      "Used Python, MySQL, and Tkinter to design a user-friendly electricity billing system with efficient DB management.",
    image: billImg,
  },
  {
    title: "Student Management System",
    description:
      "Built using Django and HTML/CSS/JS to manage student data and operations efficiently using MVT architecture.",
    image: studentImg,
  },
  {
    title: "To-Do Application",
    description:
      "Created a daily task management app using Django with deadline tracking and task status updates.",
    image: todoImg,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 px-4 sm:px-6 lg:px-12 bg-gradient-to-tr from-black via-gray-900 to-purple-900 text-white relative"
    >
      {/* Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold inline-block relative">
          Projects
          <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-purple-500 rounded-full animate-pulse" />
        </h2>
      </motion.div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl overflow-hidden hover:shadow-purple-500/30 transition-all duration-300 flex flex-col"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-48 object-cover rounded-t-2xl border-b border-white/10"
            />
            <div className="p-5 flex flex-col justify-between h-full">
              <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-2">
                {proj.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {proj.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scroll Down Arrow */}
      <motion.div
        className="mt-12 flex justify-center animate-bounce"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <Link to="skills" smooth={true} duration={500}>
          <FaChevronDown size={28} className="text-white hover:text-purple-300" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Projects;
