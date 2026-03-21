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
    padding: 8rem 3%;
    min-height: 40vh;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    padding: 8rem 3%;
    min-height: 100px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const Content = styled.div`
  h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 3rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const EducationItem = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const Logo = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 8px;
  object-fit: contain;
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
