///<reference types = "cypress"/>

import data from '../../fixtures/example.json'


describe('Validate with Valide credentials', () => {

    it('TC01', () => {
        cy.login(data.email, data.emailpassword)

    })

    it('Validate with Invalide credentials', () => {

        cy.login(data.WRemail, data.WRemailpassword)

    })


})