describe('MyTestSuite', function()
{
    it("Verify Title of the Page - Positive", function()
    {
        cy.visit("https://amazon.co.uk")
        cy.title().should('eq', 'Amazon.co.uk: Low Prices in Electronics, Books, Sports Equipment & more')

        cy.get('#twotabsearchtextbox').type("One Piece{enter}")
    })

    it("Verify Title of the Page - Negative", function()
    {
        cy.visit("https://amazon.co.uk")
        cy.title().should.not('eq', 'Not Amazon')
    })
})

//Opens cypress test runner
//./node_modules/.bin/cypress open

//Runs all tests via command line
//./node_modules/.bin/cypress run

//Runs a specific test
//./node_modules/.bin/cypress run -spec "cypress\integration\examples\FirstTest.js"

//Runs All the tests under examples directory using Chrome
//./node_modules/.bin/cypress run --browser chrome