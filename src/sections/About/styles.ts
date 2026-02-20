import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 8rem 8%;
`;

export const Content = styled.div`
  display: flex;
  gap: 8rem;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  max-width: 800px;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSoft};
  margin: 0px 2rem;
`;

export const SoftSkillsContainer = styled.div`
  margin: 2.5rem 2rem;
`;

export const SoftSkillsTitle = styled.div`
  font-size: 1.8rem;
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
`;

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
`;

export const StatLabel = styled.span`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textSoft};
`;
