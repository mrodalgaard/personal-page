import { mount } from 'enzyme';
import React from 'react';
import Letter from '.';
import AppContext, { initialState } from '../App/AppContext';
import { IQuote } from '../Quote/Quotes';

describe('Letter', () => {
  const quote: IQuote = {
    author: 'Author',
    text: 'Text',
  };

  it('renders', () => {
    const wrapper = mount(
      <AppContext.Provider value={initialState}>
        <Letter initialQuote={quote} />
      </AppContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('can click color link', () => {
    const toggleBackground = jest.fn();
    const toggleColor = jest.fn();
    const initialStateMock = { ...initialState, toggleBackground, toggleColor };

    const wrapper = mount(
      <AppContext.Provider value={initialStateMock}>
        <Letter initialQuote={quote} />
      </AppContext.Provider>
    );
    expect(toggleBackground.mock.calls.length).toBe(0);
    expect(toggleColor.mock.calls.length).toBe(0);

    wrapper
      .find('Link')
      .last()
      .simulate('click');

    expect(toggleBackground.mock.calls.length).toBe(1);
    expect(toggleColor.mock.calls.length).toBe(1);
  });
});
