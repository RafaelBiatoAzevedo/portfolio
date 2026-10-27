import { createGlobalStyle } from "styled-components";
import "@fontsource/inter-tight/latin-400.css";
import "@fontsource/inter-tight/latin-500.css";
import "@fontsource/inter-tight/latin-600.css";
import "@fontsource/inter-tight/latin-700.css";
import "@fontsource/space-grotesk/latin-400.css";
import "@fontsource/space-grotesk/latin-500.css";
import "@fontsource/space-grotesk/latin-600.css";
import "@fontsource/space-grotesk/latin-700.css";

export const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: ${({ theme }) => theme.colors.background === "#101110" ? "dark" : "light"};
    --bg: ${({ theme }) => theme.colors.background};
    --surface: ${({ theme }) => theme.colors.surface};
    --card: ${({ theme }) => theme.colors.backgroundCard};
    --accent: ${({ theme }) => theme.colors.primary};
    --text: ${({ theme }) => theme.colors.text};
    --muted: ${({ theme }) => theme.colors.textSoft};
    --line: ${({ theme }) => theme.colors.border};
    --accent-ink: ${({ theme }) => theme.colors.background === "#101110" ? "#101110" : "#ffffff"};
  }
  *, *::before, *::after { box-sizing: border-box; }
  * { margin: 0; padding: 0; }
  html { font-size: 16px; scroll-behavior: smooth; scroll-padding-top: 110px; }
  body { background: var(--bg); color: var(--text); font-family: "Inter Tight", sans-serif; -webkit-font-smoothing: antialiased; transition: background-color .25s, color .25s; }
  button, input, textarea { font: inherit; }
  button, a { -webkit-tap-highlight-color: transparent; }
  button { color: inherit; background: none; border: 0; cursor: pointer; }
  a { color: inherit; text-decoration: none; }
  img { display: block; max-width: 100%; }
  svg { flex-shrink: 0; }
  h1, h2, h3, h4 { font-family: "Space Grotesk", sans-serif; font-weight: 500; }
  ::selection { background: var(--accent); color: var(--accent-ink); }
  :focus-visible { outline: 2px solid var(--accent); outline-offset: 5px; }
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; }
  }
`;
