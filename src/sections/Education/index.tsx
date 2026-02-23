import {
  Section,
  Container,
  Content,
  EducationItem,
  Logo,
  Info,
} from "./styles";
import pucLogo from "../../assets/pucLogo.jpeg";

export const Education = () => {
  return (
    <Section id="education">
      <Container>
        <Content>
          <h2>Formação Acadêmica</h2>

          <EducationItem>
            <Logo src={pucLogo} alt="PUC Campinas" />

            <Info>
              <h3>Análise de Sistemas</h3>
              <span>PUC - Campinas</span>
              <p>2005 – 2009 • 8° semestre</p>
            </Info>
          </EducationItem>
        </Content>
      </Container>
    </Section>
  );
};
