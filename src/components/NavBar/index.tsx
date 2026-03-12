import {
  Container,
  Logo,
  LogoWrapper,
  Menu,
  MenuItem,
  SwitchCircle,
  ThemeSwitch,
} from "./styles";

import profile from "../../assets/caricature.png";

interface NavbarProps {
  toggleTheme: () => void;
  theme: string;
}

export const Navbar = ({ toggleTheme, theme }: NavbarProps) => {
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

      <ThemeSwitch onClick={toggleTheme}>
        <SwitchCircle themeMode={theme}>
          {theme === "dark" ? "🌙" : "☀️"}
        </SwitchCircle>
      </ThemeSwitch>
    </Container>
  );
};
