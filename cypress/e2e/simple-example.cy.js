describe('ACME Bank', () => {
    beforeEach(() => {
        // Start Applitools Visual AI Test
        cy.eyesOpen({
            appName: 'ACME Bank',
            testName: Cypress.currentTest.title,
        })
    })
    it('Cypress: Quickstart', () => {
        cy.visit('https://sandbox.applitools.com/bank?layoutAlgo=true');

        // Full Page - Visual AI Assertion
        cy.eyesCheckWindow({
            tag: "Login page"
        });

        cy.get('#username').type('user')
        cy.get('#password').type('password')
        cy.get('#log-in').click()
        cy.get('.dashboardNav_navContainer__kA4wD').should('be.visible');

        cy.eyesCheckWindow({
            tag: "Main page",
            // Uncomment to apply Layout regions and have test pass
            // layout: [
            //     {selector: '.dashboardOverview_accountBalances__3TUPB'},
            //     {selector: '.dashboardTable_dbTable___R5Du'}
            // ]
        });
    })
    afterEach(() => {
        // End Applitools Visual AI Test
        cy.eyesClose()
    })
})