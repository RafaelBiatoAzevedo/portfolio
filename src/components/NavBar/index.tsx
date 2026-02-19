import { Container, Logo, LogoWrapper, Menu, MenuItem } from "./styles";

import profile from "../../assets/logoAnime.png";

export const Navbar = () => {
  return (
    <Container>
      <LogoWrapper>
        <Logo src={profile} alt="Rafael anime" />
      </LogoWrapper>

      <Menu>
        <MenuItem>Início</MenuItem>
        <MenuItem>Sobre</MenuItem>
        <MenuItem>Projetos</MenuItem>
        <MenuItem>Contato</MenuItem>
      </Menu>
    </Container>
  );
};
