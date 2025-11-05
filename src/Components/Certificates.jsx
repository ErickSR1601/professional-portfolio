import React, { useState } from "react";
import "../Styles/Certificates.css";
import { useTranslation } from "react-i18next";
import CertificatesModal from "./CertificateModal";
import { AiFillSafetyCertificate } from "react-icons/ai";

import GitCertificate from "../Assets/Certifications/Certificate - Professional Git Course.jpg";
import GitHubCertificate from "../Assets/Certifications/Certificate - In depth GitHub Course.jpg";
import JSCertificate from "../Assets/Certifications/Certificate - Professional JavaScript Course.jpg";

function Certificates() {
  const { t } = useTranslation();
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      title: t("certificates.list.0.title"),
      shortDescription: t("certificates.list.0.shortDescription"),
      longDescription: t("certificates.list.0.longDescription"),
      image: GitCertificate,
    },
    {
      title: t("certificates.list.1.title"),
      shortDescription: t("certificates.list.1.shortDescription"),
      longDescription: t("certificates.list.1.longDescription"),
      image: GitHubCertificate,
    },
    {
      title: t("certificates.list.2.title"),
      shortDescription: t("certificates.list.2.shortDescription"),
      longDescription: t("certificates.list.2.longDescription"),
      image: JSCertificate,
    },
  ];

  return (
    <section className="certificates-section" id="certificates">
      <h2 className="projects-title">
        <AiFillSafetyCertificate  className="title-icon" /> {t("certificates.title")}
      </h2>

      <div className="certificates-container">
        {certificates.map((cert, index) => (
          <article key={index} className="certificate-card">
            <img
              src={cert.image}
              alt={cert.title}
              className="certificate-image"
            />
            <div className="certificate-content">
              <h3 className="certificate-title">{cert.title}</h3>
              <p className="certificate-description">{cert.shortDescription}</p>

              <div className="certificate-buttons">
                <button
                  className="btn"
                  onClick={() => setSelectedCertificate(cert)}
                >
                  {t("certificates.buttons.viewMore")}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {selectedCertificate && (
        <CertificatesModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </section>
  );
}

export default Certificates;
