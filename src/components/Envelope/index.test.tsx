import React from 'react';
import { render } from 'util/test-utils';
import Envelope from '.';

describe('Envelope', () => {
  it('renders', () => {
    const { container } = render(<Envelope />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
