Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Test case - Real-time CRM menu item', () => {

	it('Open Real-time CRM', () => {

		// Visit website
		cy.visit('https://gamanza.com/')
		// Navigate to Real-time CRM
		cy.get('span').contains('Real-time CRM').click()

		//Assertions
		cy.url().should('include', '/real-time-crm/')
		cy.contains('Automation')
		cy.contains('Segmentation')
		cy.contains('Campaigns')
		cy.contains('Analytics')
		cy.get('.vc_box_border_grey').find('img').should('have.attr','src').should('include','https://gamanza.com/wp-content/uploads/2021/03/monitor-designs-CRM1-right-smallertinyjpg.png')

		// Click on the LinkedIn icon in footer
		cy.get('.edgtf-social-icon-widget-holder').click()

		// Asserting the if the opened link is the correct one
		cy.intercept('GET', 'https://www.linkedin.com/company/gamanzagroup/mycompany/').as('newTab')
  		cy.wait('@newTab').then(interception => {
    	expect(interception.request.url).to.include('https://www.linkedin.com/company/gamanzagroup/mycompany/')
		cy.go('back')  })
	})
})