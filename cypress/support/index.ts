import './commands'

// @ts-ignore
Cypress.Commands.add('dataCy', (value: string) => {
    return cy.get(`[data-cy=${value}]`)
})
