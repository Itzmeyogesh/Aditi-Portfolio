import Sidebar from "./components/Sidebar";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./components/Footer"; // ✅ Import Footer here

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-16 w-full">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer /> {/* ✅ Add Footer at the end */}
      </main>
    </div>
  );
}

export default App;
