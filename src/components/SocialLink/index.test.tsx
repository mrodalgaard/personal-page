import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { shallow } from 'enzyme';
import React from 'react';
import SocialLink from '.';

describe('SocialLink', () => {
  it('renders', () => {
    const wrapper = shallow(<SocialLink href="#" icon={faGithub} />);
    expect(wrapper).toMatchSnapshot();
  });
});
