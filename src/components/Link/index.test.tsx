import { shallow } from 'enzyme';
import React from 'react';
import Link from '.';

describe('Link', () => {
  it('renders', () => {
    const wrapper = shallow(<Link href="#">Mock</Link>);
    expect(wrapper).toMatchSnapshot();
  });
});
