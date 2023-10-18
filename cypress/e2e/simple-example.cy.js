describe('ACME Bank', () => {
    beforeEach(() => {
	// Start Applitools Visual AI Test
        cy.eyesOpen({
            appName: 'ACME Bank',
            testName: Cypress.currentTest.title,
        })
    })
    it('should log into a bank account', () => {
        cy.visit('https://sandbox.applitools.com/bank')

	// Full Page - Visual AI Assertion
        cy.eyesCheckWindow({
            tag: "Login page",
            fully: true
        });

        cy.get('#username').type('user')
        cy.get('#password').type('password')
        cy.get('#log-in').click()

        cy.eyesCheckWindow({
            tag: "Main page",
            fully: true,
        });
    })
    afterEach(() => {
	// End Applitools Visual AI Test
        cy.eyesClose()
    })
})
