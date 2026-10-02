import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Code2,
  Cpu,
  Smartphone,
  Clapperboard,
  Lightbulb,
  Palette,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

import "./skills.css";

const skills = [
  {
    number: "01",
    title: "Bisnis",
    description:
      "Memahami proses bisnis, peluang produk, pemasaran, dan pengembangan ide menjadi sesuatu yang bernilai.",
    icon: BriefcaseBusiness,
    tag: "BUSINESS",
  },
  {
    number: "02",
    title: "Coding",
    description:
      "Membangun aplikasi dan website menggunakan teknologi modern dengan fokus pada struktur dan fungsionalitas.",
    icon: Code2,
    tag: "DEVELOPMENT",
  },
  {
    number: "03",
    title: "IoT",
    description:
      "Mengembangkan sistem IoT dengan ESP32, sensor, database realtime, monitoring, dan otomatisasi.",
    icon: Cpu,
    tag: "HARDWARE",
  },
  {
    number: "04",
    title: "Aplikasi",
    description:
      "Membuat aplikasi yang terhubung dengan database dan layanan digital dengan pengalaman pengguna yang nyaman.",
    icon: Smartphone,
    tag: "APPLICATION",
  },
  {
    number: "05",
    title: "Editing",
    description:
      "Mengolah video, visual, motion, dan konten digital agar memiliki tampilan yang menarik dan profesional.",
    icon: Clapperboard,
    tag: "CREATIVE",
  },
  {
    number: "06",
    title: "Problem Solving",
    description:
      "Menganalisis masalah, mencari akar permasalahan, dan membangun solusi yang efektif dan realistis.",
    icon: Lightbulb,
    tag: "THINKING",
  },
  {
    number: "07",
    title: "Kreativitas",
    description:
      "Mengembangkan ide baru dan menggabungkan teknologi dengan kreativitas untuk menghasilkan sesuatu yang berbeda.",
    icon: Palette,
    tag: "CREATIVE IDEA",
  },
  {
    number: "08",
    title: "Komunikasi",
    description:
      "Menyampaikan ide dengan jelas, berdiskusi dengan baik, dan membangun komunikasi yang efektif dalam bekerja sama.",
    icon: MessageCircle,
    tag: "COMMUNICATION",
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      {/* BACKGROUND */}
      <div className="skills-bg-grid" />
      <div className="skills-glow skills-glow-one" />
      <div className="skills-glow skills-glow-two" />
      <div className="skills-glow skills-glow-three" />

      <div className="skills-container">

        {/* HEADER */}
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="skills-label">
            <span className="skills-label-line" />
            <span>MY EXPERTISE</span>
            <span className="skills-label-line" />
          </div>

          <h2>
            Skills & <span>Capabilities</span>
          </h2>

          <p>
            Kombinasi teknologi, kreativitas, komunikasi, dan kemampuan
            problem solving untuk membangun project yang memiliki fungsi
            dan nilai.
          </p>
        </motion.div>

        {/* SKILLS GRID */}
        <div className="skills-grid">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.article
                className={`skill-card ${
                  index === skills.length - 1 ? "skill-card-last" : ""
                }`}
                key={skill.title}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -8,
                  transition: {
                    duration: 0.25,
                  },
                }}
              >
                {/* CARD TOP */}
                <div className="skill-card-top">
                  <span className="skill-number">
                    {skill.number}
                  </span>

                  <span className="skill-tag">
                    {skill.tag}
                  </span>
                </div>

                {/* ICON */}
                <div className="skill-icon-wrapper">
                  <div className="skill-icon-glow" />

                  <div className="skill-icon">
                    <Icon size={30} strokeWidth={1.6} />
                  </div>

                  <div className="skill-icon-ring" />
                </div>

                {/* CONTENT */}
                <div className="skill-content">
                  <h3>{skill.title}</h3>

                  <p>{skill.description}</p>
                </div>

                {/* BOTTOM */}
                <div className="skill-card-bottom">
                  <span>EXPLORE CAPABILITY</span>

                  <div className="skill-arrow">
                    <ArrowUpRight size={17} strokeWidth={2} />
                  </div>
                </div>

                {/* DECORATION */}
                <div className="skill-card-line" />
                <div className="skill-card-corner skill-corner-one" />
                <div className="skill-card-corner skill-corner-two" />
              </motion.article>
            );
          })}
        </div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          className="skills-footer"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
          <div className="skills-footer-line" />

          <div className="skills-footer-content">
            <span>BUILD</span>
            <i>•</i>
            <span>CREATE</span>
            <i>•</i>
            <span>SOLVE</span>
            <i>•</i>
            <span>COMMUNICATE</span>
            <i>•</i>
            <span>INNOVATE</span>
          </div>

          <div className="skills-footer-line" />
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;