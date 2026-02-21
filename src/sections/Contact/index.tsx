import {
  Copy,
  Container,
  Content,
  Section,
  CompanyInfo,
  BackTopButton,
  AzevedoLogo,
  InfoItem,
} from "./styles";
import { SocialLinks } from "../../components/SocialLinks";
import { FiArrowUp } from "react-icons/fi";
import azevedoLogo from "../../assets/azevedoLogo.png";
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Section id="contact">
      <BackTopButton onClick={scrollToTop}>
        <FiArrowUp />
      </BackTopButton>

      <Container>
        <Content>
          <h2>Pronto para transformar sua ideia em solução?</h2>
          <p>Estou disponível para novos projetos e oportunidades.</p>

          <SocialLinks />
        </Content>

        <CompanyInfo>
          <AzevedoLogo src={azevedoLogo} />
          <p>CNPJ: 39.324.590/0001-43</p>

          <InfoItem>
            <FaMapMarkerAlt />
            <span>
              Rua Cleonice Ap. Cruz Thielle, 350 - Jd Alvorada - Mogi Guaçu - SP
            </span>
          </InfoItem>

          <InfoItem>
            <FaEnvelope />
            <span>
              rafaelazevedo321@gmail.com | azevedodigital321@gmail.com
            </span>
          </InfoItem>

          <InfoItem>
            <FaWhatsapp />
            <span>(19) 99019-7883</span>
          </InfoItem>
        </CompanyInfo>

        <Copy>© {new Date().getFullYear()} Rafael Azevedo</Copy>
      </Container>
    </Section>
  );
};
