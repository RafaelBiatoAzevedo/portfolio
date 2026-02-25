import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 8rem 8%;
`;

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const CourseCard = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2.5rem;
  border-radius: 16px;
  //border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const CourseTitle = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2rem;
`;

export const CourseContent = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 2rem;
`;

export const LogoWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex: 1;
`;

export const CourseLogo = styled.img`
  width: 50%;
  object-fit: contain;
`;

export const CourseInfo = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  flex: 1;

  h3 {
    font-size: 1.4rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.textSoft};
  }

  h3:last-of-type {
    text-align: start;
    margin-top: 3rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textSoft};
  }
`;

export const ContentsList = styled.ul`
  padding-left: 1.2rem;

  li {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.textSoft};
    font-size: 1.2rem;
  }
`;

export const MainCertificate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  flex: 1;
`;

export const MainCertificateImage = styled.img`
  width: 60%;
  border-radius: 8px;
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

export const ToggleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  cursor: pointer;
`;

export const ExpandableContainer = styled.div<{ $isOpen: boolean }>`
  overflow: hidden;
  transition: all 0.4s ease;
  max-height: ${({ $isOpen }) => ($isOpen ? "1000px" : "0")};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
`;

export const Grid = styled.div`
  display: grid;
  gap: 2rem;
  margin-top: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const FeaturedCard = styled.div`
  background: ${({ theme }) => theme.colors.backgroundCard};
  display: flex;
  flex-direction: row;

  padding: 1.5rem;
  gap: 1.5rem;
  border-radius: 8px;
  //border: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const CertificateImage = styled.img`
  width: 100%;
  border-radius: 6px;
`;

export const FeaturedLeft = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;
`;

export const FeaturedRight = styled.div`
  flex: 1;
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
