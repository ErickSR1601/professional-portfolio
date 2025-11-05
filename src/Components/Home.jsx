import React from "react";
import "../Styles/Home.css";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";
import CV from "../Assets/Files/CV Erick Solis - Software Developer.pdf";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      <div className="profile-card" id="home">
        <div className="profile-photo" />
        <div className="profile-info">
          <h1>{t("home.name")}</h1>
          <h2>{t("home.title")}</h2>
          <p className="bio">
            {t("home.bio1")}
            <br />
            {t("home.bio2")}
            <br />
            {t("home.bio3")}
          </p>
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
            <a href={CV} download aria-label="Download CV">
              <FaFileDownload />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
