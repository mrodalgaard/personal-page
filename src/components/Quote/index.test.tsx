import { shallow } from 'enzyme';
import React from 'react';
import Quote from '.';
import { IQuote } from './useQuote';

describe('Quote', () => {
  const quote: IQuote = {
    author: 'Author',
    text: 'Text',
  };
  const textOutput = 'Text- Author';

  it('renders', () => {
    const wrapper = shallow(<Quote initialQuote={quote} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('can select a different quote', () => {
    const wrapper = shallow(<Quote initialQuote={quote} />);
    expect(wrapper.text().replace(/"/g, '')).toBe(textOutput);
    wrapper.simulate('click');
    expect(wrapper.text().replace(/"/g, '')).not.toBe(textOutput);
  });
});
