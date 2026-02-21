import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  width: 100%;
`;

export const BackTopButton = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;

  width: 42px;
  height: 42px;

  border-radius: 50%;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.primary}90;
  color: ${({ theme }) => theme.colors.textSoft};

  cursor: pointer;
  transition: 0.3s ease;

  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: translateY(-3px);
  }

  svg {
    font-size: 1.1rem;
  }
`;

export const Container = styled.footer`
  padding: 3rem 2rem 1rem 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Content = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    opacity: 0.8;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.textSoft};
  }
`;

export const CompanyInfo = styled.div`
  margin-top: 4rem;
  font-size: 0.8rem;
  line-height: 1.6;
  text-align: center;
  color: ${({ theme }) => theme.colors.textSoft};

  strong {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Copy = styled.p`
  text-align: center;
  margin-top: 3rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textSoft};
`;
