import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { FiArrowDown, FiArrowDownRight, FiArrowUpRight, FiCode } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import profile from "../../assets/RafaelAzevedoHitech.webp";
import { SocialLinks } from "../../components/SocialLinks";
import { Reveal } from "../../components/Reveal";

export const Hero = () => {
  const { t } = useTranslation();
  const photoRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 100, damping: 20 });

  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid container">
        <Reveal className="hero-copy">
          <div className="hero-intro"><span className="tiny-cross" aria-hidden="true">✳</span><span className="eyebrow">RAFAEL AZEVEDO <span className="intro-separator">/</span> FULL STACK ENGINEER</span></div>
          <h1>{t("design.heroLineOne")}<br /><span className="outline-text">{t("design.heroLineTwo")}</span><br /><span className="accent-text">{t("design.heroLineThree")}<span className="hero-period">.</span></span></h1>
          <p className="hero-description">{t("design.heroDescription")}</p>
          <div className="hero-buttons"><a className="button button-primary" href="#projects">{t("design.exploreProjects")}<FiArrowUpRight /></a>
            <a className="text-link" href="#about">{t("design.meetMe")}<FiArrowDownRight /></a></div>
          <div className="hero-social"><SocialLinks /><span className="mono">{t("design.based")}</span></div>
        </Reveal>
        <Reveal className="hero-visual" delay={0.15}>
          <div className="visual-coordinate mono" aria-hidden="true">&lt;developer /&gt;<span>EST. 2021</span></div>
          <motion.div ref={photoRef} className="portrait-frame" style={{ rotateX, rotateY }}
            onPointerMove={(event) => {
              if (reducedMotion || event.pointerType !== "mouse") return;
              const bounds = event.currentTarget.getBoundingClientRect();
              x.set((event.clientX - bounds.left) / bounds.width - 0.5);
              y.set((event.clientY - bounds.top) / bounds.height - 0.5);
            }} onPointerLeave={() => { x.set(0); y.set(0); }}>
            <img src={profile} width="1024" height="1536" alt={t("design.portraitAlt")} fetchPriority="high" />
            <div className="portrait-overlay" />
            <div className="portrait-grid" aria-hidden="true" />
            <span className="portrait-tag mono">RA. / FULL STACK</span>
            <span className="portrait-caption">{t("design.portraitCaption")}<FiArrowUpRight /></span>
          </motion.div>
          <div className="availability"><span className="status-dot" />{t("design.available")}</div>
          <div className="code-note" aria-hidden="true"><div className="code-note-top"><span /><span /><span /><FiCode /></div><code><span>const</span> developer = {'{'}<br />&nbsp; name: <em>'Rafael'</em>,<br />&nbsp; focus: <em>'real impact'</em><br />{'}'};</code></div>
          <div className="orbit-badge" aria-hidden="true"><svg viewBox="0 0 120 120"><defs><path id="orbit" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" /></defs><text><textPath href="#orbit" textLength="276">DESIGN · CODE · BUILD · REPEAT · </textPath></text></svg><FiArrowUpRight /></div>
        </Reveal>
      </div>
      <Reveal className="hero-bottom container">
        <div className="hero-stats">
          {[['5+', 'statsExperience'], ['15+', 'statsProjects'], ['10+', 'statsClients']].map(([number, label]) => <div className="hero-stat" key={label}><strong>{number}</strong><span>{t(`about.${label}`)}</span></div>)}
        </div>
        <a className="scroll-cue mono" href="#about">{t("design.scroll")}<span><FiArrowDown /></span></a>
      </Reveal>
      <div className="tech-marquee" aria-label="React, TypeScript, Node.js, Vue.js, .NET, AWS, React Native">
        <div className="marquee-track" aria-hidden="true">{[0, 1].map((copy) => <div className="marquee-set" key={copy}>{['REACT', 'TYPESCRIPT', 'NODE.JS', 'VUE.JS', '.NET', 'AWS', 'REACT NATIVE'].map((tech) => <span key={tech}>{tech}<span>✳</span></span>)}</div>)}</div>
      </div>
    </section>
  );
};
