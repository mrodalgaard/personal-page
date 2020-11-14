import { render } from '@testing-library/react';
import React from 'react';
import Link from '.';

describe('Link', () => {
  it('renders', () => {
    const { container } = render(<Link href="#">Mock</Link>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
