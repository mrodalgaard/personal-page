import React from 'react';
import { render } from 'util/test-utils';
import Link from '.';

describe('Link', () => {
  it('renders', () => {
    const { container } = render(<Link href="#">Mock</Link>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
