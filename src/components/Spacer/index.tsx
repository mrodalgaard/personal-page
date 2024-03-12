import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 4px;
`;

export const Spacer = () => {
  return <Container>|</Container>;
};
