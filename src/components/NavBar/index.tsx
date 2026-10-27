import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { savePreference } from "../../lib/preferences";

const sections = ["hero", "about", "projects", "experiences", "education", "courses", "contact"];
const desktopSections = ["about", "projects", "experiences", "courses"];

export const Navbar = ({ toggleTheme, theme }: { toggleTheme: () => void; theme: string }) => {
  const [active, setActive] = useState("hero");
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: "-15% 0px -65% 0px" });
    sections.forEach((id) => { const element = document.getElementById(id); if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const close = () => { setIsOpen(false); toggleRef.current?.focus(); };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "Tab") {
        const links = menuRef.current?.querySelectorAll<HTMLElement>("a, button");
        const last = links?.[links.length - 1];
        if (event.shiftKey && document.activeElement === toggleRef.current) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); toggleRef.current?.focus(); }
      }
    };
    const onResize = () => { if (window.innerWidth > 1100) close(); };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [isOpen]);

  const toggleLanguage = () => {
    const language = i18n.language === "pt" ? "en" : "pt";
    void i18n.changeLanguage(language);
    savePreference("portfolio-language", language);
  };

  const actions = <>
    <button type="button" className="icon-button theme-toggle" onClick={toggleTheme}
      aria-label={t(theme === "dark" ? "accessibility.activateLightTheme" : "accessibility.activateDarkTheme")}>
      {theme === "dark" ? <FiSun /> : <FiMoon />}
    </button>
    <button type="button" className="language-button" onClick={toggleLanguage} aria-label={t("accessibility.changeLanguage")}>
      <span className={i18n.language === "pt" ? "selected" : ""}>PT</span><span className="language-divider">/</span><span className={i18n.language === "en" ? "selected" : ""}>EN</span>
    </button>
  </>;

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#hero" aria-label="Rafael Azevedo" onClick={() => setIsOpen(false)}>
          <span className="brand-mark">ra<span>→</span></span>
          <span className="brand-name">rafael<span>azevedo.</span></span>
        </a>
        <nav className="desktop-nav" aria-label={t("design.navigation")}>
          {desktopSections.map((id) => <a key={id} href={`#${id}`} className={active === id ? "active" : ""} aria-current={active === id ? "location" : undefined}>{t(`nav.${id}`)}</a>)}
        </nav>
        <div className="header-actions"><div className="desktop-actions">{actions}</div>
          <a href="#contact" className="header-cta">{t("design.talk")}<FiArrowUpRight /></a>
          <button ref={toggleRef} className="icon-button menu-toggle" type="button" aria-expanded={isOpen} aria-controls="mobile-menu"
            aria-label={t(isOpen ? "accessibility.closeMenu" : "accessibility.openMenu")} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      <div ref={menuRef} id="mobile-menu" className="mobile-menu" hidden={!isOpen}>
        <nav aria-label={t("design.navigation")}>
          {sections.map((id, index) => <a key={id} href={`#${id}`} onClick={() => setIsOpen(false)} aria-current={active === id ? "location" : undefined}>
            <span className="mono">0{index + 1}</span>{t(`nav.${id}`)}<FiArrowUpRight />
          </a>)}
        </nav>
        <div className="mobile-menu-footer">{actions}<span className="mono">FULL STACK · BRASIL</span></div>
      </div>
    </header>
  );
};
