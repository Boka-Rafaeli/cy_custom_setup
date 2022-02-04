describe('login', () => {
  it('should be able to login', () => {
    cy.visit('https://www.facebook.com/');

    // cy.get('[data-testid="field-email"]').type('johndoe@gmail.com');
    //
    // cy.get('[data-testid="field-password"]').type('helloworld123!');
    //
    // cy.get('[data-testid="login-button"]').click();
    //
    // cy.location('pathname').should('eq', '/home');
  });
});
