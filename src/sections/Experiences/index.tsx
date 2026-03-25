import {
  Section,
  Container,
  Content,
  ExperienceItem,
  Grid,
  CompanyLogo,
  ContentTop,
  ContentTitle,
  LogoWrapper,
} from "./styles";

import zokiLogo from "../../assets/zokiLogo.jpg";
import vahlisLogo from "../../assets/vahlisLogo.png";
import rsLogo from "../../assets/rsLogo.jpeg";
import restauranteLogo from "../../assets/restauranteBandeirantesLogo.jpeg";
import { useTranslation } from "react-i18next";

const experiences = [
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
    <Section id="experiences">
      <Container>
        <Content>
          <h2>{t("experiences.title")}</h2>

          <Grid>
            {experiences.map(
              (
                { companyLogo, company, responsibility, duration, bullets },
                index,
              ) => (
                <ExperienceItem key={index}>
                  <ContentTop>
                    <LogoWrapper>
                      <CompanyLogo src={companyLogo}></CompanyLogo>
                    </LogoWrapper>
                    <ContentTitle>
                      <h3>{t(company)}</h3>
                      <span>{t(responsibility)}</span>
                      <span>{t(duration)}</span>
                    </ContentTitle>
                  </ContentTop>

                  <ul>
                    {bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex}>{t(bullet)}</li>
                    ))}
                  </ul>
                </ExperienceItem>
              ),
            )}
          </Grid>
        </Content>
      </Container>
    </Section>
  );
};
