import React, { useState } from "react";
import "./about.css";

const BASE = import.meta.env.BASE_URL;

const experiences = [
  {
    number: "01",
    period: "2022 — SEKARANG",
    title: "Seller & Produksi Produk Mandiri",
    company: "Usaha Mandiri",
    description: [
      "Memproduksi produk secara mandiri mulai dari persiapan bahan, pengerjaan, hingga produk siap dijual.",
      "Mengoperasikan gerinda tangan, gerinda duduk, bor duduk, dan mesin las sesuai kebutuhan produksi.",
      "Mengelola penjualan produk melalui platform online.",
      "Mengelola operasional usaha, termasuk produksi, pengemasan, dan penjualan.",
      "Mengembangkan produk dengan memperhatikan kualitas dan kebutuhan pelanggan.",
    ],
    tags: ["Production", "Business", "Product Development"],

    images: [
      `${BASE}assets/experience/seller-1.jpg`,
      `${BASE}assets/experience/seller-2.jpg`,
      `${BASE}assets/experience/seller-3.jpg`,
    ],
  },

  {
    number: "02",
    period: "AGUSTUS 2025 — DESEMBER 2025",
    title: "Magang — Bidang APTIKA",
    company: "Dinas Komunikasi dan Informatika Kabupaten Bondowoso",
    description: [
      "Membantu penyusunan laporan dan dokumentasi aplikasi pada Bidang APTIKA.",
      "Membuat dan menambahkan field pada website eKohort untuk mendukung integrasi dengan aplikasi SIBUBA.",
      "Melakukan survei dan observasi langsung ke puskesmas untuk mengetahui penggunaan dan kondisi implementasi SIBUBA.",
      "Berkoordinasi dengan tim APTIKA dalam pengembangan dan evaluasi sistem aplikasi.",
    ],
    tags: ["APTIKA", "Web Development", "eKohort", "SIBUBA"],

    images: [
      `${BASE}assets/experience/kominfo-1.jpg`,
      `${BASE}assets/experience/kominfo-2.jpg`,
      `${BASE}assets/experience/kominfo-3.jpg`,
    ],
  },
];

function About() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="about" id="about">
      <div className="about-wrapper">

        <div className="about-header">
          <div className="about-label">
            <span className="label-line"></span>
            EXPERIENCE
          </div>

          <h2>
            Pengalaman
            <span> Saya</span>
          </h2>

          <p>
            Pengalaman yang saya bangun melalui dunia teknologi,
            produksi, dan pengelolaan usaha secara langsung.
          </p>
        </div>

        <div className="experience-container">

          {experiences.map((experience, index) => (
            <article
              className="experience-card"
              key={experience.number}
            >

              <div className="experience-index">
                <span>{experience.number}</span>
              </div>

              <div className="experience-main">

                <div className="experience-top">

                  <span className="experience-period">
                    {experience.period}
                  </span>

                  <span className="experience-counter">
                    {String(index + 1).padStart(2, "0")} / 02
                  </span>

                </div>

                <h3>
                  {experience.title}
                </h3>

                <h4>
                  {experience.company}
                </h4>

                <div className="experience-divider"></div>

                <div className="experience-layout">

                  <div className="experience-details">

                    <div className="experience-description">

                      {experience.description.map((item, i) => (
                        <div
                          className="experience-point"
                          key={i}
                        >
                          <span className="point-dot"></span>

                          <p>
                            {item}
                          </p>
                        </div>
                      ))}

                    </div>

                    <div className="experience-tags">

                      {experience.tags.map((tag) => (
                        <span key={tag}>
                          {tag}
                        </span>
                      ))}

                    </div>

                  </div>

                  {/* ==============================
                      GALLERY
                  ============================== */}

                  <div className="experience-gallery">

                    {experience.images.map((image, i) => (
                      <button
                        type="button"
                        className="gallery-image"
                        key={image}
                        onClick={() =>
                          setSelectedImage({
                            src: image,
                            title: experience.title,
                            number: i + 1,
                          })
                        }
                        aria-label={`Buka foto ${i + 1} - ${experience.title}`}
                      >

                        <img
                          src={image}
                          alt={`${experience.title} - foto ${i + 1}`}
                        />

                        <span className="gallery-zoom">
                          ↗
                        </span>

                      </button>
                    ))}

                  </div>

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>

      {/* ==============================
          LIGHTBOX
      ============================== */}

      {selectedImage && (
        <div
          className="image-lightbox"
          onClick={() => setSelectedImage(null)}
          role="presentation"
        >

          <div
            className="lightbox-content"
            role="dialog"
            aria-modal="true"
            aria-label="Pratinjau foto pengalaman"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              type="button"
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Tutup gambar"
            >
              ×
            </button>

            <img
              src={selectedImage.src}
              alt={`${selectedImage.title} - foto ${selectedImage.number}`}
            />

            <div className="lightbox-caption">

              <span>
                {selectedImage.title}
              </span>

              <small>
                FOTO {selectedImage.number} / 3
              </small>

            </div>

          </div>

        </div>
      )}

    </section>
  );
}

export default About;