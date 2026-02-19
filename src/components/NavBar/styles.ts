import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 8%;
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  z-index: 1000;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
`;

export const Menu = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
`;

export const MenuItem = styled.li`
  font-size: 0.95rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textSoft};
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
