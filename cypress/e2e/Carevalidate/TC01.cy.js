///<reference types = "cypress"/>

import data from '../../fixtures/example.json'
import Homepage from '../PageObject/Homepage'

describe('test suit', () => {

    it('TC01', () => {

      const homepage = new Homepage()

        cy.visit('https://careglp-staging.carevalidate.com/login')
        cy.get('input[name="email"]').type(data.email)
        cy.get('.text-primary').click()
        cy.get('input[name="password"]').type(data.emailpassword)
        cy.get('button[type="submit"]').click()
        cy.wait(4000)
        cy.url().should('contain', 'accommodations/request')


        cy.contains('Weight Loss Eligibility Intake Form test').click()
        cy.wait(2000)
        cy.get('.q-field__inner').click()
        cy.wait(2000)

        cy.get('.justify-center .q-item__label').contains('Male').click()
        cy.contains('Continue').click()

        
        // cy.get('input[type="text"]').type('32, Yes')
        // cy.contains('Continue').click()

        homepage.inputeBox().type('32, Yes')
        homepage.continueClick()

        homepage.inputeBox().type('5ft,5in')
        homepage.continueClick()

        homepage.inputeBox().type('160')
        homepage.continueClick()

        cy.get(':nth-child(5) > .q-checkbox > .q-checkbox__inner > .q-checkbox__bg').click()
        homepage.continueClick()

        cy.get('.q-checkbox__label').contains('None of the above').click()
        homepage.continueClick()

        cy.get('.q-field__native').click()
        cy.get('.q-item__label').contains('Lose 1-20lbs for good ').click()
        homepage.continueClick()

       cy.contains('Dieting').click()
       homepage.continueClick()

       cy.get(':nth-child(5) > div > .q-btn > .q-btn__content > .block').click()
       cy.get('.q-date__view > :nth-child(1) > .q-btn > .q-btn__content > .q-icon').click()
       cy.get('.q-date__view > :nth-child(1) > .q-btn > .q-btn__content > .q-icon').click()
       cy.get(':nth-child(15) > .q-btn > .q-btn__content > .block').click()
       
       cy.get('.relative-position.col > div > .q-btn > .q-btn__content > .block').click()
       cy.get(':nth-child(6) > .q-btn > .q-btn__content > .block').eq(0).click()
       cy.get(':nth-child(16) > .q-btn > .q-btn__content > .block').click()

       homepage.continueClick()
       

         homepage.inputeBox().type('cypress123@gmail.com')
        homepage.continueClick()

         homepage.inputeBox().type('9876543212')
        homepage.continueClick()

        homepage.inputeBox().type('RajaPeth')
        homepage.continueClick()

        homepage.inputeBox().type('Amravati')
        homepage.continueClick()

        homepage.inputeBox().type('Maharashtra')
        homepage.continueClick()

        homepage.inputeBox().type('443435')
        homepage.continueClick()

        cy.get('[aria-label="No"] > .q-radio__inner').click()
        homepage.continueClick()

        // homepage.inputeBox().type('443435')
        // homepage.continueClick()
       







        // Logout
        
        // cy.get('[data-testid="logout"] > .q-item__section').click()
    })


})