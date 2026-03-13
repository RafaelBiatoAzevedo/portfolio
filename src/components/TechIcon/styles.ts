import styled from "styled-components";
export const IconItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    font-size: 2rem;
    transition: 0.3s;
  }

  &:hover svg {
    transform: translateY(-5px);
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover span {
    opacity: 1;
    transform: translateY(-8px);
  }
`;

export const Tooltip = styled.span`
  position: absolute;
  bottom: -35px;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  padding: 3px 8px;
  font-size: 0.75rem;
  border-radius: 6px;
  white-space: nowrap;

  opacity: 0;
  transform: translateY(0);
  transition: 0.3s;

  border: 1px solid ${({ theme }) => theme.colors.primary}33;
`;
