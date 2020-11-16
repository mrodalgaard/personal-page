import React from 'react';
import styled from 'styled-components';
import analytics, { LogEvent } from 'util/analytics';
import useQuote, { IQuote } from './useQuote';

const Container = styled.div`
  border-left: 5px solid ${({ theme }) => theme.grey};
  padding-left: 10px;
  user-select: none;
  transition: color 0.5s ease;

  &:hover {
    color: ${({ theme }) => theme.secondary};
    cursor: pointer;
  }
`;

const AuthorText = styled.p`
  text-align: right;
  color: ${({ color, theme }) => (color ? color : theme.primary)};
`;

interface IProps {
  color?: string;
  initialQuote?: IQuote;
}

const Quote = ({ color, initialQuote }: IProps) => {
  const [quote, nextQuote] = useQuote({ initialQuote });

  const onClick = () => {
    nextQuote();
    analytics.logEvent(LogEvent.QuoteClick);
  };

  return (
    <Container onClick={onClick}>
      <i>{`"${quote.text}"`}</i>
      <AuthorText color={color}>- {quote.author}</AuthorText>
    </Container>
  );
};

export default Quote;
