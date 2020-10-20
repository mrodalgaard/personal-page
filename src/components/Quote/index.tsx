import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import analytics, { LogEvent } from '../../util/analytics';
import { AppColors } from '../../util/theme';
import { IQuote, Quotes } from './Quotes';

const Container = styled.div`
  border-left: 5px solid ${AppColors.grey};
  padding-left: 10px;
  user-select: none;
  transition: color 0.5s ease;

  &:hover {
    color: ${AppColors.secondary};
    cursor: pointer;
  }
`;

const AuthorText = styled.p`
  text-align: right;
  color: ${(props) => (props.color ? props.color : AppColors.primary)};
`;

interface IProps {
  color?: string;
  initialQuote?: IQuote;
}

const Quote = ({ color, initialQuote }: IProps) => {
  const quotes = new Quotes();
  const [quote, setQuote] = useState(
    initialQuote ? initialQuote : quotes.getRandomQuote()
  );

  const onClick = () => {
    setQuote(quotes.getRandomQuote());
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
