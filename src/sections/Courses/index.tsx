import { useState } from "react";

import {
  ActionButton,
  ActionButtons,
  Container,
  ContentsList,
  CourseCard,
  CourseLogo,
  CourseTitle,
  CourseContent,
  MainCertificateImage,
  Section,
  Title,
  CourseInfo,
  LogoWrapper,
  MainCertificate,
  ToggleWrapper,
  ToggleButton,
  ExpandableContainer,
  Grid,
  FeaturedLeft,
  FeaturedRight,
  CertificateList,
  FeaturedCard,
  CertificateImage,
} from "./styles";

import { FaDownload, FaExternalLinkAlt } from "react-icons/fa";

import trybeLogo from "../../assets/courses/trybeIcon.png";

//Certificates
import mainCertificateImage from "../../assets/certificates/MainCertificate.png";
import computerScienceCertificateImage from "../../assets/certificates/ComputerScience.png";
import backEndCertificateImage from "../../assets/certificates/BackEnd.png";
import frontEndCertificateImage from "../../assets/certificates/FrontEnd.png";
import fundamentalsCertificateImage from "../../assets/certificates/Fundamentals.png";

//PDFs
import mainCertificatePdf from "../../assets/certificates/pdf/MainCertificate.pdf";
import computerScienceCertificatePdf from "../../assets/certificates/pdf/ComputerScience.pdf";
import backEndCertificatePdf from "../../assets/certificates/pdf/BackEnd.pdf";
import frontEndCertificatePdf from "../../assets/certificates/pdf/FrontEnd.pdf";
import fundamentalsCertificatePdf from "../../assets/certificates/pdf/Fundamentals.pdf";

