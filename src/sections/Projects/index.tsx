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

import zoki1 from "../../assets/projects/GestorLoteamento/zokiCRM.png";
import zoki2 from "../../assets/projects/GestorLoteamento/ZokiHome.png";
import zoki3 from "../../assets/projects/GestorLoteamento/usingZoki.png";

import smartInvoiceExtrator from "../../assets/projects/SmartInvoiceExtrator/ExtartorLLMInvoices.png";

import pdv1 from "../../assets/projects/PDVFacil/pdvs.webp";
import pdv2 from "../../assets/projects/PDVFacil/pdvAndroid.png";
import pdv3 from "../../assets/projects/PDVFacil/pdvMachines.png";
import pdv4 from "../../assets/projects/PDVFacil/usingPdv.png";

import totem1 from "../../assets/projects/VitrineTotem/totensSunmi.webp";
import totem2 from "../../assets/projects/VitrineTotem/totens.png";
import totem3 from "../../assets/projects/VitrineTotem/tabletsTotem.png";
import totem4 from "../../assets/projects/VitrineTotem/usingTotem.webp";

import tablet1 from "../../assets/projects/TabletFacil/TabletFacil1.webp";
import tablet2 from "../../assets/projects/TabletFacil/TabletFacil2.webp";
import tablet3 from "../../assets/projects/TabletFacil/usingTablet.webp";

import menu1 from "../../assets/projects/MenuFacil/menu1.png";
import menu2 from "../../assets/projects/MenuFacil/menu2.png";
import menu3 from "../../assets/projects/MenuFacil/menuIntegration.png";
import menu4 from "../../assets/projects/MenuFacil/usingMenu.webp";

import portalPos1 from "../../assets/projects/PortalPOS/portalPOS1.webp";
import portalPos2 from "../../assets/projects/PortalPOS/portalPOS2.png";
import portalPos3 from "../../assets/projects/PortalPOS/kds.webp";
import portalPos4 from "../../assets/projects/PortalPOS/painelSenha.webp";

import { ScrumIcon } from "../../assets/SVGs/scrumIcon";

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
import { FaAws, FaExternalLinkAlt, FaJava, FaNodeJs } from "react-icons/fa";
import { TechIcon } from "../../components/TechIcon";
import { TbBrandCSharp } from "react-icons/tb";
import { KanbanIcon } from "../../assets/SVGs/kanbanIcon";
import { SwaggerIcon } from "../../assets/SVGs/swaggerIcon";

