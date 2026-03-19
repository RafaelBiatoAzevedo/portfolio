import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 8%;
  padding-top: 70px;

  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 60%;
    height: 100%;

    background: linear-gradient(
      to left,
      ${({ theme }) => theme.colors.primary}20,
      transparent
    );

    pointer-events: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0 4%;
    padding-top: 70px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 3%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: 50px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

export const Content = styled.div`
  flex: 1;
`;

export const ImageWrapper = styled.div`
  flex: 0.8;
  display: flex;
  justify-content: center;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    flex: 0.6;
  }
`;

export const ProfileImage = styled.img`
  width: 400px;
  max-width: 100%;
  border-radius: 20px;
  object-fit: cover;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 350px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 300px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 250px;
  }
`;

export const Greeting = styled.h1`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.textSoft};
`;

export const Title = styled.h1`
  font-size: 5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textSoft};
  margin-bottom: 2rem;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSoft};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0px 4rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin: 4rem 0px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

export const ButtonPrimary = styled.button`
  padding: 0.8rem 1.8rem;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border-radius: 0.5rem;
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
  border-radius: 0.5rem;
  font-weight: 600;
  transition: 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`;
