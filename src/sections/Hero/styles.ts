import styled from "styled-components";

export const BackgroundImage = styled.img`
  position: absolute;

  right: -5%;
  top: 50%;
  transform: translateY(-50%);

  width: 45%;
  height: 100%;

  object-fit: cover;
  object-position: center -20%;

  opacity: 0.9;

  z-index: 0;

  /* Faz a imagem desaparecer nas bordas */
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 25%,
    black 75%,
    transparent 100%
  );

  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 25%,
    black 75%,
    transparent 100%
  );

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 50%;
    object-position: center -60%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 50%;
    object-position: center 0%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    height: 70%;

    right: 0;
    top: 0;
    transform: none;

    object-fit: cover;
    object-position: center -5%;

    -webkit-mask-image: linear-gradient(
      to bottom,
      black 0%,
      black 55%,
      transparent 100%
    );

    mask-image: linear-gradient(
      to bottom,
      black 0%,
      black 55%,
      transparent 100%
    );
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 65%;
    object-position: center -10%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    height: 60%;
    object-position: center -40%;
  }
`;

export const Section = styled.section`
  width: 100%;
  height: 100dvh;
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
    width: 70%;
    height: 100%;

    background: linear-gradient(
      to left,
      ${({ theme }) => theme.colors.primary}30,
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

    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 70%;

      background: linear-gradient(
        to bottom,
        ${({ theme }) => theme.colors.primary}30,
        transparent
      );

      pointer-events: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 0px;
  }
`;

export const Content = styled.div`
  flex: 0.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex: none;
    width: 100%;
    margin-top: auto;

    flex-direction: column;
    text-align: center;
  }
`;

export const Greeting = styled.h1`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.textSoft};
`;

export const Title = styled.h1`
  font-size: 5rem;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 3.8rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textSoft};
  margin-bottom: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`;

export const Description = styled.p`
  font-size: 1.3rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textSoft};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0px 4rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0px 2rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin: 4rem 0px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 2rem 0px;
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
