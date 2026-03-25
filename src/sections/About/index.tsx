import {
  Content,
  Description,
  IconsRow,
  Section,
  SkillItem,
  SkillsList,
  SoftSkillsContainer,
  SoftSkillsTitle,
  StackCategory,
  StackContainer,
  StackTitle,
  StatItem,
  StatLabel,
  StatNumber,
  Stats,
  TextContainer,
  Title,
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
  SiLinux,
  SiMongoose,
  SiPrisma,
} from "react-icons/si";

import { TbBrandCSharp } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { ScrumIcon } from "../../assets/SVGs/scrumIcon";
import { KanbanIcon } from "../../assets/SVGs/kanbanIcon";
import { TddIcon } from "../../assets/SVGs/tddIcon";
import { FiMessageCircle, FiTarget } from "react-icons/fi";
import { LuBrain, LuRefreshCw } from "react-icons/lu";
import { TechIcon } from "../../components/TechIcon";
import { SwaggerIcon } from "../../assets/SVGs/swaggerIcon";
import { useTranslation } from "react-i18next";

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
  { icon: SiMongoose, name: "Mongoose", scale: 1.2 },
  { icon: SiPrisma, name: "Prisma", scale: 1 },
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
  { icon: SiLinux, name: "Linux", scale: 0.9 },
  { icon: FaAws, name: "AWS", scale: 1 },
  { icon: SiDocker, name: "Docker", scale: 1 },
  { icon: SwaggerIcon, name: "Swagger", scale: 1 },
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

export const About = () => {
  const { t } = useTranslation();

  return (
    <Section id="about">
      <Content>
        <TextContainer>
          <Title>{t("about.title")}</Title>
          <Description>{t("about.description")}</Description>

          <SoftSkillsContainer>
            <SoftSkillsTitle>Soft Skills</SoftSkillsTitle>

            <SkillsList>
              <SkillItem>
                <FiMessageCircle />
                <span>{t("about.softSkillOne")}</span>
              </SkillItem>

              <SkillItem>
                <LuBrain />
                <span>{t("about.softSkillTwo")}</span>
              </SkillItem>

              <SkillItem>
                <LuRefreshCw />
                <span>{t("about.softSkillThree")}</span>
              </SkillItem>

              <SkillItem>
                <FiTarget />
                <span>{t("about.softSkillFour")}</span>
              </SkillItem>
            </SkillsList>
          </SoftSkillsContainer>

          <Stats>
            <StatItem>
              <StatNumber>+5</StatNumber>
              <StatLabel>{t("about.statsExperience")}</StatLabel>
            </StatItem>

            <StatItem>
              <StatNumber>+15</StatNumber>
              <StatLabel>{t("about.statsProjects")}</StatLabel>
            </StatItem>

            <StatItem>
              <StatNumber>+10</StatNumber>
              <StatLabel>{t("about.statsClients")}</StatLabel>
            </StatItem>
          </Stats>
        </TextContainer>

        <StackContainer>
          <StackCategory>
            <StackTitle>{t("about.stackTitleOne")}</StackTitle>

            <IconsRow>
              {mobile.map(({ icon, name, scale }) => (
                <TechIcon key={name} name={name} scale={scale} icon={icon} />
              ))}
            </IconsRow>
          </StackCategory>

          <StackCategory>
            <StackTitle>{t("about.stackTitleTwo")}</StackTitle>

            <IconsRow>
              {frontend.map(({ icon, name, scale }) => (
                <TechIcon key={name} name={name} scale={scale} icon={icon} />
              ))}
            </IconsRow>
          </StackCategory>

          <StackCategory>
            <StackTitle>{t("about.stackTitleThree")}</StackTitle>

            <IconsRow>
              {backend.map(({ icon, name, scale }) => (
                <TechIcon key={name} name={name} scale={scale} icon={icon} />
              ))}
            </IconsRow>
          </StackCategory>

          <StackCategory>
            <StackTitle>{t("about.stackTitleFour")}</StackTitle>

            <IconsRow>
              {database.map(({ icon, name, scale }) => (
                <TechIcon key={name} name={name} scale={scale} icon={icon} />
              ))}
            </IconsRow>
          </StackCategory>

          <StackCategory>
            <StackTitle>{t("about.stackTitleFive")}</StackTitle>

            <IconsRow>
              {versioning.map(({ icon, name, scale }) => (
                <TechIcon key={name} name={name} scale={scale} icon={icon} />
              ))}
            </IconsRow>
          </StackCategory>

          <StackCategory>
            <StackTitle>{t("about.stackTitleSix")}</StackTitle>

            <IconsRow>
              {testing.map(({ icon, name, scale }) => (
                <TechIcon key={name} name={name} scale={scale} icon={icon} />
              ))}
            </IconsRow>
          </StackCategory>

          <StackCategory>
            <StackTitle>{t("about.stackTitleSeven")}</StackTitle>

            <IconsRow>
              {tools.map(({ icon, name, scale }) => (
                <TechIcon key={name} name={name} scale={scale} icon={icon} />
              ))}
            </IconsRow>
          </StackCategory>

          <StackCategory>
            <StackTitle>{t("about.stackTitleEight")}</StackTitle>

            <IconsRow>
              {methodologies.map(({ icon, name, scale }) => (
                <TechIcon key={name} name={name} scale={scale} icon={icon} />
              ))}
            </IconsRow>
          </StackCategory>
        </StackContainer>
      </Content>
    </Section>
  );
};
