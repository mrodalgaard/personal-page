import Paper from 'components/Paper';
import styled from 'styled-components';
import EnvelopeMiddle from './EnvelopeMiddle';
import EnvelopeTop from './EnvelopeTop';

const EnvelopeFlap = styled.div`
  border-bottom: 60px solid ${({ theme }) => theme.colors.primary};
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
`;

const EnvelopeBody = styled(Paper)`
  display: flex;
  flex-direction: column;
  height: ${({ theme }) => theme.envelopeHeight}px;
  padding: 5px;
`;

export { EnvelopeTop, EnvelopeMiddle };

export default function Envelope({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <EnvelopeFlap />
      <EnvelopeBody>{children}</EnvelopeBody>
    </>
  );
}
