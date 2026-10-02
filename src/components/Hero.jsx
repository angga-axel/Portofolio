import { motion } from "framer-motion";
import { useRef, useState } from "react";

import profileImage from "../assets/hero.png";
import profileImage2 from "../assets/hero-2.png";
import heroBackground from "../assets/hero-bg.mp4";

import "./hero.css";

/* =====================================================
   GITHUB PAGES BASE PATH
   Aman untuk:
   - localhost
   - npm run dev
   - GitHub Pages /Portofolio/
===================================================== */

const BASE = import.meta.env.BASE_URL;

export default function Hero() {
  /* =====================================================
     PROFILE LENS
  ===================================================== */

  const profileFrameRef = useRef(null);
  const lensFrameRef = useRef(null);

  const [lensActive, setLensActive] = useState(false);

  /* =====================================================
     UPDATE LENS POSITION
     OPTIMIZED

     Tidak menggunakan setState untuk posisi lens.
     CSS variable diubah langsung sehingga Hero tidak
     melakukan re-render setiap mouse bergerak.
  ===================================================== */

  const updateLensPosition = (event) => {
    const frame = profileFrameRef.current;

    if (!frame) return;

    if (lensFrameRef.current) {
      cancelAnimationFrame(lensFrameRef.current);
    }

    lensFrameRef.current = requestAnimationFrame(() => {
      const rect = frame.getBoundingClientRect();

      let x =
        ((event.clientX - rect.left) / rect.width) * 100;

      let y =
        ((event.clientY - rect.top) / rect.height) * 100;

      /* =================================================
         BATASI LENS AGAR TETAP DI DALAM FRAME
      ================================================= */

      const lensSize = 10;

      x = Math.max(
        lensSize,
        Math.min(100 - lensSize, x)
      );

      y = Math.max(
        lensSize,
        Math.min(100 - lensSize, y)
      );

      /* =================================================
         UPDATE CSS VARIABLE LANGSUNG
      ================================================= */

      frame.style.setProperty(
        "--lens-x",
        `${x}%`
      );

      frame.style.setProperty(
        "--lens-y",
        `${y}%`
      );
    });
  };

  /* =====================================================
     POINTER ENTER
  ===================================================== */

  const handlePointerEnter = (event) => {
    if (event.pointerType === "mouse") {
      setLensActive(true);

      updateLensPosition(event);
    }
  };

  /* =====================================================
     POINTER MOVE
  ===================================================== */

  const handlePointerMove = (event) => {
    updateLensPosition(event);

    if (!lensActive) {
      setLensActive(true);
    }
  };

  /* =====================================================
     POINTER DOWN
     TOUCHSCREEN
  ===================================================== */

  const handlePointerDown = (event) => {
    const frame = profileFrameRef.current;

    if (frame) {
      try {
        frame.setPointerCapture(event.pointerId);
      } catch {
        // Browser tertentu tidak membutuhkan pointer capture
      }
    }

    updateLensPosition(event);

    setLensActive(true);
  };

  /* =====================================================
     POINTER UP
  ===================================================== */

  const handlePointerUp = (event) => {
    if (event.pointerType !== "mouse") {
      setLensActive(false);
    }

    const frame = profileFrameRef.current;

    if (frame) {
      try {
        frame.releasePointerCapture(event.pointerId);
      } catch {
        // Aman jika browser tidak mendukung
      }
    }
  };

  /* =====================================================
     POINTER CANCEL
  ===================================================== */

  const handlePointerCancel = () => {
    setLensActive(false);
  };

  /* =====================================================
     POINTER LEAVE
  ===================================================== */

  const handlePointerLeave = (event) => {
    if (event.pointerType === "mouse") {
      setLensActive(false);
    }
  };

  /* =====================================================
     CLEANUP ANIMATION FRAME
  ===================================================== */

  const cleanupLens = () => {
    if (lensFrameRef.current) {
      cancelAnimationFrame(lensFrameRef.current);

      lensFrameRef.current = null;
    }
  };

  /* =====================================================
     RENDER
  ===================================================== */

  return (
    <section
      className="hero"
      id="home"
    >

      {/* =================================================
          VIDEO BACKGROUND
      ================================================= */}

      <div className="hero-video-bg">

        <video
          src={heroBackground}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />

      </div>

      {/* =================================================
          VIDEO READABILITY
      ================================================= */}

      <div className="video-color-layer" />

      <div className="video-left-readable" />

      <div className="video-bottom-readable" />

      {/* =================================================
          ATMOSPHERE
      ================================================= */}

      <div className="hero-glow hero-glow-left" />

      <div className="hero-glow hero-glow-right" />

      <div className="hero-glow hero-glow-center" />

      <div className="hero-grid" />

      <div className="hero-vignette" />

      <div className="hero-noise" />

      {/* =================================================
          TOP LINE
      ================================================= */}

      <div className="hero-top-line">

        <span />
        <span />
        <span />

      </div>

      {/* =================================================
          LEFT CONTENT
      ================================================= */}

      <motion.div
        className="hero-content"

        initial={{
          opacity: 0,
          x: -35,
        }}

        animate={{
          opacity: 1,
          x: 0,
        }}

        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >

        {/* =================================================
            STATUS
        ================================================= */}

        <div className="hero-status">

          <span className="status-dot" />

          <span className="status-line" />

          <span className="status-code" />

        </div>

        {/* =================================================
            HELLO
        ================================================= */}

        <p className="hero-small">
          HELLO, I'M
        </p>

        {/* =================================================
            NAME
        ================================================= */}

        <h1 className="hero-name">

          <span className="name-line">
            MUHAMMAD ICHWAN
          </span>

          <span className="name-line name-line-main">
            DAWAN ANGGA
          </span>

          <span className="name-line name-line-main">
            RAMADHAN
          </span>

        </h1>

        {/* =================================================
            NAME UNDERLINE
        ================================================= */}

        <div className="name-decoration">

          <span className="name-decoration-main" />

          <span className="name-decoration-small" />

          <span className="name-decoration-dot" />

        </div>

        {/* =================================================
            SPECIALTIES
        ================================================= */}

        <div className="hero-specialties">

          <span className="active">
            IoT
          </span>

          <i>
            •
          </i>

          <span>
            Aplikasi
          </span>

          <i>
            •
          </i>

          <span>
            Kreativitas
          </span>

          <i>
            •
          </i>

          <span>
            Bisnis
          </span>

        </div>

        {/* =================================================
            DESCRIPTION
        ================================================= */}

        <p className="hero-description">

          Berfokus pada teknologi, pengembangan aplikasi, IoT,
          dan bisnis, dengan{" "}

          <strong>
            memadukan keterampilan teknis dan kreativitas
          </strong>{" "}

          untuk membangun solusi digital yang fungsional dan
          bernilai.

        </p>

        {/* =================================================
            BUTTONS
        ================================================= */}

        <div className="hero-buttons">

          {/* =================================================
              PROJECT
          ================================================= */}

          <a
            href="#projects"
            className="btn-primary"
          >

            <span>
              Lihat Project
            </span>

            <b>
              ↗
            </b>

          </a>

          {/* =================================================
              CV
          ================================================= */}

          <a
            href={`${BASE}CV.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >

            <span>
              View CV
            </span>

            <b>
              ↗
            </b>

          </a>

        </div>

        {/* =================================================
            CORE SKILLS
        ================================================= */}

        <div className="hero-skills">

          <span className="skill-label">
            CORE
          </span>

          <span>
            Firebase
          </span>

          <span>
            Flutter
          </span>

          <span>
            IoT
          </span>

        </div>

        {/* =================================================
            STATS
        ================================================= */}

        <div className="hero-stats">

          <div className="stat">

            <strong>
              03+
            </strong>

            <span>
              PROJECT
            </span>

          </div>

          <div className="stat-divider" />

          <div className="stat">

            <strong>
              IoT
            </strong>

            <span>
              SPECIALTY
            </span>

          </div>

          <div className="stat-divider" />

          <div className="stat">

            <strong>
              24/7
            </strong>

            <span>
              LEARNING
            </span>

          </div>

        </div>

      </motion.div>

      {/* =====================================================
          RIGHT VISUAL
      ===================================================== */}

      <motion.div
        className="hero-visual"

        initial={{
          opacity: 0,
          scale: 0.92,
          x: 30,
        }}

        animate={{
          opacity: 1,
          scale: 1,
          x: 0,
        }}

        transition={{
          duration: 1,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
      >

        {/* =================================================
            PROFILE HALOS
        ================================================= */}

        <div className="profile-halo halo-one" />

        <div className="profile-halo halo-two" />

        <div className="profile-halo halo-three" />

        {/* =================================================
            PROFILE FRAME
        ================================================= */}

        <div
          ref={profileFrameRef}

          className={`profile-frame ${
            lensActive
              ? "lens-active"
              : ""
          }`}

          style={{
            "--lens-x": "50%",
            "--lens-y": "50%",
          }}

          onPointerEnter={handlePointerEnter}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          onLostPointerCapture={cleanupLens}
        >

          {/* =================================================
              PROFILE GLOW
          ================================================= */}

          <div className="profile-glow" />

          {/* =================================================
              IMAGE UTAMA
          ================================================= */}

          <img
            src={profileImage}
            alt="Muhammad Ichwan Dawan Angga Ramadhan"
            className="profile-image"
            draggable="false"
          />

          {/* =================================================
              IMAGE REVEAL
          ================================================= */}

          <img
            src={profileImage2}
            alt=""
            aria-hidden="true"
            className="profile-image-reveal"
            draggable="false"
          />

          {/* =================================================
              LENS CIRCLE
          ================================================= */}

          <div className="profile-lens" />

          {/* =================================================
              FRAME CORNERS
          ================================================= */}

          <div className="profile-corner corner-one" />

          <div className="profile-corner corner-two" />

          <div className="profile-corner corner-three" />

          <div className="profile-corner corner-four" />

          {/* =================================================
              TECH BAR
          ================================================= */}

          <div className="profile-tech-bar">

            <span />

            <span />

            <span />

          </div>

        </div>

        {/* =================================================
            FLOATING TOP CARD
        ================================================= */}

        <motion.div
          className="floating-card card-top"

          animate={{
            y: [0, -8, 0],
          }}

          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >

          <div className="floating-icon">
            ⚡
          </div>

          <div>

            <span className="floating-label">
              SPECIALTY
            </span>

            <strong>
              IoT & Technology
            </strong>

          </div>

        </motion.div>

        {/* =================================================
            FLOATING BOTTOM CARD
        ================================================= */}

        <motion.div
          className="floating-card card-bottom"

          animate={{
            y: [0, 8, 0],
          }}

          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >

          <div className="floating-icon purple">
            ◈
          </div>

          <div>

            <span className="floating-label">
              EXPERIENCE
            </span>

            <strong>
              Creative & Business
            </strong>

          </div>

        </motion.div>

        {/* =================================================
            SYSTEM STATUS
        ================================================= */}

        <div className="system-status">

          <div className="system-dot" />

          <div>

            <span>
              SYSTEM STATUS
            </span>

            <strong>
              ONLINE
            </strong>

          </div>

          <div className="system-bars">

            <i />
            <i />
            <i />
            <i />
            <i />

          </div>

        </div>

        {/* =================================================
            VISUAL LABEL
        ================================================= */}

        <div className="visual-label">

          <span>
            PORTFOLIO
          </span>

          <strong />

        </div>

      </motion.div>

      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}

      <div className="hero-scroll">

        <span className="scroll-line" />

        <span className="scroll-text">
          SCROLL TO EXPLORE
        </span>

        <span className="scroll-arrow">
          ↓
        </span>

      </div>

    </section>
  );
}