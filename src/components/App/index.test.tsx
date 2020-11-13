import { shallow } from 'enzyme';
import React from 'react';
import App from '.';

describe('App', () => {
  it('renders', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
