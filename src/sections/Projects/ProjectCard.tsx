import { useId, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiPlus } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import type { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  total: number;
  onOpen: (project: Project) => void;
}

export function ProjectCard({ project, index, total, onOpen }: ProjectCardProps) {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const technologiesId = useId();
  const extraTechnologies = project.tech.length - 4;
  const technologies = expanded ? project.tech : project.tech.slice(0, 4);
  const openLabel = t("design.openProject", { name: t(project.title) });

  return (
    <motion.article className={`project-card ${index === 0 ? "project-featured" : ""}`} layout
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.3 }}>
      <button type="button" className="project-preview" onClick={() => onOpen(project)}
        aria-label={openLabel} aria-haspopup="dialog">
        <span className="preview-meta mono">
          <span>{project.categories.map((category) => t(`design.category_${category}`)).join(" · ")}</span>
          <span>{(index + 1).toString().padStart(2, "0")} / {total}</span>
        </span>
        <span className="project-image-wrap">
          <img src={project.images[0]} alt={t(project.title)} loading="lazy" width="1000" height="650" />
        </span>
        <span className="project-open" aria-hidden="true"><FiPlus /></span>
        <span className="preview-caption mono">{t("design.viewCase")}<FiArrowUpRight /></span>
      </button>
      <div className="project-info">
        <div className="project-title-row">
          <h3><button type="button" onClick={() => onOpen(project)} aria-haspopup="dialog">{t(project.title)}</button></h3>
          <button className="project-arrow" type="button" onClick={() => onOpen(project)}
            aria-label={openLabel} aria-haspopup="dialog"><FiArrowUpRight /></button>
        </div>
        <p>{t(project.descriptionMain)}</p>
        <div className="project-tags">
          <div className="project-tech-list" id={technologiesId}>
            {technologies.map(({ name }) => <span key={name}>{name}</span>)}
          </div>
          {extraTechnologies > 0 && (
            <button type="button" className="project-tech-toggle" onClick={() => setExpanded((value) => !value)}
              aria-expanded={expanded} aria-controls={technologiesId}
              aria-label={t(expanded ? "design.hideTechnologies" : "design.showTechnologies", {
                count: extraTechnologies, name: t(project.title),
              })}>
              {expanded ? t("design.showLess") : `+${extraTechnologies}`}
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
}
