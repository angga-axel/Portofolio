import React, { useEffect, useState } from "react";
import "./Projects.css";

const projects = [
  {
    type: "image",
    number: "01",
    category: "HIMATEK",
    role: "Sie Acara",
    title: "Orientasi Mahasiswa Baru TKK",
    description:
      "Berperan sebagai Sie Acara dalam kegiatan Orientasi Mahasiswa Baru TKK, mulai dari persiapan acara, koordinasi panitia, hingga pelaksanaan kegiatan.",
    tags: ["EVENT", "ORGANIZATION"],
    images: [
      "/assets/projects/himatek-1.jpg",
      "/assets/projects/himatek-2.jpg",
    ],
  },

  {
    type: "image",
    number: "02",
    category: "EVENT",
    role: "Sie Perlengkapan",
    title: "Pengenalan Kampus di SMA",
    description:
      "Bertanggung jawab dalam persiapan dan pengelolaan kebutuhan perlengkapan untuk kegiatan pengenalan kampus di SMA.",
    tags: ["EVENT", "EQUIPMENT", "TEAMWORK"],
    images: [
      "/assets/projects/pengenalan-1.jpg",
      "/assets/projects/pengenalan-2.jpg",
    ],
  },

  {
    type: "image",
    number: "03",
    category: "INTERNET OF THINGS",
    role: "Project",
    title: "Prototype Smarthome",
    description:
      "Mengembangkan prototype Smart Home dengan memanfaatkan sensor, perangkat elektronik, dan sistem kontrol untuk melakukan monitoring serta pengendalian perangkat.",
    tags: ["IoT", "SMART HOME", "AUTOMATION"],
    images: [
      "/assets/projects/smarthome1.jpg",
      "/assets/projects/smarthome2.jpg",
      "/assets/projects/smarthome3.jpg",
      "/assets/projects/smarthome4.jpg",
    ],
  },

  {
    type: "pdf",
    number: "04",
    category: "INTERNSHIP",
    role: "Magang",
    title: "Implementasi dan Pengelolaan Aplikasi SIBUBA",
    description:
      "Dokumentasi pengalaman magang yang berfokus pada implementasi dan pengelolaan aplikasi SIBUBA.",
    tags: ["INTERNSHIP", "APPLICATION", "SIBUBA"],
    pdf: "/assets/projects/sibuba.pdf",
    pdfName: "Implementasi-dan-Pengelolaan-SIBUBA.pdf",
  },

  {
    type: "pdf",
    number: "05",
    category: "FINAL PROJECT",
    role: "Tugas Akhir",
    title:
      "Perancangan Sistem Monitoring dan Fertigasi Otomatis Tanaman Tomat Berbasis IoT",
    description:
      "Merancang sistem monitoring dan fertigasi otomatis tanaman tomat berbasis IoT menggunakan ESP32, sensor kelembapan tanah, kontrol pompa, Firebase, dan aplikasi monitoring.",
    tags: ["IoT", "ESP32", "FIREBASE", "FERTIGASI"],
    pdf: "/assets/projects/tugas-akhir.pdf",
    pdfName:
      "Tugas-Akhir-Monitoring-dan-Fertigasi-Tomat.pdf",
  },
];

function ProjectImages({ project, onOpen }) {
  return (
    <div className={`project-images count-${project.images.length}`}>
      {project.images.map((image, index) => (
        <button
          key={image}
          className="project-image"
          onClick={() => onOpen(project, index)}
        >
          <img
            src={image}
            alt={`${project.title} ${index + 1}`}
          />

          <div className="image-overlay">
            <span>VIEW</span>
            <span className="view-arrow">↗</span>
          </div>

          <span className="image-index">
            {String(index + 1).padStart(2, "0")}
          </span>
        </button>
      ))}
    </div>
  );
}

