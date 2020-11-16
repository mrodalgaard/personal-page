import { render } from '@testing-library/react';
import AppContext, { initialState } from 'components/App/AppContext';
import React from 'react';
import Envelope from '.';

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
