import { render } from '@testing-library/react';
import React from 'react';
import Background from '.';
import { AppBackground } from '../../util/constants';
import AppContext, { initialState } from '../App/AppContext';

describe('Background', () => {
  it('renders', () => {
    const { container } = render(
      <AppContext.Provider value={initialState}>
        <Background />
      </AppContext.Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders using other background', () => {
    const initialStateMock = {
      ...initialState,
      background: AppBackground.greyscale,
    };

    const { container } = render(
      <AppContext.Provider value={initialStateMock}>
        <Background />
      </AppContext.Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
