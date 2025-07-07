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
      className="min-h-screen px-6 py-20 bg-gradient-to-tr from-black via-gray-900 to-purple-900 text-white relative"
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            className="bg-white/10 backdrop-blur-lg border border-white/10 p-4 rounded-2xl shadow-xl hover:shadow-purple-500/30 transition-all duration-300 flex flex-col"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-48 object-cover rounded-xl mb-4 border border-white/10"
            />
            <h3 className="text-2xl font-semibold text-purple-300 mb-2">{proj.title}</h3>
            <p className="text-gray-300 text-base leading-relaxed">{proj.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Scroll Down Arrow */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Link to="skills" smooth={true} duration={500}>
          <FaChevronDown size={28} className="hover:text-purple-300" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Projects;
