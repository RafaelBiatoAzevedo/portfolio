import {
  Container,
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
} from "./styles";

import { SocialLinks, SocialButton } from "./styles";

import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import profile from "../../assets/RafaelAzevedoHitech.png";

export const Hero = () => {
  return (
    <Container>
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

          <SocialLinks>
            <SocialButton
              href="https://www.linkedin.com/in/rafael-azevedo-530889195"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </SocialButton>

            <SocialButton
              href="https://github.com/RafaelBiatoAzevedo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </SocialButton>

            <SocialButton
              href="https://www.instagram.com/rafael_azevedo_55"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </SocialButton>

            <SocialButton
              href="https://wa.me/55019990197883"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </SocialButton>
          </SocialLinks>
        </Content>

        <ImageWrapper>
          <ProfileImage src={profile} alt="Rafael Azevedo" />
        </ImageWrapper>
      </Wrapper>
    </Container>
  );
};
