Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Test case - Game store menu item', () => {

	it('Open Game store', () => {

		// Visit website
		cy.visit('https://gamanza.com/')
		// Navigate to Game store
		cy.get('span').contains('Game Store').click()

		//Assertions
		cy.url().should('include', '/igaming-content/')
		cy.contains('Such a wondrous place!')
		cy.contains('GaminGeniusâ„˘ Back office')
		cy.contains('Bonus Bank')
		cy.contains('Open API')
		cy.contains('Save time & money')
		//cy.get('.widget_media_image').should('have.attr','href').should('include','https://sigma.world/directory/platform-provider/gamanza/')

		// Click on the LinkedIn icon in footer
		cy.get('.edgtf-social-icon-widget-holder').click()

		// Asserting the if the opened link is the correct one
		cy.intercept('GET', 'https://www.linkedin.com/company/gamanzagroup/mycompany/').as('newTab')
  		cy.wait('@newTab').then(interception => {
    	expect(interception.request.url).to.include('https://www.linkedin.com/company/gamanzagroup/mycompany/')
		cy.go('back')  })
	})
})