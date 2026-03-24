import {
  Content,
  Title,
  Subtitle,
  Description,
  ButtonGroup,
  ButtonPrimary,
  ButtonSecondary,
  Greeting,
  Wrapper,
  ImageWrapper,
  ProfileImage,
  Section,
} from "./styles";

import profile from "../../assets/RafaelAzevedoHitech.png";
import { SocialLinks } from "../../components/SocialLinks";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();

  const onClickPrimary = (): void => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const onClickSecondary = (): void => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section id="hero">
      <Wrapper>
        <Content>
          <Greeting>{t("hero.greeting")}</Greeting>

          <Title>Rafael Azevedo</Title>

          <Subtitle>{t("hero.subtitle")}</Subtitle>

          <Description>{t("hero.description")}</Description>

          <ButtonGroup>
            <ButtonPrimary onClick={onClickPrimary}>
              {t("hero.buttonPrimary")}
            </ButtonPrimary>
            <ButtonSecondary onClick={onClickSecondary}>
              {t("hero.buttonSecondary")}
            </ButtonSecondary>
          </ButtonGroup>

          <SocialLinks />
        </Content>

        <ImageWrapper>
          <ProfileImage src={profile} alt="Rafael Azevedo" />
        </ImageWrapper>
      </Wrapper>
    </Section>
  );
};
