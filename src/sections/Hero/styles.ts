import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 8%;
  padding-top: 70px;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

export const Content = styled.div`
  flex: 1;
`;

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const ProfileImage = styled.img`
  width: 400px;
  max-width: 100%;
  border-radius: 20px;
  object-fit: cover;
  box-shadow:
    0 0 80px ${({ theme }) => theme.colors.primary}46,
    0 0 180px ${({ theme }) => theme.colors.primary}83;
  transition: 0.4s;

  /* &:hover {
    transform: translateY(-8px);
  } */
`;

export const Greeting = styled.h1`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.textSoft};
`;

export const Title = styled.h1`
  font-size: 5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textSoft};
  margin-bottom: 1.5rem;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSoft};
  margin-bottom: 2rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ButtonPrimary = styled.button`
  padding: 0.8rem 1.8rem;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border-radius: 8px;
  font-weight: 600;
  transition: 0.3s;

  &:hover {
    opacity: 0.85;
  }
`;

export const ButtonSecondary = styled.button`
  padding: 0.8rem 1.8rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  font-weight: 600;
  transition: 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`;

export const SocialLinks = styled.div`
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
