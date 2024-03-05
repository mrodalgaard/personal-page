import styled from 'styled-components';

const Container = styled.header`
  align-self: center;
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  line-height: 1.5rem;
`;

export default function EnvelopeMiddle({ children }: { children?: React.ReactNode }) {
  return (
    <Container>
      <Heading>{children}</Heading>
    </Container>
  );
}
