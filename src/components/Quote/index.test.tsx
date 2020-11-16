import React from 'react';
import { fireEvent, render, screen } from 'util/test-utils';
import Quote from '.';
import { IQuote } from './useQuote';

describe('Quote', () => {
  const quote: IQuote = {
    author: 'Author',
    text: 'Text',
  };
  const text = '"Text"';

  it('renders', () => {
    const { container } = render(<Quote initialQuote={quote} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('can select a different quote', () => {
    render(<Quote initialQuote={quote} />);
    expect(screen.queryByText(text)).toBeInTheDocument();
    fireEvent.click(screen.getByText(text));
    expect(screen.queryByText(text)).not.toBeInTheDocument();
  });
});
