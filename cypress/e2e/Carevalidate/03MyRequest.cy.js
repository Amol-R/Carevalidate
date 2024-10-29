///<reference types = "cypress"/>

import data from '../../fixtures/example.json'

describe('Suit 02', () => {

    it('Confirm the submission', () => {
        cy.login(data.email, data.emailpassword)
        cy.wait(5000)

        cy.get('.q-btn__content > .q-icon').click()
        cy.wait(2000)
        cy.get('.q-drawer').contains('My Requests').click()
        cy.wait(5000)

        cy.get('tbody').contains('tr', "Oct 29").then(tabrow => {
            cy.wrap(tabrow).find('td').eq(5).should('contain', 'Submitted')
        })

        cy.wait(1000)
        cy.logout()
    })
})