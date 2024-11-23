import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 ${({ theme }) => theme.spacing(0.5)};
`;

export const Spacer = () => {
  return <Container>|</Container>;
};
