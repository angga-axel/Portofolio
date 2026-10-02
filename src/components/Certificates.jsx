import React, { useState } from "react";
import "./certificates.css";

const BASE = import.meta.env.BASE_URL;

const certificates = [
  {
    id: 1,
    image: `${BASE}assets/certificates/cert1.jpg`,
    title: "",
  },
  {
    id: 2,
    image: `${BASE}assets/certificates/cert2.jpg`,
    title: "",
  },
  {
    id: 3,
    image: `${BASE}assets/certificates/cert3.jpg`,
    title: "",
  },
  {
    id: 4,
    image: `${BASE}assets/certificates/cert4.jpg`,
    title: "",
  },
  {
    id: 5,
    image: `${BASE}assets/certificates/cert5.jpg`,
    title: "",
  },
  {
    id: 6,
    image: `${BASE}assets/certificates/cert6.jpg`,
    title: "",
  },
  {
    id: 7,
    image: `${BASE}assets/certificates/cert7.jpg`,
    title: "",
  },
  {
    id: 8,
    image: `${BASE}assets/certificates/cert8.jpg`,
    title: "",
  },
  {
    id: 9,
    image: `${BASE}assets/certificates/cert9.jpg`,
    title: "",
  },
  {
    id: 10,
    image: `${BASE}assets/certificates/cert10.jpg`,
    title: "",
  },
  {
    id: 11,
    image: `${BASE}assets/certificates/cert11.jpg`,
    title: "",
  },
  {
    id: 12,
    image: `${BASE}assets/certificates/cert12.jpg`,
    title: "",
  },
  {
    id: 13,
    image: `${BASE}assets/certificates/cert13.jpg`,
    title: "",
  },
  {
    id: 14,
    image: `${BASE}assets/certificates/cert14.jpg`,
    title: "",
  },
  {
    id: 15,
    image: `${BASE}assets/certificates/cert15.jpg`,
    title: "",
  },
  {
    id: 16,
    image: `${BASE}assets/certificates/cert16.jpg`,
    title: "",
  },
];

export default function Certificates() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      className="certificates-section"
      id="certificates"
    >

      {/* =====================================================
          BACKGROUND EFFECTS
      ===================================================== */}

      <div className="cert-bg-glow glow-one"></div>

      <div className="cert-bg-glow glow-two"></div>


      <div className="certificates-container">


        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="certificates-header">

          <div className="cert-title-wrapper">

            <span className="cert-small-title">
              MY ACHIEVEMENTS
            </span>


            <h2>
              Certificates<span>.</span>
            </h2>


            <div className="cert-line"></div>

          </div>


          <p>
            Kumpulan sertifikat dan pencapaian yang mendukung
            perjalanan saya.
          </p>

        </div>



        {/* =====================================================
            CERTIFICATE GRID
        ===================================================== */}

        <div className="certificates-grid">


          {certificates.map((certificate, index) => (

            <div
              className="certificate-card"
              key={certificate.id}
              onClick={() => setSelected(certificate)}
              style={{
                "--delay": `${index * 0.04}s`,
              }}
            >


              {/* =================================================
                  SHINE EFFECT
              ================================================= */}

              <div className="certificate-shine"></div>


              {/* =================================================
                  GLOW BORDER
              ================================================= */}

              <div className="certificate-glow"></div>


              {/* =================================================
                  IMAGE
              ================================================= */}

              <div className="certificate-image-wrapper">

                <img
                  src={certificate.image}
                  alt={
                    certificate.title ||
                    `Certificate ${certificate.id}`
                  }
                />


                <div className="certificate-overlay">

                  <div className="view-icon">
                    <span>↗</span>
                  </div>


                  <span>
                    VIEW CERTIFICATE
                  </span>

                </div>

              </div>



              {/* =================================================
                  BOTTOM INFO
              ================================================= */}

              <div className="certificate-info">

                <span className="certificate-number">

                  {String(certificate.id).padStart(2, "0")}

                </span>


                <span className="certificate-name">

                  {certificate.title}

                </span>

              </div>


            </div>

          ))}


        </div>


      </div>



      {/* =====================================================
          LIGHTBOX
      ===================================================== */}

      {selected && (

        <div
          className="certificate-lightbox"
          onClick={() => setSelected(null)}
        >


          {/* CLOSE */}

          <button
            type="button"
            className="lightbox-close"
            onClick={() => setSelected(null)}
            aria-label="Tutup certificate"
          >
            ×
          </button>



          {/* CONTENT */}

          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >

            <img
              src={selected.image}
              alt={
                selected.title ||
                `Certificate ${selected.id}`
              }
            />


            <div className="lightbox-title">

              {selected.title}

            </div>

          </div>


        </div>

      )}

    </section>
  );
}