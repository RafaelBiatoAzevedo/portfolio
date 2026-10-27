import leviata1 from "../assets/projects/Leviata/leviataHome.webp";

import smartInvoiceExtrator from "../assets/projects/SmartInvoiceExtrator/ExtartorLLMInvoices.webp";

import zoki1 from "../assets/projects/GestorLoteamento/zokiCRM.webp";
import zoki2 from "../assets/projects/GestorLoteamento/zokiHome.webp";
import zoki3 from "../assets/projects/GestorLoteamento/usingZoki.webp";

import pdv1 from "../assets/projects/PDVFacil/pdvs.webp";
import pdv2 from "../assets/projects/PDVFacil/pdvAndroid.webp";
import pdv3 from "../assets/projects/PDVFacil/pdvMachines.webp";
import pdv4 from "../assets/projects/PDVFacil/usingPdv.webp";

import totem1 from "../assets/projects/VitrineTotem/totensSunmi.webp";
import totem2 from "../assets/projects/VitrineTotem/totens.webp";
import totem3 from "../assets/projects/VitrineTotem/tabletsTotem.webp";
import totem4 from "../assets/projects/VitrineTotem/usingTotem.webp";

import tablet1 from "../assets/projects/TabletFacil/TabletFacil1.webp";
import tablet2 from "../assets/projects/TabletFacil/TabletFacil2.webp";
import tablet3 from "../assets/projects/TabletFacil/usingTablet.webp";

import menu1 from "../assets/projects/MenuFacil/menu1.webp";
import menu2 from "../assets/projects/MenuFacil/menu2.webp";
import menu3 from "../assets/projects/MenuFacil/menuIntegration.webp";
import menu4 from "../assets/projects/MenuFacil/usingMenu.webp";

import portalPos1 from "../assets/projects/PortalPOS/portalPOS1.webp";
import portalPos2 from "../assets/projects/PortalPOS/portalPOS2.webp";
import portalPos3 from "../assets/projects/PortalPOS/kds.webp";
import portalPos4 from "../assets/projects/PortalPOS/painelSenha.webp";

import aleTech from "../assets/projects/AleTechnology/aleTech.webp";

import vahlis from "../assets/projects/Vahlis/vahlis.webp";

import { ScrumIcon } from "../assets/SVGs/scrumIcon";

import {
  SiBitbucket,
  SiDocker,
  SiDotnet,
  SiGithub,
  SiMongodb,
  SiMongoose,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiStyledcomponents,
  SiTypescript,
  SiVuedotjs,
  SiVuetify,
} from "react-icons/si";
import { FaAws, FaJava, FaNodeJs } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { KanbanIcon } from "../assets/SVGs/kanbanIcon";
import { SwaggerIcon } from "../assets/SVGs/swaggerIcon";

import type { ITechIcon } from "../components/TechIcon";

export type ProjectCategory = "web" | "mobile" | "api";

export interface Project {
  id: string;
  categories: ProjectCategory[];
  title: string;
  descriptionMain: string;
  descriptionList: string[];
  tech: ITechIcon[];
  images: string[];
  link: string;
  github: string;
}

