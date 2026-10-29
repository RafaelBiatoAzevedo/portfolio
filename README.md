# Rafael Azevedo · Portfólio

Portfólio pessoal de Rafael Azevedo, Full Stack Engineer. Reúne projetos, experiência profissional, formação e certificações em uma aplicação responsiva, com versões em português e inglês.

[Funcionalidades](#funcionalidades) · [Tecnologias](#tecnologias) · [Executar localmente](#executar-localmente) · [Personalização](#personalização) · [Contato](#contato)

## Funcionalidades

- **Projetos:** filtros por web, mobile e API, com detalhes, galeria de imagens, tecnologias e links disponíveis para cada projeto.
- **Trajetória profissional:** apresentação pessoal, competências, experiências e formação acadêmica.
- **Cursos e certificações:** visualização de certificados, download em PDF e acesso às credenciais disponíveis.
- **Português e inglês:** alternância de idioma com preferência salva no navegador.
- **Temas claro e escuro:** alternância de tema com preferência salva no navegador.
- **Navegação responsiva:** menu para dispositivos móveis, destaque da seção ativa e indicador de progresso de leitura.
- **Recursos de acessibilidade:** link para pular ao conteúdo, controle de foco nos modais e respeito à preferência de movimento reduzido.
- **Contato:** links para redes sociais, WhatsApp e e-mail, com opção de copiar o endereço.

## Tecnologias

| Tecnologia | Uso no projeto |
| --- | --- |
| React 19 e TypeScript | Componentes, estado e tipagem |
| Vite 7 | Servidor de desenvolvimento e build de produção |
| styled-components e CSS | Temas, estilos globais e layout responsivo |
| Framer Motion | Animações, transições e progresso de rolagem |
| i18next e react-i18next | Traduções e troca de idioma |
| React Icons | Ícones da interface e das tecnologias apresentadas |
| ESLint | Análise estática do código |

## Executar localmente

### Pré-requisitos

- Node.js compatível com o Vite instalado: `^20.19.0` ou `>=22.12.0`.
- npm e Git disponíveis no terminal.

### Instalação

```bash
git clone https://github.com/RafaelBiatoAzevedo/portifolio.git portfolio
cd portfolio
npm ci
npm run dev
```

Abra o endereço informado no terminal, normalmente `http://localhost:5173`. O script de desenvolvimento usa `--host`, permitindo acesso pela rede local.

A aplicação funciona no navegador e não exige backend, banco de dados ou variáveis de ambiente para executar localmente.

### Comandos disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento com atualização automática |
| `npm run lint` | Executa o ESLint |
| `npm run build` | Verifica os tipos com TypeScript e gera a versão de produção em `dist/` |
| `npm run preview` | Serve o build localmente para conferência |

## Build e publicação

Para gerar e conferir a versão de produção:

```bash
npm run build
npm run preview
```

O preview fica disponível no endereço informado no terminal, normalmente `http://localhost:4173`.

Para publicar em uma hospedagem estática, configure:

- **Comando de instalação:** `npm ci`.
- **Comando de build:** `npm run build`.
- **Diretório de saída:** `dist/`.

Se a hospedagem servir o site em um subdiretório, ajuste a opção `base` em [vite.config.ts](./vite.config.ts) antes de gerar o build.

## Estrutura do projeto

```text
portfolio/
├── public/                 # Arquivos públicos, como o favicon
├── src/
│   ├── assets/             # Fotos, logos, imagens de projetos e certificados
│   ├── components/         # Navegação, modais e outros componentes reutilizáveis
│   ├── data/               # Dados de projetos, cursos e competências
│   ├── i18n/               # Configuração e traduções em português e inglês
│   ├── lib/                # Leitura e gravação de preferências do navegador
│   ├── sections/           # Apresentação, sobre, projetos, experiências e contato
│   ├── styles/             # Temas, estilos globais e CSS do portfólio
│   ├── types/              # Declarações de tipos auxiliares
│   ├── App.tsx             # Composição das seções e controle de tema
│   └── main.tsx            # Ponto de entrada da aplicação
├── index.html              # HTML inicial e metadados do site
├── package.json            # Dependências e scripts
└── vite.config.ts          # Configuração do Vite e do build
```

## Personalização

| O que atualizar | Onde editar |
| --- | --- |
| Projetos, categorias, imagens, tecnologias e links | [src/data/projects.ts](./src/data/projects.ts) |
| Cursos e certificados | [src/data/courses.ts](./src/data/courses.ts) |
| Grupos de competências e tecnologias | [src/data/stack.ts](./src/data/stack.ts) |
| Textos em português | [src/i18n/locales/pt/translations.json](./src/i18n/locales/pt/translations.json) |
| Textos em inglês | [src/i18n/locales/en/translations.json](./src/i18n/locales/en/translations.json) |
| Cores dos temas | [src/styles/themes.ts](./src/styles/themes.ts) |
| Layout e estilos das seções | [src/styles/portfolio.css](./src/styles/portfolio.css) |
| Estilos globais e fontes | [src/styles/GlobalStyle.ts](./src/styles/GlobalStyle.ts) |
| Links de redes sociais | [src/components/SocialLinks/index.tsx](./src/components/SocialLinks/index.tsx) |
| E-mail, WhatsApp e informações de contato | [src/sections/Contact/index.tsx](./src/sections/Contact/index.tsx) |
| Título, descrição e metadados de compartilhamento | [index.html](./index.html) |

Ao adicionar um projeto ou curso, cadastre os dados no arquivo correspondente, inclua os arquivos em `src/assets/` e adicione as chaves de tradução nos dois idiomas. Os campos de texto em `src/data/` usam essas chaves para exibir o conteúdo traduzido.

As preferências de tema e idioma são armazenadas em `localStorage` pelas chaves `portfolio-theme` e `portfolio-language`. No primeiro acesso, o site usa o tema escuro e o idioma português.

## Contato

- [GitHub](https://github.com/RafaelBiatoAzevedo)
- [LinkedIn](https://www.linkedin.com/in/rafael-azevedo-530889195)
- [E-mail](mailto:rafaelazevedo321@gmail.com)
