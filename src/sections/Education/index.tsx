import { FiArrowUpRight, FiBookOpen } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { Reveal } from "../../components/Reveal";
import pucLogo from "../../assets/pucLogo.jpeg";

export const Education = () => {
  const { t } = useTranslation();
  return (
    <section id="education" className="education-section">
      <div className="container"><Reveal className="education-strip">
        <div className="education-label"><FiBookOpen /><span className="eyebrow">{t("education.title")}</span></div>
        <div className="education-info"><img src={pucLogo} width="56" height="56" alt="PUC Campinas" loading="lazy" /><div><h2>{t("education.educationName")}</h2><p>PUC Campinas <span>·</span> 2005 — 2009 <span>·</span> 8º {t("education.period")}</p></div></div>
        <FiArrowUpRight className="education-arrow" aria-hidden="true" />
      </Reveal></div>
    </section>
  );
};
