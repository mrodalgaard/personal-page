import React from 'react';
import { render } from 'util/test-utils';
import MailLink from '.';

describe('MailLink', () => {
  it('renders', () => {
    const { container } = render(<MailLink href="#" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
