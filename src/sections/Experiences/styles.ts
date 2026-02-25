import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 8rem 8%;
`;

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

export const Content = styled.div`
  h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 3rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ContentTop = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const ContentTitle = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`;

export const Grid = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const LogoWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 4px;
  overflow: hidden;
`;

export const CompanyLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ExperienceItem = styled.div`
  background: ${({ theme }) => theme.colors.backgroundCard};
  padding: 2.2rem 3rem;
  border-radius: 12px;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.4rem;
    color: ${({ theme }) => theme.colors.text};
  }

  span {
    display: block;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textSoft};
  }

  ul {
    padding-left: 1.2rem;
    margin-top: 1rem;
  }

  li {
    margin-bottom: 0.6rem;
    color: ${({ theme }) => theme.colors.textSoft};
  }
`;
