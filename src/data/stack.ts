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
import { ScrumIcon } from "../assets/SVGs/scrumIcon";
import { KanbanIcon } from "../assets/SVGs/kanbanIcon";
import { TddIcon } from "../assets/SVGs/tddIcon";
import { SwaggerIcon } from "../assets/SVGs/swaggerIcon";

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

export const stackGroups = [
  { key: "frontend", label: "about.stackTitleTwo", items: frontend },
  { key: "backend", label: "about.stackTitleThree", items: backend },
  { key: "mobile", label: "about.stackTitleOne", items: mobile },
  { key: "database", label: "about.stackTitleFour", items: database },
  { key: "tools", label: "about.stackTitleSeven", items: tools },
  { key: "testing", label: "about.stackTitleSix", items: testing },
  { key: "versioning", label: "about.stackTitleFive", items: versioning },
  { key: "methodologies", label: "about.stackTitleEight", items: methodologies },
];
