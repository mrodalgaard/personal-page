import styled from 'styled-components';

export const EnvelopeTop = styled.div`
  display: flex;
  place-items: start;
  gap: ${({ theme }) => theme.spacing(0.5)};

  *:last-child {
    margin-left: auto;
  }
`;
