describe('App component tests', () => {
  it('visits the app', () => {
    cy.visit('/');
  });

  it('should display title and subtitle', () => {
    cy.get('.app .app__title').contains('Hello 👋');
    cy.get('.app .app__subtitle').contains("It's your React Starter!");
  });

  it('should display app version in red color', () => {
    cy.get('.app .app__version--red').contains('App version: 1.0');
    cy.get('.app .app__version--red').should('have.css', 'color', 'rgb(255, 0, 0)');
  });
});
