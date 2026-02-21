import styled from "styled-components";

export const Section = styled.section`
  padding: 4rem 8%;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: contain;
`;

export const Info = styled.div`
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

  p {
    margin-top: 0.5rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textSoft};
  }
`;
