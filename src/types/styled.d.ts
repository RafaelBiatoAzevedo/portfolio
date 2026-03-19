import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      backgroundCard: string;
      surface: string;
      primary: string;
      secondary: string;
      text: string;
      textSoft: string;
      border: string;
    };

    breakpoints: {
      smallMobile: string;
      mobile: string;
      tablet: string;
      laptop: string;
      desktop: string;
      fullhd: string;
    };
  }
}
