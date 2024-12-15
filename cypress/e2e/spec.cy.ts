import { darkColorsRgb, lightColorsRgb } from '../support/utils';

describe('Personal Page', () => {
  const title = 'Martin Rodalgaard';

  it('renders initial web app', () => {
    cy.visit('/');

    cy.contains(title);
    cy.url().should('match', /^http(.+)\/$/);
    cy.contains('Electrical Engineering');
  });

  it('shows content in light and dark mode', () => {
    [false, true].forEach((darkMode) => {
      const colors = darkMode ? darkColorsRgb : lightColorsRgb;

      cy.injectAxeAndVisit('/', () => {
        cy.matchMedia('(prefers-color-scheme: dark)', darkMode);
      });

      cy.contains(title).color(colors.text);
      cy.checkA11y();
    });
  });
});
