import styled from 'styled-components';
import { AnalyticsEvent, logEvent } from 'utils/analytics';
import { IQuote, useQuote } from './useQuote';

const QuoteFigure = styled.div`
  border-left: ${({ theme }) => theme.spacing(0.5)} solid ${({ theme }) => theme.colors.primary};
  padding-left: ${({ theme }) => theme.spacing(1)};
  user-select: none;
  transition: color 0.5s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    cursor: pointer;
  }
`;

const QuoteContent = styled.blockquote`
  margin: 0;
  font-style: italic;

  &::before {
    content: '“';
  }

  &::after {
    content: '”';
  }
`;

const Author = styled.cite`
  display: block;
  text-align: right;
  margin-top: ${({ theme }) => theme.spacing(1)};
  color: ${({ theme }) => (theme.colorized ? theme.colors.secondary : theme.colors.text)};

  &::before {
    content: '—';
  }
`;

export const Quote = ({ initialQuote }: { initialQuote?: IQuote }) => {
  const [quote, nextQuote] = useQuote({ initialQuote });

  const onClick = () => {
    nextQuote();
    logEvent(AnalyticsEvent.QuoteClick);
  };

  return (
    <QuoteFigure onClick={onClick}>
      <QuoteContent>{quote.text}</QuoteContent>
      <figcaption>
        <Author>{quote.author}</Author>
      </figcaption>
    </QuoteFigure>
  );
};
