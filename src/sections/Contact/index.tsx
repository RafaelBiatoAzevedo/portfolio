import {
  Copy,
  Container,
  Content,
  Section,
  CompanyInfo,
  BackTopButton,
} from "./styles";
import { SocialLinks } from "../../components/SocialLinks";
import { FiArrowUp } from "react-icons/fi";

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
          <strong>AZEVEDO DIGITAL</strong>
          <p>CNPJ: 39.324.590/0001-43</p>
          <p>
            Rua Cleonice Ap. Cruz Thielle, 350 - Jd Alvorada - Mogi Guaçu - SP
          </p>
          <p>
            E-mail: rafaelazevedo321@gmail.com | azevedodigital321@gmail.com
          </p>
          <p>Cel: ( 19 ) 990197883</p>
        </CompanyInfo>

        <Copy>© {new Date().getFullYear()} Rafael Azevedo</Copy>
      </Container>
    </Section>
  );
};
