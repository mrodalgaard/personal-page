import { Draggable, DraggableIcon } from 'components/Draggable';
import { Paper } from 'components/Paper';
import styled from 'styled-components';

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

export const Envelope = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Draggable>
      <EnvelopeFlap />
      <EnvelopeBody>
        {children}
        <DraggableIcon position="bottom-right" />
      </EnvelopeBody>
    </Draggable>
  );
};
