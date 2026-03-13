import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import {
  Section,
  ProjectRow,
  Carousel,
  Content,
  Container,
  ProjectContent,
  DescriptionListWrapper,
  IconsRow,
  ActionButton,
} from "./styles";

import pdv1 from "../../assets/projects/PDVFacil/pdvs.webp";
import pdv2 from "../../assets/projects/PDVFacil/pdvAndroid.png";
import pdv3 from "../../assets/projects/PDVFacil/pdvMachines.png";
import pdv4 from "../../assets/projects/PDVFacil/usingPdv.webp";

import totem1 from "../../assets/projects/VitrineTotem/totensSunmi.webp";
import totem2 from "../../assets/projects/VitrineTotem/totens.png";
import totem3 from "../../assets/projects/VitrineTotem/tabletsTotem.png";
import totem4 from "../../assets/projects/VitrineTotem/usingTotem.webp";

import { ScrumIcon } from "../../assets/SVGs/scrumIcon";

import {
  SiBitbucket,
  SiDocker,
  SiMongodb,
  SiMongoose,
  SiNestjs,
  SiReact,
  SiStyledcomponents,
  SiTypescript,
} from "react-icons/si";
import { FaAws, FaExternalLinkAlt, FaJava } from "react-icons/fa";
import { TechIcon } from "../../components/TechIcon";

export function Projects() {
  const projects = [
    {
      title: "PDV Fácil",
      descriptionMain:
        "Ponto de Venda baseado em Android, focado em agilidade e baixo custo para estabelecimentos comerciais.",
      descriptionList: [
        "Versatilidade de Hardware: Por ser Android, ele funciona tanto em equipamentos robustos de balcão quanto em maquininhas smart, permitindo mobilidade total no atendimento.",
        "Gestão Completa: Centraliza o controle de vendas, estoque, comandas, garçons e operações de delivery em uma única interface.",
        "Foco em Eficiência: Combina um sistema intuitivo e rápido com segurança de dados, sendo ideal para quem busca performance sem precisar de um alto investimento inicial.",
        'Praticidade: Transforma o dispositivo no "cérebro" do negócio, facilitando desde o fechamento do caixa até a organização das mesas.',
      ],
      tech: [
        { icon: SiReact, name: "React Native", scale: 1 },
        { icon: FaJava, name: "Java", scale: 1 },
        { icon: SiTypescript, name: "TypeScript", scale: 1 },
        { icon: SiStyledcomponents, name: "Styled Components", scale: 1.6 },
        { icon: SiNestjs, name: "NestJS", scale: 1 },
        { icon: SiMongodb, name: "MongoDB", scale: 1 },
        { icon: SiMongoose, name: "Mongoose", scale: 1.2 },
        { icon: SiBitbucket, name: "Bitbucket", scale: 1 },
        { icon: FaAws, name: "AWS", scale: 1 },
        { icon: SiDocker, name: "Docker", scale: 1 },
        { icon: ScrumIcon, name: "Scrum", scale: 1 },
      ],
      images: [pdv1, pdv2, pdv3, pdv4],
      link: "https://pdvfacil.app.br/",
    },
    {
      title: "Vitrine Totem",
      descriptionMain:
        "Autoatendimento focado em autonomia e produtividade, eliminando intermediários no processo de compra para acelerar o giro do estabelecimento.",
      descriptionList: [
        "Autonomia do Cliente: O próprio consumidor realiza o pedido e o pagamento de forma digital, eliminando o uso de papel e reduzindo erros humanos ou dependência de garçons.",
        "Fluxo Automatizado: Assim que o pagamento é confirmado, o pedido é enviado instantaneamente para a produção na cozinha, otimizando o tempo de entrega.",
        "Experiência Visual: O totem funciona como uma vitrine interativa, permitindo a exibição de vídeos, promoções e conteúdos personalizados que atraem o público.",
        "Gestão Centralizada: Todo o processo — do pedido à impressão e desempenho de vendas — fica conectado ao sistema principal, garantindo controle total da operação em um só lugar.",
      ],
      tech: [
        { icon: SiReact, name: "React Native", scale: 1 },
        { icon: FaJava, name: "Java", scale: 1 },
        { icon: SiTypescript, name: "TypeScript", scale: 1 },
        { icon: SiStyledcomponents, name: "Styled Components", scale: 1.6 },
        { icon: SiNestjs, name: "NestJS", scale: 1 },
        { icon: SiMongodb, name: "MongoDB", scale: 1 },
        { icon: SiMongoose, name: "Mongoose", scale: 1.2 },
        { icon: SiBitbucket, name: "Bitbucket", scale: 1 },
        { icon: FaAws, name: "AWS", scale: 1 },
        { icon: SiDocker, name: "Docker", scale: 1 },
        { icon: ScrumIcon, name: "Scrum", scale: 1 },
      ],
      images: [totem1, totem2, totem3, totem4],
      link: "https://vitrinetotem.com.br/",
    },
  ];

  return (
    <Section id="projects">
      <Container>
        <Content>
          <h2>Projetos</h2>

          {projects.map((project, index) => (
            <ProjectRow key={project.title} reverse={index % 2 === 1}>
              <Carousel>
                <Swiper
                  modules={[Autoplay, Pagination]}
                  spaceBetween={20}
                  slidesPerView={1}
                  autoplay={{ delay: 3000 }}
                  pagination={{ clickable: true }}
                  loop
                >
                  {project.images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img src={img} alt={project.title} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Carousel>

              <ProjectContent>
                <h3>{project.title}</h3>
                <p>{project.descriptionMain}</p>

                <DescriptionListWrapper>
                  {project.descriptionList.map((description, index) => (
                    <li key={index}>{description}</li>
                  ))}
                </DescriptionListWrapper>

                <IconsRow>
                  {project.tech.map(({ name, icon, scale }) => (
                    <TechIcon
                      key={name}
                      name={name}
                      icon={icon}
                      scale={scale}
                    />
                  ))}
                </IconsRow>

                <ActionButton href={project.link} target="_blank">
                  <FaExternalLinkAlt /> Visitar
                </ActionButton>
              </ProjectContent>
            </ProjectRow>
          ))}
        </Content>
      </Container>
    </Section>
  );
}
