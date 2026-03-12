import {
  ActionsWrapper,
  Container,
  LanguageButton,
  Logo,
  LogoWrapper,
  Menu,
  MenuItem,
  SwitchCircle,
  ThemeSwitch,
} from "./styles";
import { useTranslation } from "react-i18next";

import profile from "../../assets/caricature.png";

interface NavbarProps {
  toggleTheme: () => void;
  theme: string;
}

export const Navbar = ({ toggleTheme, theme }: NavbarProps) => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    console.log("oioi", i18n);
    const newLang = i18n.language === "pt" ? "en" : "pt";

    i18n.changeLanguage(newLang);
    localStorage.setItem("portfolio-language", newLang);
  };

  return (
    <Container>
      <LogoWrapper>
        <Logo src={profile} alt="Rafael caricature" />
      </LogoWrapper>

      <Menu>
        <MenuItem>Início</MenuItem>
        <MenuItem>Sobre</MenuItem>
        <MenuItem>Projetos</MenuItem>
        <MenuItem>Experiência</MenuItem>
        <MenuItem>Formação</MenuItem>
        <MenuItem>Certificados</MenuItem>
        <MenuItem>Contato</MenuItem>
      </Menu>

      <ActionsWrapper>
        <ThemeSwitch onClick={toggleTheme}>
          <SwitchCircle themeMode={theme}>
            {theme === "dark" ? "🌙" : "☀️"}
          </SwitchCircle>
        </ThemeSwitch>

        <LanguageButton onClick={toggleLanguage}>
          {i18n.language === "pt" ? "🇧🇷 PT" : "🇺🇸 EN"}
        </LanguageButton>
      </ActionsWrapper>
    </Container>
  );
};
