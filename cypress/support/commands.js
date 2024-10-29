// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, emailpassword) => {

    cy.visit('https://careglp-staging.carevalidate.com/login')
    cy.get('input[type="email"]').type(email)
    cy.get('.text-primary').click()
    cy.get('input[name="password"]').type(emailpassword)
    cy.get('button[type="submit"]').click()
    // cy.get('.oxd-button').click()

})

Cypress.Commands.add('logout', () => {
    cy.get('.block').click()
    cy.get('[data-testid="logout"] > .q-item__section').click()

})

Cypress.Commands.add('DOB', () => {
    cy.get(':nth-child(5) > div > .q-btn > .q-btn__content > .block').click()
    cy.get('.q-date__view > :nth-child(1) > .q-btn > .q-btn__content > .q-icon').click()
    cy.get('.q-date__view > :nth-child(1) > .q-btn > .q-btn__content > .q-icon').click()
    cy.get(':nth-child(15) > .q-btn > .q-btn__content > .block').click()
    cy.get('.relative-position.col > div > .q-btn > .q-btn__content > .block').click()
    cy.get(':nth-child(6) > .q-btn > .q-btn__content > .block').eq(0).click()
    cy.get(':nth-child(16) > .q-btn > .q-btn__content > .block').click()

})