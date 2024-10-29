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
    cy.get('[data-testid="continue"] > .q-btn__content').click()
    // cy.get('.oxd-button').click()
   
 })