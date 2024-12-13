// ***********************************************************
// This example support/component.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import '@cypress/code-coverage/support';
import { AppContextProvider } from 'contexts/AppContext';
import { ThemeContextProvider } from 'contexts/ThemeContext';
import { mount } from 'cypress/react18';
import './commands';

// Custom mount command with context providers
Cypress.Commands.add('mount', (component, options) => {
  return mount(
    <AppContextProvider>
      <ThemeContextProvider>{component}</ThemeContextProvider>
    </AppContextProvider>,
    options
  );
});
