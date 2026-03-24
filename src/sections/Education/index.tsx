import {
  Section,
  Container,
  Content,
  EducationItem,
  Logo,
  Info,
} from "./styles";
import pucLogo from "../../assets/pucLogo.jpeg";
import { useTranslation } from "react-i18next";

export const Education = () => {
  const { t } = useTranslation();

  return (
    <Section id="education">
      <Container>
        <Content>
          <h2>{t("education.title")}</h2>

          <EducationItem>
            <Logo src={pucLogo} alt="PUC Campinas" />

            <Info>
              <h3>{t("education.educationName")}</h3>
              <span>PUC - Campinas</span>
              <p>2005 – 2009 • 8° {t("education.period")}</p>
            </Info>
          </EducationItem>
        </Content>
      </Container>
    </Section>
  );
};
