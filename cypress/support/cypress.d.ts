import { mount } from 'cypress/react18';

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
      getTestId(selector: string): Chainable<Subject>;
      getAria(selector: string): Chainable<Subject>;
      color(color?: string | string[], property: string = 'color'): Chainable<Subject>;
      matchMedia(query?: string, matches = true): Chainable<(event: MediaQueryListEvent) => void>;
      injectAxeAndVisit(url: string, callback?: () => void);
    }
  }
}
