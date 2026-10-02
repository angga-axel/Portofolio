import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/about";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        {/* =========================
            HERO
        ========================== */}
        <Hero />

        {/* =========================
            ABOUT / EXPERIENCE
        ========================== */}
        <About />

        {/* =========================
            PROJECTS / ORGANIZATION
        ========================== */}
        <Projects />

        {/* =========================
            SKILLS
        ========================== */}
        <Skills />

        {/* =========================
            CERTIFICATES
        ========================== */}
        <Certificates />

        {/* =========================
            CONTACT
        ========================== */}
        <Contact />
      </main>
    </>
  );
}

export default App;