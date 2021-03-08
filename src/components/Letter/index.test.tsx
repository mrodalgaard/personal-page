import AppContext, { initialState } from 'components/App/AppContext';
import { IQuote } from 'components/Quote/useQuote';
import React from 'react';
import { fireEvent, render, screen } from 'util/test-utils';
import Letter from '.';

describe('Letter', () => {
  const quote: IQuote = {
    author: 'Author',
    text: 'Text',
  };

  it('renders', () => {
    const { container } = render(
      <AppContext.Provider value={initialState}>
        <Letter initialQuote={quote} />
      </AppContext.Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('can click color link', () => {
    const toggleBackground = jest.fn();
    const toggleColor = jest.fn();
    const initialStateMock = { ...initialState, toggleBackground, toggleColor };

    render(
      <AppContext.Provider value={initialStateMock}>
        <Letter animate={false} initialQuote={quote} />
      </AppContext.Provider>
    );
    expect(toggleBackground.mock.calls.length).toBe(0);
    expect(toggleColor.mock.calls.length).toBe(0);

    fireEvent.click(screen.getByText('colors'));

    expect(toggleBackground.mock.calls.length).toBe(1);
    expect(toggleColor.mock.calls.length).toBe(1);
  });
});
