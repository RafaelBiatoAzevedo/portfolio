import { useId, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiArrowUpRight, FiCode, FiLayers, FiSmartphone, FiTarget } from "react-icons/fi";
import { SectionHeading } from "../../components/SectionHeading";
import { Reveal } from "../../components/Reveal";
import { stackGroups } from "../../data/stack";

export const About = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <Reveal><SectionHeading number="01" label="nav.about" title="design.aboutTitle" accent="design.aboutAccent" /></Reveal>
        <div className="about-grid">
          <Reveal className="about-statement"><span className="statement-symbol" aria-hidden="true">✳</span><h3>{t("design.aboutStatement")} <span>{t("design.aboutStatementAccent")}</span></h3><a className="text-link" href="https://github.com/RafaelBiatoAzevedo" target="_blank" rel="noopener noreferrer">{t("design.githubExplore")}<FiArrowUpRight /></a></Reveal>
          <Reveal className="about-narrative" delay={0.1}><p>{t("about.description")}</p>
            <div className="expertise-grid">{[
              { icon: FiCode, title: 'design.expertiseWeb', text: 'design.expertiseWebText' },
              { icon: FiSmartphone, title: 'design.expertiseMobile', text: 'design.expertiseMobileText' },
              { icon: FiLayers, title: 'design.expertiseArchitecture', text: 'design.expertiseArchitectureText' },
              { icon: FiTarget, title: 'design.expertiseBusiness', text: 'design.expertiseBusinessText' },
            ].map(({ icon: Icon, title, text }) => <div className="expertise" key={title}><Icon /><div><h4>{t(title)}</h4><p>{t(text)}</p></div></div>)}</div>
          </Reveal>
        </div>
        <Reveal className="stack-block">
          <div className="stack-header"><h3>{t("design.stackTitle")}</h3><span className="mono">{t("design.stackCaption")}</span></div>
          <div className="stack-tabs" role="tablist" aria-label={t("design.stackTitle")}>
            {stackGroups.map((group, index) => <button key={group.key} ref={(element) => { tabRefs.current[index] = element; }}
              role="tab" type="button" id={`${id}-tab-${index}`} aria-selected={selected === index} aria-controls={`${id}-panel`} tabIndex={selected === index ? 0 : -1}
              onClick={() => setSelected(index)} onKeyDown={(event) => {
                let next = index;
                if (event.key === 'ArrowRight') next = (index + 1) % stackGroups.length;
                else if (event.key === 'ArrowLeft') next = (index - 1 + stackGroups.length) % stackGroups.length;
                else if (event.key === 'Home') next = 0;
                else if (event.key === 'End') next = stackGroups.length - 1;
                else return;
                event.preventDefault(); setSelected(next); tabRefs.current[next]?.focus();
              }}>{t(group.label)}</button>)}
          </div>
          <div className="stack-panel" id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${selected}`} tabIndex={0}>
            {stackGroups[selected].items.map(({ icon: Icon, name }) => <div className="stack-item" key={name}><Icon /><span>{name}</span></div>)}
          </div>
          <div className="soft-skills">{['softSkillOne', 'softSkillTwo', 'softSkillThree', 'softSkillFour'].map((key) => <span key={key}><span aria-hidden="true">↗</span>{t(`about.${key}`)}</span>)}</div>
        </Reveal>
      </div>
    </section>
  );
};
