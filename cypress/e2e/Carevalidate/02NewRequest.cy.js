///<reference types = "cypress"/>
import 'cypress-file-upload';
import data from '../../fixtures/example.json'
import Homepage from '../PageObject/Homepage'

describe('test suit', () => {


  it('TC01', () => {
    const upload = 'Driving licence.pdf'
    const homepage = new Homepage()

    cy.login(data.email, data.emailpassword)
    cy.wait(6000)



    cy.contains('Weight Loss Eligibility Intake Form test').click()
    cy.wait(2000)
    cy.get('.q-field__inner').click()
    cy.wait(2000)

    cy.get('.justify-center .q-item__label').contains('Male').click()
    cy.contains('Continue').click()

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

    cy.DOB()
    homepage.continueClick()

    homepage.inputeBox().type('cytest123@gmail.com')
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

    cy.get('input[type="file"]').attachFile(upload)
    cy.wait(3000)
    homepage.continueClick()

    cy.get('.block').contains('Submit').click()
    cy.wait(2000)
    cy.get('.q-card .block').eq(1).click()
    cy.wait(5000)
    cy.get('.q-card .q-card__section').eq(1).should('contain', ' Thank you for your submission. We have sent you a confirmation email for your records. ')
    cy.get('.block').contains('Close').click()

    cy.wait(1000)
    cy.logout()

  })


})