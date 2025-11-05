import React from "react";
import "../Styles/CertificateModal.css";
import { FaTimes } from "react-icons/fa";

function CertificateModal({ certificate, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="certificate-modal-content">
        {/* Botón cerrar */}
        <button className="close-btn" onClick={onClose}>
          <FaTimes size={22} />
        </button>

        {/* Imagen */}
        <img
          src={certificate.image}
          alt={certificate.title}
          className="certificate-modal-image"
        />

        {/* Contenido */}
        <h2 className="modal-title">{certificate.title}</h2>
        <p className="modal-description">{certificate.longDescription}</p>
      </div>
    </div>
  );
}

export default CertificateModal;
