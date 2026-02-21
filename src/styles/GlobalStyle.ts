import { createGlobalStyle } from "styled-components";

import "@fontsource/inter-tight/400.css";
import "@fontsource/inter-tight/500.css";
import "@fontsource/inter-tight/600.css";
import "@fontsource/inter-tight/700.css";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 14px;
    scroll-behavior: smooth;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: "Inter Tight", sans-serif;
    -webkit-font-smoothing: antialiased;
    transition: background 0.3s ease, color 0.3s ease;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Inter Tight", sans-serif;
    font-weight: 700;
    letter-spacing: 1.5px;
  }

  /* span, p {
    letter-spacing: 1px;
  } */

  button {
    font-family: "Inter Tight", sans-serif;
    cursor: pointer;
    border: none;
    background: none;
    color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: ${({ theme }) => theme.resolutions.medium}) {
    html {
      font-size: 12px;
    }
  }

  @media (max-width: ${({ theme }) => theme.resolutions.small}) {
    html {
      font-size: 10px;
    }
  }

  @media (max-width: ${({ theme }) => theme.resolutions.tablet}) {
    html {
      font-size: 9px;
    }
  }
`;
