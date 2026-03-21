import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 8rem 8%;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 8rem 4%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 8rem 3%;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 8rem;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 4rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  max-width: 800px;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSoft};
  margin: 0px 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin: 0px 1rem;
    line-height: 1.6;
  }
`;

export const SoftSkillsContainer = styled.div`
  margin: 2.5rem 2rem;
`;

export const SoftSkillsTitle = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  gap: 1rem;
`;

export const SkillItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.primary};
    flex-shrink: 0;
  }

  span {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textSoft};
  }
`;

export const StackContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1.5rem;
`;

export const StackCategory = styled.div``;

export const StackTitle = styled.h3`
  margin-bottom: 0.6rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const IconsRow = styled.div`
  display: flex;
  gap: 2.4rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.textSoft};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 1.9rem;
  }
`;

export const Stats = styled.div`
  align-items: center;
  justify-content: space-around;
  display: flex;
  margin-top: 4rem;
`;

export const StatItem = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const StatNumber = styled.span`
  font-size: 5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 4rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 3rem;
  }
`;

export const StatLabel = styled.span`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textSoft};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;
