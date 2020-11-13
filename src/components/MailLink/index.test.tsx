import { shallow } from 'enzyme';
import React from 'react';
import MailLink from '.';

describe('MailLink', () => {
  it('renders', () => {
    const wrapper = shallow(<MailLink href="#" />);
    expect(wrapper).toMatchSnapshot();
  });
});
