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

export const ProjectRow = styled.div<{ reverse?: boolean }>`
  display: flex;
  gap: 4rem;
  margin-bottom: 6rem;

  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  padding: 3rem 0px;
`;

export const ProjectContent = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    margin-right: 10px;
    font-size: 0.8rem;
  }

  p {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.textSoft};
  }
`;

export const ActionButton = styled.a`
  width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0.6rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  text-decoration: none;

  background: ${({ theme }) => theme.colors.primary};
  color: white;

  transition: 0.3s ease;

  &:hover {
    opacity: 0.85;
  }
`;

export const IconsRow = styled.div`
  display: flex;
  gap: 2.4rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.textSoft};
  margin-bottom: 1rem;
`;

export const DescriptionListWrapper = styled.div`
  padding: 1rem 2rem;

  li {
    font-size: 0.9rem;
    margin-bottom: 0.7rem;
    color: ${({ theme }) => theme.colors.textSoft};
  }
`;

export const Carousel = styled.div`
  flex: 1;
  min-width: 0;

  .swiper {
    width: 100%;
    height: 100%;
  }

  img {
    width: 700px;
    height: 400px;
    object-fit: contain;
  }
`;
