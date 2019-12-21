import { mount } from 'enzyme';
import * as React from 'react';
import Envelope from '.';
import AppContext, { initialState } from '../App/AppContext';

describe('Envelope', () => {
  it('renders', () => {
    const wrapper = mount(
      <AppContext.Provider value={initialState}>
        <Envelope />
      </AppContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