export const Courses = () => {
  const [isOpen, setIsOpen] = useState(false);

  const courses = [
    {
      school: "Trybe",
      logo: trybeLogo,
      name: "Desenvolvimento Web Full Stack",
      startDate: "Nov 2020",
      endDate: "Nov 2021",
      qtdHours: 1500,
      status: "Concluído",
      contents: [
        "Fundamentos do Desenvolvimento Web",
        "Desenvolvimento Front-End",
        "Desenvolvimento Back-End",
        "Ciência da Computação",
        "Soft Skills",
      ],
      mainCertificate: {
        image: mainCertificateImage,
        name: "Desenvolvimento Web",
        link: "https://www.credential.net/b41dae45-7403-476c-93a6-f11209ef4474#acc.hkaCTcv9",
        pdf: mainCertificatePdf,
        contents: [
          "Fundamentos do Desenvolvimento Web",
          "Desenvolvimento Front-End",
          "Desenvolvimento Back-End",
          "Ciência da Computação",
          "Soft Skills",
        ],
      },

      certificatesAdditionals: [
        {
          image: computerScienceCertificateImage,
          name: "Ciência da Computação",
          link: "https://www.credential.net/2c4b6b78-67b2-4a93-b11a-f7a09e0104d4#acc.skMBFx2T",
          pdf: computerScienceCertificatePdf,
          contents: [
            "Introdução à Python",
            "Programação Orientada a Objetos (POO)",
            "Redes e Raspagem de dados",
            "Algoritmos",
            "Estritura de Dados I: Arrays, Hashmaps e Sets",
            "Estrutura de Dados II: Listas, Filas and Pilhas",
          ],
        },
        {
          image: backEndCertificateImage,
          name: "Desenvolvimento Back-End",
          link: "https://www.credential.net/93d37420-a5d5-4525-9597-f9d4dce703f0#acc.4uVKwoMm",
          pdf: backEndCertificatePdf,
          contents: [
            "Introdução à SQL, funções SQL e JOINs",
            "Normalização e Modelagem de Banco de Dados",
            "Introdução a MongoDB",
            "MongoDB - Upadates simples e complexo",
            "MongoDB - Aggregation Framework",
            "Desenvolvimento Web com NodeJs",
            "NodeJs - Arquitetura MSC, Rest e Restful",
            "Autenticação e Upload de arquivos",
            "Deployment",
            "Arquitetura SOLID e ORM",
            "Sockets",
          ],
        },
        {
          image: frontEndCertificateImage,
          name: "Desenvolvimento Front-End",
          link: "https://www.credential.net/ac89d79b-ddd2-484a-87b0-4697f37ff20a#acc.NpCyBrFc",
          pdf: frontEndCertificatePdf,
          contents: [
            "Introdução a React",
            "Estado dos componentes, Eventos e Formulários com React",
            "Ciclo de vida dos componentes e React Router",
            "Metodologias ágeis",
            "Testes automatizados com React Testing Library(RTL)",
            "Gerenciamento de estado com Redux",
            "Context API e React Hooks",
          ],
        },
        {
          image: fundamentalsCertificateImage,
          name: "Fundamentos do Desenvolvimento Web",
          link: "https://www.credential.net/fd1a5519-756f-48da-9d64-d449f0eaf0f7#acc.b4VLXrdH",
          pdf: fundamentalsCertificatePdf,
          contents: [
            "Unix e Bash",
            "Git, GitHub e internet",
            "Introdução a HTML e CSS",
            "JavaScript - DOM, Eventos e Web Storage",
            "HTML e CSS - Formulários, Flexbox e Responsividade",
            "Introdução a JavaScript ES6 e teste unitário",
            "Funções de alta ordem de JavaScript ES6",
            "JavaScript assíncrono e promises",
            "Testes automatizados com Jest",
          ],
        },
      ],
    },
  ];

  return (
    <Section id="courses">
      <Container>
        <Title>Cursos</Title>
        {courses.map(
          (
            {
              logo,
              name,
              startDate,
              endDate,
              qtdHours,
              status,
              contents,
              mainCertificate,
              certificatesAdditionals,
            },
            index,
          ) => (
            <CourseCard key={index}>
              <CourseTitle>{name}</CourseTitle>

              <CourseContent>
                <LogoWrapper>
                  <CourseLogo src={logo} />
                </LogoWrapper>

                <CourseInfo>
                  <h3>Período</h3>
                  <p>
                    {startDate} – {endDate}
                  </p>
                  <p>
                    {qtdHours} horas • {status}
                  </p>

                  <h3>Tópicos abordados</h3>
                  <ContentsList>
                    {contents.map((content, index) => (
                      <li key={index}>{content}</li>
                    ))}
                  </ContentsList>
                </CourseInfo>

                {mainCertificate && (
                  <MainCertificate>
                    <MainCertificateImage src={mainCertificate.image} />

                    <ActionButtons>
                      <ActionButton href={mainCertificate.pdf} download>
                        <FaDownload /> Download
                      </ActionButton>

                      <ActionButton href={mainCertificate.link} target="_blank">
                        <FaExternalLinkAlt /> Credencial
                      </ActionButton>
                    </ActionButtons>
                  </MainCertificate>
                )}
              </CourseContent>
              <ToggleWrapper>
                <ToggleButton onClick={() => setIsOpen(!isOpen)}>
                  {isOpen
                    ? "Ocultar certificados dos módulos"
                    : "Ver certificados dos módulos"}
                </ToggleButton>
              </ToggleWrapper>
              <ExpandableContainer $isOpen={isOpen}>
                <Grid>
                  {certificatesAdditionals.map(
                    ({ image, name, link, pdf, contents }) => (
                      <FeaturedCard>
                        <FeaturedLeft>
                          <CertificateImage src={image} />

                          <ActionButtons>
                            <ActionButton href={pdf} download>
                              <FaDownload /> Download
                            </ActionButton>

                            <ActionButton href={link} target="_blank">
                              <FaExternalLinkAlt /> Credencial
                            </ActionButton>
                          </ActionButtons>
                        </FeaturedLeft>

                        <FeaturedRight>
                          <h4>{name}</h4>

                          <CertificateList>
                            {contents.map((content) => (
                              <li>{content}</li>
                            ))}
                          </CertificateList>
                        </FeaturedRight>
                      </FeaturedCard>
                    ),
                  )}
                </Grid>
              </ExpandableContainer>
            </CourseCard>
          ),
        )}
      </Container>
    </Section>
  );
};
