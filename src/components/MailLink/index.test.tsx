import { render } from '@testing-library/react';
import React from 'react';
import MailLink from '.';

describe('MailLink', () => {
  it('renders', () => {
    const { container } = render(<MailLink href="#" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
