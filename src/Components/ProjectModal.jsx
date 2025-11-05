import React, { useState } from "react";
import "../Styles/ProjectModal.css";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

function ProjectModal({ project, onClose }) {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="modal-overlay">
      <div className="project-modal-content">
        {/* Botón cerrar */}
        <button className="close-btn" onClick={onClose}>
          <FaTimes size={22} />
        </button>

        {/* Carrusel */}
        <div className="carousel">
          <button className="carousel-btn left" onClick={prevImage}>
            <FaChevronLeft size={22} />
          </button>
          <img
            src={project.images[currentIndex]}
            alt={`${project.title} ${currentIndex + 1}`}
            className="carousel-image"
          />
          <button className="carousel-btn right" onClick={nextImage}>
            <FaChevronRight size={22} />
          </button>
        </div>

        {/* Contenido */}
        <h2 className="modal-title">{project.title}</h2>
        <p className="modal-description">{project.longDescription}</p>

        {/* Tecnologías */}
        <div className="modal-tags">
          {project.tags.map((tag, i) => (
            <span key={i} className="tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Botones */}
        <div className="modal-buttons">
          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <FaExternalLinkAlt size={14} /> {t("projects.buttons.visitRepo")}
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <FaExternalLinkAlt size={14} /> {t("projects.buttons.visitPage")}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
