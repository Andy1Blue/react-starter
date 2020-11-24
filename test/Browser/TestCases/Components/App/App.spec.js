describe('App component tests', () => {
  it('visits the app', () => {
    cy.visit('/');
  });

  it('should display title and paragraph', () => {
    cy.get('h1').contains("It's React Starter from React! We love TypeScript!");
  });

  it('should display app version in red color', () => {
    cy.get('.app-version').contains('App version: 1.0');
    cy.get('.app-version').should('have.css', 'color', 'rgb(255, 0, 0)');
  });
});