export const projects: Project[] = [
  {
    id: "leviata",
    categories: ["web", "api"],
    title: "projects.projectLeviata.title",
    descriptionMain: "projects.projectLeviata.description",
    descriptionList: [
      "projects.projectLeviata.featureOne",
      "projects.projectLeviata.featureTwo",
      "projects.projectLeviata.featureThree",
    ],
    tech: [
      { icon: FaNodeJs, name: "Node.js", scale: 1 },
      { icon: SiTypescript, name: "TypeScript", scale: 1 },
      { icon: SiNestjs, name: "NestJS", scale: 1 },
      { icon: SiPostgresql, name: "PostgreSQL", scale: 1 },
      { icon: SiPrisma, name: "Prisma", scale: 1 },
      { icon: SiGithub, name: "GitHub", scale: 1 },
      { icon: SwaggerIcon, name: "Swagger", scale: 1 },
    ],
    images: [leviata1],
    link: "",
    github: "",
  },
  {
    id: "smart-invoice",
    categories: ["api"],
    title: "projects.projectSmartExtrator.title",
    descriptionMain: "projects.projectSmartExtrator.description",
    descriptionList: [
      "projects.projectSmartExtrator.featureOne",
      "projects.projectSmartExtrator.featureTwo",
      "projects.projectSmartExtrator.featureThree",
    ],
    tech: [
      { icon: FaNodeJs, name: "Node.js", scale: 1 },
      { icon: SiTypescript, name: "TypeScript", scale: 1 },
      { icon: SiNestjs, name: "NestJS", scale: 1 },
      { icon: SiPostgresql, name: "PostgreSQL", scale: 1 },
      { icon: SiPrisma, name: "Prisma", scale: 1 },
      { icon: SiGithub, name: "GitHub", scale: 1 },
      { icon: SwaggerIcon, name: "Swagger", scale: 1 },
    ],
    images: [smartInvoiceExtrator],
    link: "https://energy-api-six.vercel.app/docs",
    github: "https://github.com/RafaelBiatoAzevedo/energy-api",
  },
  {
    id: "zoki",
    categories: ["web"],
    title: "projects.projectZoki.title",
    descriptionMain: "projects.projectZoki.description",
    descriptionList: [
      "projects.projectZoki.featureOne",
      "projects.projectZoki.featureTwo",
      "projects.projectZoki.featureThree",
      "projects.projectZoki.featureFour",
      "projects.projectZoki.featureFive",
      "projects.projectZoki.featureSix",
      "projects.projectZoki.featureSeven",
      "projects.projectZoki.featureEight",
    ],
    tech: [
      { icon: SiVuedotjs, name: "Vue.js", scale: 1 },
      { icon: SiVuetify, name: "Vuetify", scale: 1 },
      { icon: SiTypescript, name: "TypeScript", scale: 1 },
      { icon: TbBrandCSharp, name: "C#", scale: 1 },
      { icon: SiDotnet, name: ".NET", scale: 1.2 },
      { icon: SiPostgresql, name: "PostgreSQL", scale: 1 },
      { icon: SiGithub, name: "GitHub", scale: 1 },
      { icon: SwaggerIcon, name: "Swagger", scale: 1 },
      { icon: FaAws, name: "AWS", scale: 1 },
      { icon: SiDocker, name: "Docker", scale: 1 },
      { icon: KanbanIcon, name: "Kanban", scale: 1 },
    ],
    images: [zoki1, zoki2, zoki3],
    link: "https://zoki.com.br/",
    github: "",
  },
  {
    id: "pdv-facil",
    categories: ["mobile"],
    title: "projects.projectPdv.title",
    descriptionMain: "projects.projectPdv.description",
    descriptionList: [
      "projects.projectPdv.featureOne",
      "projects.projectPdv.featureTwo",
      "projects.projectPdv.featureThree",
      "projects.projectPdv.featureFour",
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
      { icon: SwaggerIcon, name: "Swagger", scale: 1 },
      { icon: FaAws, name: "AWS", scale: 1 },
      { icon: SiDocker, name: "Docker", scale: 1 },
      { icon: ScrumIcon, name: "Scrum", scale: 1 },
    ],
    images: [pdv1, pdv2, pdv3, pdv4],
    link: "https://pdvfacil.app.br/",
    github: "",
  },
  {
    id: "vitrine-totem",
    categories: ["mobile"],
    title: "projects.projectTotem.title",
    descriptionMain: "projects.projectTotem.description",
    descriptionList: [
      "projects.projectTotem.featureOne",
      "projects.projectTotem.featureTwo",
      "projects.projectTotem.featureThree",
      "projects.projectTotem.featureFour",
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
      { icon: SwaggerIcon, name: "Swagger", scale: 1 },
      { icon: FaAws, name: "AWS", scale: 1 },
      { icon: SiDocker, name: "Docker", scale: 1 },
      { icon: ScrumIcon, name: "Scrum", scale: 1 },
    ],
    images: [totem1, totem2, totem3, totem4],
    link: "https://vitrinetotem.com.br/",
    github: "",
  },
  {
    id: "tablet-facil",
    categories: ["mobile"],
    title: "projects.projectTablet.title",
    descriptionMain: "projects.projectTablet.description",
    descriptionList: [
      "projects.projectTablet.featureOne",
      "projects.projectTablet.featureTwo",
      "projects.projectTablet.featureThree",
      "projects.projectTablet.featureFour",
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
      { icon: SwaggerIcon, name: "Swagger", scale: 1 },
      { icon: FaAws, name: "AWS", scale: 1 },
      { icon: SiDocker, name: "Docker", scale: 1 },
      { icon: ScrumIcon, name: "Scrum", scale: 1 },
    ],
    images: [tablet1, tablet2, tablet3],
    link: "https://tabletfacil.com.br/",
    github: "",
  },
  {
    id: "menu-digital",
    categories: ["web"],
    title: "projects.projectMenu.title",
    descriptionMain: "projects.projectMenu.description",
    descriptionList: [
      "projects.projectMenu.featureOne",
      "projects.projectMenu.featureTwo",
      "projects.projectMenu.featureThree",
      "projects.projectMenu.featureFour",
    ],
    tech: [
      { icon: SiNextdotjs, name: "Next.js", scale: 1 },
      { icon: SiTypescript, name: "TypeScript", scale: 1 },
      { icon: SiStyledcomponents, name: "Styled Components", scale: 1.6 },
      { icon: SiNestjs, name: "NestJS", scale: 1 },
      { icon: SiMongodb, name: "MongoDB", scale: 1 },
      { icon: SiMongoose, name: "Mongoose", scale: 1.2 },
      { icon: SiBitbucket, name: "Bitbucket", scale: 1 },
      { icon: SwaggerIcon, name: "Swagger", scale: 1 },
      { icon: FaAws, name: "AWS", scale: 1 },
      { icon: SiDocker, name: "Docker", scale: 1 },
      { icon: ScrumIcon, name: "Scrum", scale: 1 },
    ],
    images: [menu1, menu2, menu3, menu4],
    link: "https://www.menufacil.app/",
    github: "",
  },
  {
    id: "portal-pos",
    categories: ["web"],
    title: "projects.projectPortal.title",
    descriptionMain: "projects.projectPortal.description",
    descriptionList: [
      "projects.projectPortal.featureOne",
      "projects.projectPortal.featureTwo",
      "projects.projectPortal.featureThree",
      "projects.projectPortal.featureFour",
      "projects.projectPortal.featureFive",
    ],
    tech: [
      { icon: SiNextdotjs, name: "Next.js", scale: 1 },
      { icon: SiTypescript, name: "TypeScript", scale: 1 },
      { icon: SiStyledcomponents, name: "Styled Components", scale: 1.6 },
      { icon: SiNestjs, name: "NestJS", scale: 1 },
      { icon: SiMongodb, name: "MongoDB", scale: 1 },
      { icon: SiMongoose, name: "Mongoose", scale: 1.2 },
      { icon: SiBitbucket, name: "Bitbucket", scale: 1 },
      { icon: SwaggerIcon, name: "Swagger", scale: 1 },
      { icon: FaAws, name: "AWS", scale: 1 },
      { icon: SiDocker, name: "Docker", scale: 1 },
      { icon: ScrumIcon, name: "Scrum", scale: 1 },
    ],
    images: [portalPos1, portalPos2, portalPos3, portalPos4],
    link: "https://portal.colibri.com.br/",
    github: "",
  },
  {
    id: "ale-technology",
    categories: ["web"],
    title: "projects.projectAleTec.title",
    descriptionMain: "projects.projectAleTec.description",
    descriptionList: [
      "projects.projectAleTec.featureOne",
      "projects.projectAleTec.featureTwo",
      "projects.projectAleTec.featureThree",
      "projects.projectAleTec.featureFour",
      "projects.projectAleTec.featureFive",
      "projects.projectAleTec.featureSix",
      "projects.projectAleTec.featureSeven",
    ],
    tech: [
      { icon: SiNextdotjs, name: "Next.js", scale: 1 },
      { icon: SiTypescript, name: "TypeScript", scale: 1 },
      { icon: SiGithub, name: "GitHub", scale: 1 },
    ],
    images: [aleTech],
    link: "https://aletecsite.netlify.app/",
    github: "https://github.com/RafaelBiatoAzevedo/aleTec",
  },
  {
    id: "vahlis",
    categories: ["web"],
    title: "projects.projectVahlis.title",
    descriptionMain: "projects.projectVahlis.description",
    descriptionList: [
      "projects.projectVahlis.featureOne",
      "projects.projectVahlis.featureTwo",
      "projects.projectVahlis.featureThree",
      "projects.projectVahlis.featureFour",
      "projects.projectVahlis.featureFive",
    ],
    tech: [
      { icon: SiNextdotjs, name: "Next.js", scale: 1 },
      { icon: SiTypescript, name: "TypeScript", scale: 1 },
      { icon: SiGithub, name: "GitHub", scale: 1 },
    ],
    images: [vahlis],
    link: "https://vahlis.netlify.app/",
    github: "https://github.com/RafaelBiatoAzevedo/site-vahlis",
  },
];

