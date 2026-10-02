import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import profileImage from "../assets/hero.png";
import profileImage2 from "../assets/hero-2.png";
import heroBackground from "../assets/hero-bg.mp4";

import "./hero.css";

/* =====================================================
   GITHUB PAGES BASE PATH
===================================================== */

const BASE = import.meta.env.BASE_URL;

export default function Hero() {

  /* =====================================================
     IMAGE SCANNER STATE

     false = FOTO 1
     true  = FOTO 2

     Scanner bergerak dari bawah ke atas.
  ===================================================== */

  const [showSecondImage, setShowSecondImage] =
    useState(false);

  const [scannerKey, setScannerKey] =
    useState(0);

  const [scannerRunning, setScannerRunning] =
    useState(true);

  /* =====================================================
     LOOP SCANNER

     1. Foto 1
     2. Scanner naik
     3. Foto 2 terbuka
     4. Tunggu 3 detik
     5. Scanner turun ke bawah
     6. Scanner naik lagi
     7. Foto 1 terbuka kembali
     8. Ulang
  ===================================================== */

  useEffect(() => {

    let cancelled = false;

    const runScanner = async () => {

      while (!cancelled) {

        /* =============================================
           SCANNER AKTIF
        ============================================= */

        setScannerRunning(true);

        /* =============================================
           TUNGGU SCANNER SELESAI NAIK
        ============================================= */

        await new Promise((resolve) => {
          setTimeout(resolve, 2800);
        });

        if (cancelled) return;

        /* =============================================
           FOTO BERGANTI
        ============================================= */

        setShowSecondImage((current) => !current);

        /* =============================================
           SCANNER SELESAI
        ============================================= */

        setScannerRunning(false);

        /* =============================================
           TUNGGU 3 DETIK
        ============================================= */

        await new Promise((resolve) => {
          setTimeout(resolve, 3000);
        });

        if (cancelled) return;

        /* =============================================
           RESET SCANNER
           KEMBALI KE BAWAH
        ============================================= */

        setScannerKey((current) => current + 1);

      }

    };

    runScanner();

    return () => {
      cancelled = true;
    };

  }, []);

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

        <div className="profile-frame">

          {/* =================================================
              PROFILE GLOW
          ================================================= */}

          <div className="profile-glow" />

          {/* =================================================
              FOTO 1
              SELALU DIAM DI BAWAH
          ================================================= */}

          <img
            src={profileImage}
            alt="Muhammad Ichwan Dawan Angga Ramadhan"
            className="profile-image profile-image-base"
            draggable="false"
          />

          {/* =================================================
              FOTO 2
              SELALU DIAM DI POSISI YANG SAMA

              Yang bergerak hanya MASK / SCANNER.
          ================================================= */}

          <div
            className={`profile-scan-layer ${
              showSecondImage
                ? "scan-show-second"
                : "scan-show-first"
            }`}
          >

            <img
              src={profileImage2}
              alt=""
              aria-hidden="true"
              className="profile-image-second"
              draggable="false"
            />

          </div>

          {/* =================================================
              SCANNER FRAME

              UKURAN = SAMA DENGAN FOTO
          ================================================= */}

          <motion.div
            key={scannerKey}
            className={`profile-scanner ${
              scannerRunning
                ? "scanner-running"
                : ""
            }`}

            initial={{
              clipPath:
                "inset(100% 0% 0% 0%)",
            }}

            animate={{
              clipPath:
                "inset(0% 0% 0% 0%)",
            }}

            transition={{
              duration: 2.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* =========================================
                SCANNER BORDER
            ========================================= */}

            <div className="scanner-border" />

            {/* =========================================
                SCANNER LIGHT
            ========================================= */}

            <div className="scanner-line" />

            {/* =========================================
                SCANNER GLOW
            ========================================= */}

            <div className="scanner-glow" />

          </motion.div>

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