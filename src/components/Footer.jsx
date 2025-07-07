import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import logo from "../assets/Technical-one.jpg";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-purple-900 text-white py-6 px-4 relative z-10">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo & Text */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Technical One Logo"
            className="w-10 h-10 rounded-full shadow-lg"
          />
          <span className="text-lg font-medium text-gray-300 hover:text-white transition duration-300">
            Made by{" "}
            <span className="text-purple-400 font-semibold">
              Technical One
            </span>
          </span>
        </div>

        {/* Back to Top Button */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="flex items-center gap-2 px-4 py-2 bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-200 hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          <FaArrowUp className="text-purple-600" />
          <span>Back to Top</span>
        </Link>
      </motion.div>
    </footer>
  );
};

export default Footer;
