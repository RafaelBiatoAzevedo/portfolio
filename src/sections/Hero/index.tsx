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
            <ButtonPrimary>Ver Projetos</ButtonPrimary>
            <ButtonSecondary>Contato</ButtonSecondary>
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
