import styled from "styled-components";

export const Links = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 3rem;
`;

export const SocialButton = styled.a`
  width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.primary};

  font-size: 1.4rem;

  border: 1px solid ${({ theme }) => theme.colors.primary}33;

  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;

    box-shadow:
      0 0 15px ${({ theme }) => theme.colors.primary}66,
      0 0 30px ${({ theme }) => theme.colors.primary}33;
  }
`;
