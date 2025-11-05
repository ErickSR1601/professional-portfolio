import React from "react";
import "../Styles/AboutMe.css";
import {
  FaUser,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";
import Photo from "../Assets/Profile/Photo.webp";
import { useTranslation } from "react-i18next";

function AboutMe() {
  const { t } = useTranslation();

  return (
    <section className="about-me-section" id="about-me">
      <h2 className="about-me-title">
        <FaUser className="title-icon" /> {t("about.title")}
      </h2>

      <div className="about-me-container">
        <div className="card about-me-card">
          <div className="imgBx">
            <img src={Photo} alt="Erick Solis" />
          </div>
          <div className="details">
            <h2>
              {t("about.name")}
              <br />
              <span>{t("about.role")}</span>
            </h2>
          </div>
        </div>

        <div className="about-me-text">
          <p>{t("about.description")}</p>

          {/* Redes sociales */}
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/ericksolisr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/ErickSR1601"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a href="mailto:dev.ericksr.16@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
            <a href="" download aria-label="Download CV">
              <FaFileDownload />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
