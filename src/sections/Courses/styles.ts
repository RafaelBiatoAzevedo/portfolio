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
