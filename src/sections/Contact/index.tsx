import { useEffect, useRef, useState } from "react";
import { FiArrowUp, FiArrowUpRight, FiCheck, FiCopy, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { SocialLinks } from "../../components/SocialLinks";
import { Reveal } from "../../components/Reveal";

const email = 'rafaelazevedo321@gmail.com';

export const Contact = () => {
  const { t } = useTranslation();
  const [copyStatus, setCopyStatus] = useState('');
  const timeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timeout.current), []);
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(email); setCopyStatus('copied'); }
    catch { setCopyStatus('copyFailed'); }
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setCopyStatus(''), 3500);
  };
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <Reveal className="contact-panel">
          <div className="contact-panel-top"><span className="eyebrow"><span className="section-number">05</span>{t("design.nextChapter")}</span><span className="contact-available"><span className="status-dot" />{t("design.available")}</span></div>
          <div className="contact-main"><h2>{t("design.contactTitle")}<br /><span>{t("design.contactAccent")}</span></h2><a className="contact-circle" href="https://wa.me/5519990197883" target="_blank" rel="noopener noreferrer" aria-label={t("design.talkWhatsapp")}><FiArrowUpRight /></a></div>
          <div className="contact-panel-bottom"><p>{t("contact.subtitle")}</p><a href={`mailto:${email}`}>{t("design.sendEmail")}<FiArrowUpRight /></a></div>
          <span className="contact-watermark" aria-hidden="true">LET'S TALK</span>
        </Reveal>
        <div className="contact-details"><div className="contact-person"><a className="brand" href="#hero"><span className="brand-mark">ra<span>→</span></span><span className="brand-name">rafael<span>azevedo.</span></span></a><p>{t("design.footerDescription")}</p><SocialLinks /></div>
          <div className="contact-links"><span className="eyebrow">{t("nav.contact")}</span><div className="email-row"><a href={`mailto:${email}`}>{email}</a><button type="button" className="icon-button" onClick={() => void copyEmail()} aria-label={t("design.copyEmail")}>{copyStatus === 'copied' ? <FiCheck /> : <FiCopy />}</button></div><span className="copy-feedback" role="status">{copyStatus && t(`design.${copyStatus}`)}</span><a href="https://wa.me/5519990197883" target="_blank" rel="noopener noreferrer"><FaWhatsapp />(19) 99019-7883<FiArrowUpRight /></a><span className="contact-location"><FiMapPin />Mogi Guaçu, São Paulo · Brasil</span></div>
          <div className="contact-business"><span className="eyebrow">AZEVEDO DIGITAL</span><p>{t("design.businessDescription")}</p><span className="mono">CNPJ 39.324.590/0001-43</span><details><summary>{t("design.businessDetails")}</summary><p>Rua Cleonice Ap. Cruz Thielle, 350<br />Jd. Alvorada · Mogi Guaçu — SP</p><a href="mailto:azevedodigital321@gmail.com">azevedodigital321@gmail.com</a></details></div>
        </div>
        <footer className="footer"><p>© {new Date().getFullYear()} Rafael Azevedo<span> · {t("design.rights")}</span></p><span className="mono footer-made">{t("design.madeWith")}</span><a href="#hero" className="back-top">{t("design.backTop")}<FiArrowUp /></a></footer>
      </div>
    </section>
  );
};
