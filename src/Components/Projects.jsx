import React, { useState } from "react";
import "../Styles/Projects.css";
import { FaCode } from "react-icons/fa";
import BookPlatform from "../Assets/Projects/Book-Platform/Dashboard-1.webp";
import Explorify from "../Assets/Projects/Explorify/Home.webp";
import { useTranslation } from "react-i18next";
import ProjectModal from "./ProjectModal";

function Projects() {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);

  const projectList = [
    {
      title: t("projects.list.0.title"),
      shortDescription: t("projects.list.0.shortDescription"),
      longDescription: t("projects.list.0.longDescription"),
      mainImage: BookPlatform,
      images: [
        "/Book-Platform/Dashboard-1.webp",
        "/Book-Platform/Dashboard-2.webp",
        "/Book-Platform/Add-book.webp",
        "/Book-Platform/Login-page.webp",
      ],
      tags: ["ReactJS", "CSS3", "NodeJS", "Express", "MongoDB", "JWT"],
      liveLink: "https://book-platform-mauve.vercel.app",
      repoLink: "https://github.com/ErickSR1601/book-platform",
    },
    {
      title: t("projects.list.1.title"),
      shortDescription: t("projects.list.1.shortDescription"),
      longDescription: t("projects.list.1.longDescription"),
      mainImage: Explorify,
      images: [
        "/Explorify/Home.webp",
        "/Explorify/Article.webp",
        "/Explorify/Profile.webp",
        "/Explorify/Search.webp",
      ],
      tags: [
        "ReactJS",
        "CSS3",
        "NodeJS",
        "Express",
        "MongoDB",
        "JWT",
        "React Draft",
      ],
      liveLink: "https://explorify-psi.vercel.app",
      repoLink: "https://github.com/ErickSR1601/Explorify",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">
        <FaCode className="title-icon" /> {t("projects.title")}
      </h2>

      <div className="projects-container">
        {projectList.map((project, index) => (
          <article key={index} className="project-card">
            <img
              src={project.mainImage}
              alt={project.title}
              className="project-image"
              loading="lazy"
            />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.shortDescription}</p>

              <div className="project-buttons">
                <button
                  className="btn"
                  onClick={() => setSelectedProject(project)}
                >
                  {t("projects.buttons.viewMore")}
                </button>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  {t("projects.buttons.visitPage")}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default Projects;
