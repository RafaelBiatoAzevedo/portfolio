import { Container, Logo, LogoWrapper, Menu, MenuItem } from "./styles";

import profile from "../../assets/caricature.png";

export const Navbar = () => {
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
    </Container>
  );
};
