
 class Homepage 
 {
    inputeBox(){
        return cy.get('input[type="text"]')
    }

    continueClick(){
        return cy.contains('Continue').click({force: true})
    }

 }

 export default Homepage ;