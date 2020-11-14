import { render } from '@testing-library/react';
import React from 'react';
import Envelope from '.';
import AppContext, { initialState } from '../App/AppContext';

describe('Envelope', () => {
  it('renders', () => {
    const { container } = render(
      <AppContext.Provider value={initialState}>
        <Envelope />
      </AppContext.Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
