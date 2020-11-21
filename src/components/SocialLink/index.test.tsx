import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import React from 'react';
import { render } from 'util/test-utils';
import SocialLink from '.';

describe('SocialLink', () => {
  it('renders', () => {
    const { container } = render(<SocialLink href="#" icon={faGithub} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
