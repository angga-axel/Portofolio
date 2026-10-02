import { motion } from "framer-motion";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <span>Angga</span>
      </div>

      <div className="nav-menu">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#certificates">Certificates</a>
        <a href="#contact">Contact</a>
      </div>

      <motion.a
        href="#contact"
        className="nav-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Let's Talk
      </motion.a>
    </nav>
  );
}

export default Navbar;