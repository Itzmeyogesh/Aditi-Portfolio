import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaCode,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-scroll";

const navItems = [
  { id: "home", icon: <FaHome />, label: "Home" },
  { id: "about", icon: <FaUser />, label: "About" },
  { id: "projects", icon: <FaProjectDiagram />, label: "Projects" },
  { id: "skills", icon: <FaCode />, label: "Skills" },
  { id: "contact", icon: <FaEnvelope />, label: "Contact" },
];

const Sidebar = () => {
  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
      {navItems.map((item) => (
        <Link
          key={item.id}
          to={item.id}
          smooth={true}
          duration={500}
          className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 bg-white/10 hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/30 text-white text-xl transition-all duration-300 cursor-pointer backdrop-blur-md"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