const projects = [
  {
    title: "Extrator de Faturas Inteligente (API)",
    descriptionMain:
      "Sistema inteligente para processamento, extração e gestão de faturas de energia elétrica, utilizando Inteligência Artificial para transformar documentos não estruturados (PDF) em dados acionáveis.",
    descriptionList: [
      'Validação de Resposta da IA: LLMs podem sofrer "alucinações". Implementamos uma camada de validação com Zod imediatamente após a resposta do LLM. Se a IA omitir um campo ou mudar um tipo de dado, o sistema rejeita a entrada antes que ela chegue ao banco.',
      "Transações Atômicas: No InvoiceRepository, o registro da empresa, do cliente e da fatura ocorre dentro de uma $transaction do Prisma. Isso evita a criação de dados órfãos caso ocorra uma falha no meio do processo de salvamento.",
      "Prompt Engineering: O prompt enviado ao LLM está configurado para retornar estritamente JSON puro, facilitando o parse e reduzindo drasticamente o consumo de tokens e latência.",
    ],
    tech: [
      { icon: FaNodeJs, name: "Node.js", scale: 1 },
      { icon: SiTypescript, name: "TypeScript", scale: 1 },
      { icon: SiNestjs, name: "NestJS", scale: 1 },
      { icon: SiPostgresql, name: "PostgreSQL", scale: 1 },
      { icon: SiPrisma, name: "Prisma", scale: 1.2 },
      { icon: SiGithub, name: "GitHub", scale: 1 },
    ],
    images: [smartInvoiceExtrator],
    link: "https://energy-api-six.vercel.app/docs",
  },
  {
    title: "Gestor de loteamentos",
    descriptionMain:
      "Plataforma de inteligência imobiliária e financeira, projetada para centralizar o ciclo de vida completo de empreendimentos, do lead à liquidação das parcelas.",
    descriptionList: [
      "Controle de Empreendimentos: Centraliza a organização de quadras e lotes, integrando disponibilidade de vendas, contratos e fluxos financeiros em uma interface única.",
      "Modelagem de Amortização: Gestão profissional de contratos de longo prazo utilizando tabelas Price ou SAC, com suporte nativo para distratos, aditivos e histórico auditável por cliente.",
      "Reajustes Automáticos: Aplicação precisa de índices (INPC, IPCA, IGP-M) com rastreabilidade total e atualização imediata do fluxo de caixa projetado.",
      "Régua de Relacionamento: Sistema de cobrança automatizado via WhatsApp, E-mail e SMS, reduzindo a inadimplência através de notificações inteligentes e facilitação de renegociações.",
      "Visibilidade de Caixa: Projeção clara de receitas baseada em contratos reais, permitindo distinguir com precisão parcelas a vencer, liquidadas e em atraso.",
      "Funil de Vendas Imobiliário: Conecta a captação de leads diretamente à geração de propostas e contratos, eliminando o retrabalho entre as áreas comercial e administrativa.",
      "Portal de Autoatendimento: Área exclusiva para o comprador acessar boletos, consultar o extrato de parcelas e baixar documentos, diminuindo a carga de suporte operacional.",
      "Relatórios Estratégicos: Painéis financeiros e gerenciais focados em tomada de decisão, análise de crédito e prestação de contas para investidores.",
    ],
    tech: [
      { icon: SiVuedotjs, name: "Vue.js", scale: 1 },
      { icon: SiVuetify, name: "Vuetify", scale: 1 },
      { icon: SiTypescript, name: "TypeScript", scale: 1 },
      { icon: TbBrandCSharp, name: "C#", scale: 1 },
      { icon: SiDotnet, name: ".NET", scale: 1.2 },
      { icon: SiPostgresql, name: "PostgreSQL", scale: 1 },
      { icon: SiGithub, name: "GitHub", scale: 1 },
      { icon: FaAws, name: "AWS", scale: 1 },
      { icon: SiDocker, name: "Docker", scale: 1 },
      { icon: KanbanIcon, name: "Kanban", scale: 1 },
      { icon: SwaggerIcon, name: "Swagger", scale: 1 },
    ],
    images: [zoki1, zoki2, zoki3],
    link: "https://zoki.com.br/",
  },
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
      { icon: SwaggerIcon, name: "Swagger", scale: 1 },
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
      { icon: SwaggerIcon, name: "Swagger", scale: 1 },
      { icon: FaAws, name: "AWS", scale: 1 },
      { icon: SiDocker, name: "Docker", scale: 1 },
      { icon: ScrumIcon, name: "Scrum", scale: 1 },
    ],
    images: [totem1, totem2, totem3, totem4],
    link: "https://vitrinetotem.com.br/",
  },
  {
    title: "Tablet Fácil",
    descriptionMain:
      "Solução de autoatendimento na mesa, focada em dar autonomia ao cliente e reduzir a carga de trabalho da equipe de salão.",
    descriptionList: [
      "Autonomia Total na Mesa: O cliente visualiza o cardápio digital, escolhe os itens e faz o pedido sozinho, eliminando a dependência de garçons e o uso de papel.",
      "Pagamento Integrado (Tap to Pay): Permite finalizar a conta diretamente no tablet por aproximação, dispensando o uso de maquininhas externas e agilizando o fechamento.",
      "Fluxo em Tempo Real: Os pedidos feitos no tablet são enviados automaticamente para a cozinha e integrados ao painel de gestão, garantindo precisão e acompanhamento de desempenho.",
      "Experiência Moderna e Fluida: O equipamento é compacto e personalizável com a marca do negócio, ajudando a evitar filas no balcão e tornando a jornada do cliente mais prática e tecnológica.",
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
  },
  {
    title: "Menu Digital",
    descriptionMain:
      "Solução de cardápio digital via QR Code e Delivery Próprio, focada em maximizar o lucro eliminando intermediários e taxas de comissão.",
    descriptionList: [
      "Aumento de Faturamento: Potencializa as vendas em até 200% através de um cardápio visual com fotos e descrições atraentes, que estimulam o consumo de acompanhamentos.",
      "Redução de Custos Operacionais: O cliente faz o pedido pelo próprio celular na mesa, diminuindo em até 50% os gastos com equipe e eliminando erros humanos no lançamento.",
      "Lucro Total (Zero Comissões): Diferente de apps de terceiros, o valor das vendas fica 100% com o estabelecimento, sem taxas ocultas ou mensalidades variáveis sobre o faturamento.",
      "Autonomia e Fidelização: Proporciona uma jornada de compra rápida e sem filas, aumentando a satisfação do cliente, o que gera mais indicações e retorno ao local.",
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
  },
  {
    title: "Portal POS",
    descriptionMain:
      "Central de inteligência e integração, que unifica a gestão de todos os canais de venda e automatiza a comunicação entre o salão, cozinha e delivery.",
    descriptionList: [
      "Gestão Centralizada: Funciona como um painel único onde você atualiza cardápios, preços e configurações para todos os aplicativos e PDVs simultaneamente, eliminando o trabalho manual repetitivo.",
      "Automação do Fluxo de Pedidos: Integra os pedidos do delivery e do balcão diretamente ao sistema, enviando-os em tempo real para a cozinha (KDS) sem necessidade de redigitação ou uso de papel.",
      "Painel de Senhas Inteligente: Gerencia automaticamente o status do pedido (em preparo → pronto), chamando o cliente para a retirada assim que a cozinha finaliza a produção, o que organiza o fluxo do estabelecimento.",
      "Visão Gerencial Completa: Oferece relatórios unificados de vendas por canal, permitindo identificar quais plataformas trazem mais lucro e evitando perdas com pedidos esquecidos ou duplicados.",
      "Eficiência Operacional: Reduz drasticamente erros de comunicação e aumenta o foco da equipe no atendimento, já que a tecnologia cuida da transmissão de dados entre os setores.",
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
  },
];

export function Projects() {
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
                  {project.descriptionList.map((description, index) => {
                    const [title, text] = description.split(":");

                    return (
                      <li key={index}>
                        <strong>{title}:</strong> {text}
                      </li>
                    );
                  })}
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
                  <FaExternalLinkAlt /> Saiba mais
                </ActionButton>
              </ProjectContent>
            </ProjectRow>
          ))}
        </Content>
      </Container>
    </Section>
  );
}
