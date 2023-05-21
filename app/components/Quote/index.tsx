import styled from 'styled-components';
import { AnalyticsEvent, logEvent } from 'utils/analytics';
import useQuote, { IQuote } from './useQuote';

const QuoteFigure = styled.div`
  border-left: 5px solid ${({ theme }) => theme.grey};
  padding-left: 10px;
  user-select: none;
  transition: color 0.5s ease;

  &:hover {
    color: ${({ theme }) => theme.secondary};
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
  margin-top: 8px;
  color: ${({ color, theme }) => (color ? color : theme.primary)};

  &::before {
    content: '—';
  }
`;

export default function Quote({ color, initialQuote }: { color?: string; initialQuote?: IQuote }) {
  const [quote, nextQuote] = useQuote({ initialQuote });

  const onClick = () => {
    nextQuote();
    logEvent(AnalyticsEvent.QuoteClick);
  };

  return (
    <QuoteFigure onClick={onClick}>
      <QuoteContent>{quote.text}</QuoteContent>
      <figcaption>
        <Author color={color}>{quote.author}</Author>
      </figcaption>
    </QuoteFigure>
  );
}
