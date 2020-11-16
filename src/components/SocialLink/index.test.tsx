import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { render } from '@testing-library/react';
import React from 'react';
import SocialLink from '.';

describe('SocialLink', () => {
  it('renders', () => {
    const { container } = render(<SocialLink href="#" icon={faGithub} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
