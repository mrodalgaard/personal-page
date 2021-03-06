import React from 'react';
import { render } from 'util/test-utils';
import PlayButton from '.';

describe('PlayButton', () => {
  it('renders', () => {
    const { container } = render(<PlayButton></PlayButton>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
