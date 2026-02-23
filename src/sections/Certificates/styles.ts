import styled from "styled-components";

export const Section = styled.section`
  padding: 4rem 8%;
`;

export const Container = styled.div`
  max-width: 100%;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const FeaturedCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  padding: 2.5rem;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const MainFeaturedLeft = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const MainCertificateImage = styled.img`
  width: 60%;
  border-radius: 8px;
`;

export const CertificateImage = styled.img`
  width: 100%;
  border-radius: 6px;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ActionButton = styled.a`
  display: flex;
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

export const MainFeaturedRight = styled.div`
  h2 {
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const MainCertificateList = styled.ul`
  padding-left: 1.2rem;

  li {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.textSoft};
    font-size: 1.2rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const FeaturedLeft = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FeaturedRight = styled.div`
  h4 {
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const CertificateList = styled.ul`
  padding-left: 1.2rem;

  li {
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.textSoft};
  }
`;
