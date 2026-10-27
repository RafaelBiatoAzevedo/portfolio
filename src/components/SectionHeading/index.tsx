import { useTranslation } from "react-i18next";

interface SectionHeadingProps {
  number: string;
  label: string;
  title: string;
  accent: string;
  description?: string;
}

export function SectionHeading({ number, label, title, accent, description }: SectionHeadingProps) {
  const { t } = useTranslation();
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow"><span className="section-number">{number}</span>{t(label)}</span>
        <h2>{t(title)} <span>{t(accent)}</span></h2>
      </div>
      {description && <p>{t(description)}</p>}
    </div>
  );
}
