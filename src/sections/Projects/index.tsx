import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowDown, FiArrowLeft, FiArrowRight, FiArrowUpRight, FiGithub } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { projects, type Project, type ProjectCategory } from "../../data/projects";
import { Modal } from "../../components/Modal";
import { SectionHeading } from "../../components/SectionHeading";
import { Reveal } from "../../components/Reveal";
import { ProjectCard } from "./ProjectCard";

type ProjectFilter = "all" | ProjectCategory;
const filters: ProjectFilter[] = ["all", "web", "mobile", "api"];

export function Projects() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<ProjectFilter>("all");
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const filtered = projects.filter((project) => filter === "all" || project.categories.includes(filter));
  const visible = filter === "all" && !showAll ? filtered.slice(0, 6) : filtered;

  const openProject = (project: Project) => {
    setImageIndex(0);
    setSelected(project);
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <Reveal>
          <SectionHeading number="02" label="design.selectedWork" title="design.projectsTitle"
            accent="design.projectsAccent" description="design.projectsDescription" />
        </Reveal>
        <Reveal className="projects-toolbar">
          <div className="project-filters" role="group" aria-label={t("design.filterProjects")}>
            {filters.map((key) => {
              const count = key === "all" ? projects.length : projects.filter((project) => project.categories.includes(key)).length;
              return (
                <button type="button" key={key} aria-pressed={filter === key} onClick={() => setFilter(key)}>
                  {t(`design.filter_${key}`)}<span>{count.toString().padStart(2, "0")}</span>
                </button>
              );
            })}
          </div>
          <span className="mono project-count" aria-live="polite">{t("design.showingProjects", { count: visible.length })}</span>
        </Reveal>
        <motion.div className="projects-grid" layout>
          <AnimatePresence>
            {visible.map((project) => (
              <ProjectCard key={project.id} project={project} index={projects.indexOf(project)}
                total={projects.length} onOpen={openProject} />
            ))}
          </AnimatePresence>
        </motion.div>
        {filter === "all" && (
          <div className="projects-more">
            <button className="button button-outline" type="button" onClick={() => setShowAll(!showAll)} aria-expanded={showAll}>
              {t(showAll ? "design.showLess" : "design.showAllProjects")}<FiArrowDown className={showAll ? "rotated" : ""} />
            </button>
            <span className="mono">{visible.length.toString().padStart(2, "0")} / {projects.length}</span>
          </div>
        )}
      </div>
      {selected && (
        <Modal title={t(selected.title)} onClose={() => setSelected(null)}>
          <div className="project-gallery">
            <img src={selected.images[imageIndex]} alt={`${t(selected.title)} — ${imageIndex + 1}`} />
            {selected.images.length > 1 && (
              <div className="gallery-controls">
                <button type="button" className="icon-button" aria-label={t("design.previousImage")}
                  onClick={() => setImageIndex((index) => (index - 1 + selected.images.length) % selected.images.length)}>
                  <FiArrowLeft />
                </button>
                <span className="mono" aria-live="polite">{imageIndex + 1} / {selected.images.length}</span>
                <button type="button" className="icon-button" aria-label={t("design.nextImage")}
                  onClick={() => setImageIndex((index) => (index + 1) % selected.images.length)}>
                  <FiArrowRight />
                </button>
              </div>
            )}
          </div>
          <div className="project-detail">
            <span className="eyebrow">{t("design.aboutProject")}</span>
            <p>{t(selected.descriptionMain)}</p>
            <ul>{selected.descriptionList.map((key) => <li key={key}>{t(key)}</li>)}</ul>
            <div className="detail-tech">
              {selected.tech.map(({ icon: Icon, name }) => <span key={name}><Icon />{name}</span>)}
            </div>
            <div className="detail-actions">
              {selected.link && (
                <a className="button button-primary" href={selected.link} target="_blank" rel="noopener noreferrer">
                  {t("design.visitProject")}<FiArrowUpRight />
                </a>
              )}
              {selected.github && (
                <a className="button button-outline" href={selected.github} target="_blank" rel="noopener noreferrer"><FiGithub />GitHub</a>
              )}
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
