import styled from "styled-components";

export const Section = styled.section`
  padding: 8rem 8%;
  min-height: 100vh;
  position: relative;

  background: url("/src/assets/Campus-I.jpg") center/cover no-repeat;

  &::before {
    content: "";
    position: absolute;
    inset: 0;

    background: rgba(0, 0, 0, 0.6);

    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 8rem 4%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 8rem 3%;
    min-height: 50vh;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 40vh;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    min-height: 100px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    position: relative;
    height: 100px;
  }
`;

export const Content = styled.div`
  h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 3rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    h2 {
      margin-bottom: 2rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    h2 {
      margin-bottom: 1rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    h2 {
      margin-bottom: 0.5rem;
    }
    position: absolute;
    top: -60px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
  }
`;

export const EducationItem = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 1rem;
  }
`;

export const Logo = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 8px;
  object-fit: contain;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 80px;
    height: 80px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 70px;
    height: 70px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 50px;
    height: 50px;
  }
`;

export const Info = styled.div`
  h3 {
    font-size: 1.3rem;
    margin-bottom: 0.4rem;
    color: #f9fafb;
  }

  span {
    display: block;
    font-weight: 500;
    color: #9ca3af;
  }

  p {
    margin-top: 0.5rem;
    font-size: 1rem;
    color: #9ca3af;
  }
`;
