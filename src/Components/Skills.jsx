import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaJsSquare,
  FaGitAlt,
  FaTools,
  FaGithub,
} from "react-icons/fa";
import { SiFigma, SiPostman } from "react-icons/si";
import { RiComputerLine, RiReactjsFill } from "react-icons/ri";
import "../Styles/Skills.css";
import { useTranslation } from "react-i18next";

function Skills() {
  const { t } = useTranslation();

  const technicalSkills = [
    { icon: <RiReactjsFill />, name: "React.js" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <FaJsSquare />, name: "JavaScript" },
  ];

  const softwareSkills = [
    { icon: <SiFigma />, name: "Figma" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
  ];

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">
        <FaTools className="title-icon" /> {t("skills.technical")}
      </h2>
      <div className="skills-container">
        {technicalSkills.map((skill, index) => (
          <div key={index} className="skill-card" aria-label={skill.name}>
            <div className="skill-icon">{skill.icon}</div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>

      <h2 className="skills-title">
        <RiComputerLine className="title-icon" /> {t("skills.tools")}
      </h2>
      <div className="skills-container">
        {softwareSkills.map((skill, index) => (
          <div key={index} className="skill-card" aria-label={skill.name}>
            <div className="skill-icon">{skill.icon}</div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
