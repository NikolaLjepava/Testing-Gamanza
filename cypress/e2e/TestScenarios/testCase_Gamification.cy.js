Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Test case - Gamification menu item', () => {

	it('Open Gamification', () => {

		// Visit website
		cy.visit('https://gamanza.com/')
		// Navigate to Gamification
		cy.get('span').contains('Gamification').click()

		//Assertions
		cy.url().should('include', '/gamification-for-igaming/')
		cy.contains('Gamification & Rewards')
		cy.contains('Gamification Software')
		cy.contains('Campaigns')
		cy.contains('Analytics')
		cy.get('.vc_box_border_grey').find('img').should('have.attr','src').should('include','https://gamanza.com/wp-content/uploads/2021/08/Gamification-dashboard-screen-right-400x438.png')

		// Click on the LinkedIn icon in footer
		cy.get('.edgtf-social-icon-widget-holder').click()

		// Asserting the if the opened link is the correct one
		cy.intercept('GET', 'https://www.linkedin.com/company/gamanzagroup/mycompany/').as('newTab')
  		cy.wait('@newTab').then(interception => {
    	expect(interception.request.url).to.include('https://www.linkedin.com/company/gamanzagroup/mycompany/')
		cy.go('back')  })
	})
})