import { useState } from "react";
import { FiArrowDown, FiArrowUpRight, FiAward, FiDownload, FiPlus } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { courses } from "../../data/courses";
import { SectionHeading } from "../../components/SectionHeading";
import { Reveal } from "../../components/Reveal";
import { Modal } from "../../components/Modal";

type Certificate = typeof courses[number]['mainCertificate'];

export const Courses = () => {
  const { t, i18n } = useTranslation();
  const [selected, setSelected] = useState<Certificate | null>(null);
  const [expanded, setExpanded] = useState(false);
  const additional = courses.flatMap((course) => course.certificatesAdditionals);
  return (
    <section id="courses" className="section courses-section">
      <div className="container">
        <Reveal><SectionHeading number="04" label="design.continuousLearning" title="design.coursesTitle" accent="design.coursesAccent" description="design.coursesDescription" /></Reveal>
        <div className="courses-grid">{courses.map((course, index) => <Reveal className="course-card" key={course.school} delay={index * 0.1}>
          <div className="course-top"><span className="course-school"><span className="course-logo"><img src={course.logo} alt="" loading="lazy" width="36" height="36" /></span>{course.school}</span><span className="course-status"><span className="status-dot" />{t(course.status)}</span></div>
          <h3>{t(course.name)}</h3><div className="course-meta mono"><span>{t(course.startDate)} — {t(course.endDate)}</span><span>{course.qtdHours.toLocaleString(i18n.language === "pt" ? "pt-BR" : "en-US")} {t("courses.hours")}</span></div>
          <button type="button" className="certificate-preview" onClick={() => setSelected(course.mainCertificate)} aria-label={t("design.viewCertificate", { name: t(course.name) })}><img src={course.mainCertificate.image} alt={t(course.name)} width="800" height="560" loading="lazy" /><span><FiPlus />{t("design.preview")}</span></button>
          <details className="course-contents"><summary>{t("courses.subtitleTwo")}<FiPlus className="details-plus" /></summary><ul>{course.contents.map((content) => <li key={content}>{t(content)}</li>)}</ul></details>
          <div className="course-actions"><a className="text-link" href={course.mainCertificate.pdf} download><FiDownload />{t("design.downloadCertificate")}</a>{course.mainCertificate.link && <a className="credential-link" href={course.mainCertificate.link} target="_blank" rel="noopener noreferrer" aria-label={`${t("courses.buttonSecondary")} — ${t(course.name)}`}><FiArrowUpRight /></a>}</div>
        </Reveal>)}</div>
        <div className="additional-certificates"><button type="button" className="button button-outline" onClick={() => setExpanded(!expanded)} aria-expanded={expanded} aria-controls="additional-certificates"><FiAward />{t(expanded ? "design.hideCertificates" : "design.moreCertificates")}<FiArrowDown className={expanded ? 'rotated' : ''} /></button>
          <div id="additional-certificates" className="certificates-grid" hidden={!expanded}>{additional.map((certificate) => <article key={certificate.name} className="additional-certificate"><button type="button" onClick={() => setSelected(certificate)} aria-label={t("design.viewCertificate", { name: t(certificate.name) })}><img src={certificate.image} alt={t(certificate.name)} width="600" height="420" loading="lazy" /><h4>{t(certificate.name)}<FiArrowUpRight /></h4></button><div><a href={certificate.pdf} download><FiDownload />PDF</a><a href={certificate.link} target="_blank" rel="noopener noreferrer">{t("courses.buttonSecondary")}<FiArrowUpRight /></a></div></article>)}</div>
        </div>
      </div>
      {selected && <Modal title={t(selected.name)} onClose={() => setSelected(null)}><img className="certificate-full" src={selected.image} alt={t(selected.name)} /><div className="certificate-modal-footer">{selected.contents.length > 0 && <ul>{selected.contents.map((content) => <li key={content}>{t(content)}</li>)}</ul>}<div className="detail-actions"><a href={selected.pdf} download className="button button-primary"><FiDownload />{t("design.downloadCertificate")}</a>{selected.link && <a className="button button-outline" href={selected.link} target="_blank" rel="noopener noreferrer">{t("courses.buttonSecondary")}<FiArrowUpRight /></a>}</div></div></Modal>}
    </section>
  );
};
