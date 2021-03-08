import React from 'react';
import { render } from 'util/test-utils';
import { default as Typewriter } from '.';

describe('Typewriter', () => {
  it('renders', () => {
    const { container } = render(
      <Typewriter>
        <p>Hello</p>
        <p>World</p>
      </Typewriter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
