import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-20 px-4 sm:px-6 lg:px-12 bg-gradient-to-tr from-[#1f1c2c] via-[#928dab] to-[#1f1c2c] text-white"
    >
      {/* Heading */}
      <motion.div
        className="flex flex-col items-center text-center gap-2 mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <FaPaperPlane className="text-3xl text-purple-300" />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Get in Touch
        </h2>
        <p className="text-base sm:text-lg text-gray-200 max-w-2xl mt-2">
          Let’s build something amazing together. Contact me for opportunities
          or collaborations!
        </p>
      </motion.div>

      {/* Contact Info & Form */}
      <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
        {/* Contact Info */}
        <motion.div
          className="w-full lg:w-1/2 space-y-6 bg-white/10 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-purple-400 text-xl" />
            <a href="mailto:aaditiyadav29@gmail.com" className="underline">
              aaditiyadav29@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-purple-400 text-xl" />
            <span>+91 9960546104</span>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-purple-400 text-xl" />
            <span>Wakad, Pune, Maharashtra</span>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={(e) => e.preventDefault()}
          className="w-full lg:w-1/2 bg-white/10 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-2xl shadow-xl space-y-4"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all"
          >
            ✉️ Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
