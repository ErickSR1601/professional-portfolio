import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/Navbar.css";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "certificates", "skills", "about-me"];
      const scrollPosition = window.pageYOffset;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop - 100 &&
            scrollPosition < offsetTop + offsetHeight - 100
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          {["home", "projects", "certificates", "skills", "about-me"].map((section) => (
            <li
              key={section}
              className={`nav-item ${
                activeSection === section ? "active" : ""
              }`}
            >
              <Link
                to={section}
                smooth={true}
                duration={600}
                offset={-100}
                onClick={() => setMenuOpen(false)}
                aria-label={t(`navbar.aria.${section}`)}
              >
                {t(`navbar.${section}`)}
              </Link>
            </li>
          ))}
          <li className="nav-item">
            <a href="mailto:dev.ericksr.16@gmail.com" className="contact">
              {t("navbar.contact")}
            </a>
          </li>
        </ul>

        {/* Selector de idioma afuera del <ul> */}
        <div
          className="language-dropdown"
          onClick={() =>
            i18n.changeLanguage(i18n.language === "es" ? "en" : "es")
          }
          role="button"
          tabIndex={0}
          onKeyDown={(e) =>
            e.key === "Enter" &&
            i18n.changeLanguage(i18n.language === "es" ? "en" : "es")
          }
        >
          <img
            src={i18n.language === "es" ? "/Flags/us.svg" : "/Flags/cr.svg"}
            alt="flag"
            className="flag-icon"
          />
          <span className="language-label">
            {i18n.language === "es" ? "EN" : "ES"}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
