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
  transition: all 0.3s ease;

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

export const MenuItem = styled.a<{ $active?: boolean }>`
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;

  color: ${({ theme, $active }) =>
    $active ? theme.colors.primary : theme.colors.textSoft};

  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

export const ThemeSwitch = styled.button`
  width: 52px;
  height: 26px;

  background: ${({ theme }) => theme.colors.border};

  border-radius: 20px;
  border: none;

  position: relative;
  cursor: pointer;

  display: flex;
  align-items: center;

  transition: 0.3s;
`;

export const SwitchCircle = styled.span<{ themeMode: string }>`
  width: 22px;
  height: 22px;

  background: ${({ theme }) => theme.colors.primary};

  border-radius: 50%;

  position: absolute;
  top: 2px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 12px;

  left: ${({ themeMode }) => (themeMode === "dark" ? "2px" : "28px")};

  transition: all 0.3s ease;
`;

export const LanguageButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  font-size: 0.9rem;
  font-weight: 600;

  color: ${({ theme }) => theme.colors.textSoft};

  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