function PDFPreview({ project }) {
  return (
    <div className="pdf-preview">
      <div className="pdf-icon">
        <span>PDF</span>
      </div>

      <div className="pdf-info">
        <span>PROJECT DOCUMENTATION</span>
        <strong>PDF DOCUMENT</strong>
      </div>

      <div className="pdf-line" />
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState(null);

  const [selectedImage, setSelectedImage] =
    useState(0);

  const openGallery = (project, index) => {
    setSelectedProject(project);
    setSelectedImage(index);
  };

  const closeGallery = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    if (!selectedProject?.images) return;

    setSelectedImage(
      (prev) =>
        (prev + 1) %
        selectedProject.images.length
    );
  };

  const prevImage = () => {
    if (!selectedProject?.images) return;

    setSelectedImage(
      (prev) =>
        (prev -
          1 +
          selectedProject.images.length) %
        selectedProject.images.length
    );
  };

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyboard = (e) => {
      if (e.key === "Escape") {
        closeGallery();
      }

      if (e.key === "ArrowRight") {
        nextImage();
      }

      if (e.key === "ArrowLeft") {
        prevImage();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyboard
    );

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyboard
      );

      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <>
      <section className="projects" id="projects">
        <div className="projects-container">

          {/* HEADER */}
          <div className="projects-heading">
            <div>
              <span className="projects-label">
                MY WORK
              </span>

              <h2>
                PROJECTS<span>.</span>
              </h2>
            </div>

            <p>
              Beberapa pengalaman, project,
              kegiatan organisasi, magang, dan
              tugas yang pernah saya kerjakan.
            </p>
          </div>

          {/* PROJECT LIST */}
          <div className="projects-list">
            {projects.map((project, index) => (
              <article
                className="project-item"
                key={project.number}
                style={{
                  "--project-delay": `${index * 0.08}s`,
                }}
              >
                {/* NUMBER */}
                <div className="project-number">
                  {project.number}
                </div>

                {/* CONTENT */}
                <div className="project-content">

                  <div className="project-meta">
                    <span>
                      {project.category}
                    </span>

                    <span className="meta-dot">
                      /
                    </span>

                    <span>
                      {project.role}
                    </span>
                  </div>

                  <h3>{project.title}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* IMAGES */}
                  {project.type === "image" && (
                    <ProjectImages
                      project={project}
                      onOpen={openGallery}
                    />
                  )}

                  {/* PDF */}
                  {project.type === "pdf" && (
                    <PDFPreview project={project} />
                  )}

                  {/* BUTTONS */}
                  <div className="project-actions">

                    {project.type === "image" && (
                      <button
                        className="project-view"
                        onClick={() =>
                          openGallery(project, 0)
                        }
                      >
                        <span>VIEW PROJECT</span>
                        <strong>↗</strong>
                      </button>
                    )}

                    {project.type === "pdf" && (
                      <>
                        <a
                          href={project.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-view"
                        >
                          <span>VIEW PDF</span>
                          <strong>↗</strong>
                        </a>

                        <a
                          href={project.pdf}
                          download={project.pdfName}
                          className="project-download"
                        >
                          DOWNLOAD
                          <span>↓</span>
                        </a>
                      </>
                    )}

                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="projects-footer">
            <span>05 SELECTED PROJECTS</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>

        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedProject?.images && (
        <div
          className="project-lightbox"
          onClick={closeGallery}
        >
          <button
            className="lightbox-close"
            onClick={closeGallery}
          >
            ×
          </button>

          {selectedProject.images.length > 1 && (
            <>
              <button
                className="lightbox-prev"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
              >
                ←
              </button>

              <button
                className="lightbox-next"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
              >
                →
              </button>
            </>
          )}

          <div
            className="lightbox-content"
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <img
              src={
                selectedProject.images[
                  selectedImage
                ]
              }
              alt={selectedProject.title}
            />

            <div className="lightbox-bottom">
              <div>
                <span>
                  {selectedProject.category}
                </span>

                <strong>
                  {selectedProject.title}
                </strong>
              </div>

              <span>
                {String(
                  selectedImage + 1
                ).padStart(2, "0")}
                /
                {String(
                  selectedProject.images.length
                ).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}