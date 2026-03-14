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

export const Hero = () => {
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
          <Greeting>Olá, eu sou</Greeting>

          <Title>Rafael Azevedo</Title>

          <Subtitle>
            Full Stack Engineer focado em aplicações escaláveis
          </Subtitle>

          <Description>
            5+ anos desenvolvendo aplicações web e mobile para varejo e
            automação comercial, integrando APIs, SDKs e ambientes AWS com foco
            em performance, escalabilidade e experiência do usuário.
          </Description>

          <ButtonGroup>
            <ButtonPrimary onClick={onClickPrimary}>Projetos</ButtonPrimary>
            <ButtonSecondary onClick={onClickSecondary}>
              Contato
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
