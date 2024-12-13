/// <reference types="cypress" />

Cypress.Commands.add('getTestId', (selector, ...args) => {
  return cy.get(`[data-test=${selector}]`, ...args);
});

Cypress.Commands.add('getAria', (selector, ...args) => {
  return cy.get(`[aria-label="${selector}"]`, ...args);
});

Cypress.Commands.add(
  'color',
  { prevSubject: 'element' },
  (subject, color?: string | string[], property: string = 'color') => {
    // Check each color if array
    if (Array.isArray(color)) {
      return cy
        .wrap(subject)
        .should('have.css', property)
        .and('satisfy', (value: string) => color.includes(value));
    }
    return cy.wrap(subject).should('have.css', property, color);
  }
);

Cypress.Commands.add('matchMedia', (query, matches = true) => {
  return cy.window().then((win) => {
    // Save all change listeners
    const changeListeners: ((event: MediaQueryListEvent) => void)[] = [];

    // Only stub match media with query if provided
    let stub;
    if (query) {
      stub = cy.stub(win, 'matchMedia').as('matchMedia').callThrough().withArgs(query);
    } else {
      stub = cy.stub(win, 'matchMedia').as('matchMedia');
    }

    // Return stubbed match media object with change listener callback
    stub.returns({
      matches,
      addEventListener: (type: string, listener: (event: MediaQueryListEvent) => void) => {
        if (type === 'change') {
          changeListeners.push(listener);
        }
      },
      removeEventListener: (type: string, listener: (event: MediaQueryListEvent) => void) => {
        if (type === 'change') {
          changeListeners.splice(changeListeners.indexOf(listener), 1);
        }
      },
    });

    Cypress.log({
      name: 'matchMedia',
      message: `matchMedia for query '${query}' = ${matches ? 'true' : 'false'}`,
    });

    // Return callback which calls all change listeners
    return (event: MediaQueryListEvent) => changeListeners.forEach((listener) => listener(event));
  });
});

Cypress.Commands.add('injectAxeAndVisit', (url) => {
  // Remove CSP from index.html to be able to inject axe
  cy.intercept<unknown, string>(url, (req) => {
    req.continue((res) => {
      res.body = res.body.replace("default-src 'self';", '');
    });
  }).as('removeCSP');

  // Visit url and inject axe accessibility tester
  cy.visit(url);
  cy.injectAxe();
});
