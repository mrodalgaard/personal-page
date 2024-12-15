describe('Personal Page', () => {
  const title = 'Martin Rodalgaard';

  it('renders initial web app', () => {
    cy.visit('/');

    cy.contains(title);
    cy.url().should('match', /^http(.+)\/$/);
    cy.contains('Electrical Engineering');
  });
});
