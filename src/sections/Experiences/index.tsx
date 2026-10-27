import { useTranslation } from "react-i18next";
import { FiArrowDownRight, FiPlus } from "react-icons/fi";
import { SectionHeading } from "../../components/SectionHeading";
import { Reveal } from "../../components/Reveal";
import zokiLogo from "../../assets/zokiLogo.jpg";
import vahlisLogo from "../../assets/vahlisLogo.png";
import rsLogo from "../../assets/rsLogo.jpeg";
import restauranteLogo from "../../assets/restauranteBandeirantesLogo.jpeg";
import leviataLogo from "../../assets/projects/Leviata/leviataLogo.jpeg";


const experiences = [
  {
    companyLogo: leviataLogo,
    company: "experiences.experienceLeviata.company",
    responsibility: "experiences.experienceLeviata.responsibility",
    duration: "experiences.experienceLeviata.duration",
    bullets: [
      "experiences.experienceLeviata.bulletOne",
      "experiences.experienceLeviata.bulletTwo",
      "experiences.experienceLeviata.bulletThree",
    ],
  },
  {
    companyLogo: zokiLogo,
    company: "experiences.experienceZoki.company",
    responsibility: "experiences.experienceZoki.responsibility",
    duration: "experiences.experienceZoki.duration",
    bullets: [
      "experiences.experienceZoki.bulletOne",
      "experiences.experienceZoki.bulletTwo",
      "experiences.experienceZoki.bulletThree",
      "experiences.experienceZoki.bulletFour",
    ],
  },
  {
    companyLogo: vahlisLogo,
    company: "experiences.experienceVahlis.company",
    responsibility: "experiences.experienceVahlis.responsibility",
    duration: "experiences.experienceVahlis.duration",
    bullets: [
      "experiences.experienceVahlis.bulletOne",
      "experiences.experienceVahlis.bulletTwo",
      "experiences.experienceVahlis.bulletThree",
      "experiences.experienceVahlis.bulletFour",
    ],
  },
  {
    companyLogo: rsLogo,
    company: "experiences.experienceRSSolutions.company",
    responsibility: "experiences.experienceRSSolutions.responsibility",
    duration: "experiences.experienceRSSolutions.duration",
    bullets: [
      "experiences.experienceRSSolutions.bulletOne",
      "experiences.experienceRSSolutions.bulletTwo",
      "experiences.experienceRSSolutions.bulletThree",
      "experiences.experienceRSSolutions.bulletFour",
    ],
  },
  {
    companyLogo: restauranteLogo,
    company: "experiences.experienceManager.company",
    responsibility: "experiences.experienceManager.responsibility",
    duration: "experiences.experienceManager.duration",
    bullets: [
      "experiences.experienceManager.bulletOne",
      "experiences.experienceManager.bulletTwo",
      "experiences.experienceManager.bulletThree",
      "experiences.experienceManager.bulletFour",
    ],
  },
];


export const Experiences = () => {
  const { t } = useTranslation();
  return (
    <section id="experiences" className="section experience-section">
      <div className="container">
        <Reveal><SectionHeading number="03" label="nav.experiences" title="design.experienceTitle" accent="design.experienceAccent" description="design.experienceDescription" /></Reveal>
        <div className="experience-layout">
          <Reveal className="experience-aside"><FiArrowDownRight /><p>{t("design.experienceAside")}</p><span className="mono">2003 — 2026</span></Reveal>
          <div className="timeline">
            {experiences.map(({ companyLogo, company, responsibility, duration, bullets }, index) => (
              <Reveal key={company} delay={index * 0.04}>
                <details className="experience-item" open={index === 0}>
                  <summary><span className="timeline-dot" /><span className="experience-index mono">0{index + 1}</span>
                    <img src={companyLogo} width="52" height="52" alt={t(company)} loading="lazy" />
                    <span className="experience-title"><span className="mono experience-duration">{t(duration)}</span><h3>{t(company)}</h3><span>{t(responsibility)}</span></span>
                    <FiPlus className="details-plus" />
                  </summary>
                  <ul>{bullets.map((bullet) => <li key={bullet}>{t(bullet)}</li>)}</ul>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
