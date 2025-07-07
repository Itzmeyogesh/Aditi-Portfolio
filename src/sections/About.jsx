import { motion } from "framer-motion";
import { FaUserTie, FaChevronDown, FaPython, FaCodeBranch, FaUsers } from "react-icons/fa";
import { SiDjango, SiMysql } from "react-icons/si";
import { BsLightningChargeFill } from "react-icons/bs";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-24 bg-gradient-to-tr from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex flex-col justify-center items-center text-center relative"
    >
      {/* Animated Heading with Icon */}
      <motion.div
        className="flex flex-col items-center gap-2 mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <FaUserTie className="text-4xl text-purple-400 animate-pulse" />
        <h2 className="text-4xl md:text-5xl font-bold relative inline-block">
          About Me
          <span className="absolute left-0 bottom-0 w-full h-1 bg-purple-500 rounded-full animate-pulse"></span>
        </h2>
      </motion.div>

      {/* Description Card */}
      <motion.div
        className="max-w-4xl text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-2xl shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 hover:shadow-purple-500/40 space-y-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <p>
          I'm{" "}
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="text-purple-300 font-semibold cursor-default inline-block"
          >
            Aaditi Yadav
          </motion.span>
          , a passionate{" "}
          <span className="text-purple-300 font-medium">entry-level software engineer</span> who loves building
          innovative, scalable, and real-world solutions.
        </p>

        <div className="text-left sm:text-center md:text-left">
          <p className="font-semibold text-purple-400 mb-2">🎓 Education & Core Skills:</p>
          <ul className="list-none space-y-2">
            <li className="flex items-center gap-2">
              <FaCodeBranch className="text-yellow-300" /> B.E. graduate from Savitribai Phule Pune University (2020–2024)
            </li>
            <li className="flex items-center gap-2">
              <FaPython className="text-blue-300" /> Strong command over Python and OOPs principles
            </li>
            <li className="flex items-center gap-2">
              <SiDjango className="text-green-400" /> Experienced in Django-based full-stack web development
            </li>
            <li className="flex items-center gap-2">
              <SiMysql className="text-cyan-400" /> Skilled in MySQL and database management
            </li>
          </ul>
        </div>

        <div className="text-left sm:text-center md:text-left">
          <p className="font-semibold text-purple-400 mt-6 mb-2">💡 Strengths:</p>
          <ul className="list-none space-y-2">
            <li className="flex items-center gap-2">
              <FaUsers className="text-pink-400" /> Collaborative team player
            </li>
            <li className="flex items-center gap-2">
              <BsLightningChargeFill className="text-yellow-400" /> Adaptable, quick learner & critical thinker
            </li>
          </ul>
        </div>

        <p className="mt-6 text-center md:text-left">
          I’m eager to contribute to a dynamic team where I can solve challenges and grow professionally every day.
        </p>
      </motion.div>

      {/* Scroll Down Arrow */}
      <motion.div
        className="absolute bottom-6 text-white animate-bounce cursor-pointer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Link to="projects" smooth={true} duration={500}>
          <FaChevronDown size={28} className="hover:text-purple-300" />
        </Link>
      </motion.div>
    </section>
  );
};

export default About;
