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

export const Experiences = () => {
  const experiences = [
    {
      companyLogo: zokiLogo,
      company: "Zoki Tecnologia",
      responsibility: "Desenvolvedor Full Stack Pleno",
      duration: "fev de 2025 - fev de 2026 • 1 ano 1 mês",
      bullets: [
        "Desenvolvimento full stack de aplicações web utilizando Vue.js no front-end e .NET Core no back-end",
        "Implementação de APIs REST seguras e integração com PostgreSQL, garantindo integridade e performance de dados",
        "Gestão de deploys e monitoramento em ambiente AWS, assegurando estabilidade e disponibilidade das aplicações",
        "Participação ativa no ciclo completo de desenvolvimento (análise, implementação, testes e manutenção)",
      ],
    },
    {
      companyLogo: vahlisLogo,
      company: "Santos Vahlis Group",
      responsibility: "Desenvolvedor Full Stack Pleno",
      duration: "fev de 2025 - ago de 2025 • 6 meses",
      bullets: [
        "Desenvolvimento full stack de aplicações web utilizando Vue.js no front-end e .NET Core no back-end",
        "Implementação de APIs REST seguras e integração com PostgreSQL, garantindo integridade e performance de dados",
        "Gestão de deploys e monitoramento em ambiente AWS, assegurando estabilidade e disponibilidade das aplicações",
        "Participação ativa no ciclo completo de desenvolvimento (análise, implementação, testes e manutenção)",
      ],
    },
    {
      companyLogo: rsLogo,
      company: "RS Solutions",
      responsibility: "Desenvolvedor Web e Mobile",
      duration: "mai de 2021 - nov de 2024 • 3 anos 7 meses",
      bullets: [
        "Desenvolvimento e manutenção de soluções de automação comercial voltadas ao varejo, incluindo sistemas de PDV e autoatendimento",
        "Integração com SDKs de empresas de pagamento e dispositivos físicos (balanças, impressoras, totens), assegurando comunicação eficiente e estável",
        "Implementação de soluções focadas em alta disponibilidade e confiabilidade em ambientes de operação contínua",
        "Otimização de performance e usabilidade em sistemas críticos para o fluxo de vendas",
      ],
    },
    {
      companyLogo: restauranteLogo,
      company: "Restaurante Bandeirantes",
      responsibility: "Gerente",
      duration: "jan de 2003 - jan de 2018 • 15 anos 1 meses",
      bullets: [
        "Liderança e desenvolvimento de equipe operacional, promovendo alinhamento e eficiência nos processos internos",
        "Gestão de fornecedores e insumos, assegurando abastecimento, controle de prazos e redução de desperdícios",
        "Planejamento de escalas e organização de rotinas operacionais, garantindo estabilidade e continuidade das atividades",
        "Monitoramento de estoque e conformidade com normas de higiene e segurança",
      ],
    },
  ];

  return (
    <Section id="experiences">
      <Container>
        <Content>
          <h2>Experiências</h2>

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
                      <h3>{company}</h3>
                      <span>{responsibility}</span>
                      <span>{duration}</span>
                    </ContentTitle>
                  </ContentTop>

                  <ul>
                    {bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex}>{bullet}</li>
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
