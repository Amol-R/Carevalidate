///<reference types = "cypress"/>

import data from '../../fixtures/example.json'


describe('Validate Login page', () => {

    it('With Valide credentials', () => {
        cy.login(data.email, data.emailpassword)
        cy.wait(6000)
        cy.url().should('contain', 'accommodations/request')
        cy.logout()
    
    })

    it('With Invalide credentials', () => {

        cy.login(data.WRemail, data.WRemailpassword)
        cy.get('.text-caption').should('contain','Invalid email or password')

    })


})