import {
  Content,
  Description,
  IconItem,
  IconsRow,
  Section,
  StackCategory,
  StackContainer,
  StackTitle,
  StatItem,
  StatLabel,
  StatNumber,
  Stats,
  TextContainer,
  Title,
  Tooltip,
} from "./styles";

import { FaReact, FaNodeJs, FaJava, FaAws } from "react-icons/fa";
import {
  SiTypescript,
  SiPostgresql,
  SiStyledcomponents,
  SiMongodb,
  SiMysql,
  SiReact,
  SiJest,
  SiRtl,
  SiMocha,
  SiGit,
  SiGithub,
  SiGitlab,
  SiBitbucket,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiVuetify,
  SiVuedotjs,
  SiBootstrap,
  SiRedux,
  SiExpress,
  SiNestjs,
  SiDotnet,
  SiDocker,
  SiPostman,
  SiInsomnia,
  SiVite,
  SiAndroidstudio,
} from "react-icons/si";

import { TbBrandCSharp } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { ScrumIcon } from "../../assets/SVGs/scrumIcon";
import { KanbanIcon } from "../../assets/SVGs/kanbanIcon";
import { TddIcon } from "../../assets/SVGs/tddIcon";

export const About = () => {
  const mobile = [
    { icon: SiReact, name: "React Native", scale: 1 },
    { icon: FaJava, name: "Java", scale: 1 },
  ];

  const frontend = [
    { icon: SiHtml5, name: "HTML5", scale: 1 },
    { icon: SiCss3, name: "CSS3", scale: 1 },
    { icon: SiTypescript, name: "TypeScript", scale: 1 },
    { icon: FaReact, name: "React", scale: 1 },
    { icon: SiNextdotjs, name: "Next.js", scale: 1 },
    { icon: SiVuedotjs, name: "Vue.js", scale: 1 },
    { icon: SiVuetify, name: "Vuetify", scale: 1 },
    { icon: SiStyledcomponents, name: "Styled Components", scale: 1.6 },
    { icon: SiBootstrap, name: "Bootstrap", scale: 1 },
    { icon: SiRedux, name: "Redux", scale: 1 },
  ];

  const backend = [
    { icon: FaNodeJs, name: "Node.js", scale: 1 },
    { icon: SiTypescript, name: "TypeScript", scale: 1 },
    { icon: SiExpress, name: "Express.js", scale: 1 },
    { icon: SiNestjs, name: "NestJS", scale: 1 },
    { icon: TbBrandCSharp, name: "C#", scale: 1 },
    { icon: SiDotnet, name: ".NET", scale: 1.2 },
  ];

  const database = [
    { icon: SiMongodb, name: "MongoDB", scale: 1 },
    { icon: SiMysql, name: "MySQL", scale: 1.3 },
    { icon: SiPostgresql, name: "PostgreSQL", scale: 1 },
  ];

  const versioning = [
    { icon: SiGit, name: "Git", scale: 1 },
    { icon: SiGithub, name: "GitHub", scale: 1 },
    { icon: SiGitlab, name: "GitLab", scale: 1 },
    { icon: SiBitbucket, name: "Bitbucket", scale: 1 },
  ];

  const testing = [
    { icon: SiJest, name: "Jest", scale: 1 },
    { icon: SiRtl, name: "React Testing Library", scale: 1.8 },
    { icon: SiMocha, name: "Mocha", scale: 1 },
  ];

  const tools = [
    { icon: FaAws, name: "AWS", scale: 1 },
    { icon: SiDocker, name: "Docker", scale: 1 },
    { icon: SiPostman, name: "Postman", scale: 1 },
    { icon: SiInsomnia, name: "Insomnia", scale: 1 },
    { icon: SiVite, name: "Vite", scale: 1 },
    { icon: VscVscode, name: "VS Code", scale: 1 },
    { icon: SiAndroidstudio, name: "Android Studio", scale: 1 },
  ];

  const methodologies = [
    { icon: ScrumIcon, name: "Scrum", scale: 1 },
    { icon: KanbanIcon, name: "Kanban", scale: 1 },
    { icon: TddIcon, name: "TDD", scale: 1 },
  ];

  return (
    <Section id="sobre">
      <Content>
        <TextContainer>
          <Title>Sobre mim</Title>
          <Description>
            Sou Desenvolvedor Full Stack com foco na criação de aplicações
            modernas, performáticas e escaláveis, sempre priorizando arquitetura
            limpa, boas práticas e experiência do usuário. Além da atuação
            técnica, sou fundador da Azevedo Digital, onde desenvolvo soluções
            sob medida para empresas e profissionais que desejam transformar
            processos em produtos digitais eficientes. Minha motivação é usar
            tecnologia para simplificar problemas complexos e gerar impacto real
            através de software bem estruturado.
          </Description>

          <Stats>
            <StatItem>
              <StatNumber>+5</StatNumber>
              <StatLabel>Anos de experiência</StatLabel>
            </StatItem>

            <StatItem>
              <StatNumber>+15</StatNumber>
              <StatLabel>Projetos desenvolvidos</StatLabel>
            </StatItem>

            <StatItem>
              <StatNumber>+10</StatNumber>
              <StatLabel>Clientes atendidos</StatLabel>
            </StatItem>
          </Stats>
        </TextContainer>

        <StackContainer>
          <StackCategory>
            <StackTitle>Mobile</StackTitle>

            <IconsRow>
              {mobile.map(({ icon: Icon, name, scale }) => (
                <IconItem key={name}>
                  <Icon style={{ transform: `scale(${scale})` }} />
                  <Tooltip>{name}</Tooltip>
                </IconItem>
              ))}
            </IconsRow>
          </StackCategory>

          <StackCategory>
            <StackTitle>Front-end</StackTitle>

            <IconsRow>
              {frontend.map(({ icon: Icon, name, scale }) => (
                <IconItem key={name}>
                  <Icon style={{ transform: `scale(${scale})` }} />
                  <Tooltip>{name}</Tooltip>
                </IconItem>
              ))}
            </IconsRow>
          </StackCategory>

          <StackCategory>
            <StackTitle>Back-end</StackTitle>

            <IconsRow>
              {backend.map(({ icon: Icon, name, scale }) => (
                <IconItem key={name}>
                  <Icon style={{ transform: `scale(${scale})` }} />
                  <Tooltip>{name}</Tooltip>
                </IconItem>
              ))}
            </IconsRow>
          </StackCategory>

          <StackCategory>
            <StackTitle>Banco de dados</StackTitle>

            <IconsRow>
              {database.map(({ icon: Icon, name, scale }) => (
                <IconItem key={name}>
                  <Icon style={{ transform: `scale(${scale})` }} />
                  <Tooltip>{name}</Tooltip>
                </IconItem>
              ))}
            </IconsRow>
          </StackCategory>

          <StackCategory>
            <StackTitle>Versionamento</StackTitle>

            <IconsRow>
              {versioning.map(({ icon: Icon, name, scale }) => (
                <IconItem key={name}>
                  <Icon style={{ transform: `scale(${scale})` }} />
                  <Tooltip>{name}</Tooltip>
                </IconItem>
              ))}
            </IconsRow>
          </StackCategory>

          <StackCategory>
            <StackTitle>Testes</StackTitle>

            <IconsRow>
              {testing.map(({ icon: Icon, name, scale }) => (
                <IconItem key={name}>
                  <Icon style={{ transform: `scale(${scale})` }} />
                  <Tooltip>{name}</Tooltip>
                </IconItem>
              ))}
            </IconsRow>
          </StackCategory>

          <StackCategory>
            <StackTitle>Ferramentas</StackTitle>

            <IconsRow>
              {tools.map(({ icon: Icon, name, scale }) => (
                <IconItem key={name}>
                  <Icon style={{ transform: `scale(${scale})` }} />
                  <Tooltip>{name}</Tooltip>
                </IconItem>
              ))}
            </IconsRow>
          </StackCategory>

          <StackCategory>
            <StackTitle>Metodologias</StackTitle>

            <IconsRow>
              {methodologies.map(({ icon: Icon, name, scale }) => (
                <IconItem key={name}>
                  <Icon style={{ transform: `scale(${scale})` }} />
                  <Tooltip>{name}</Tooltip>
                </IconItem>
              ))}
            </IconsRow>
          </StackCategory>
        </StackContainer>
      </Content>
    </Section>
  );
};
