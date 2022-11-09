Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Test case - Platform menu item', () => {

	it('Visit gamanza and open Platform', () => {

		// Visit website
		cy.visit('https://gamanza.com/')

		// Navigate to Platform endpoint
		cy.get('span').contains('Platform').click()

		// Assertions
		cy.url().should('include', '/igaming-platform')
		cy.contains('World class Player Account Platform built for regulated markets')
		cy.contains('Compliance Framework')
		cy.contains('Front-end Web & App')
		cy.get('.vc_box_border_grey').find('img').should('have.attr', 'src').should('include','https://gamanza.com/wp-content/uploads/2021/11/NEW-Platform-gg@2x.png')
		cy.get('.edgtf-social-icon-widget-holder').should('have.attr','href').should('include','https://www.linkedin.com/company/gamanzagroup/mycompany/')

		// Click on the LinkedIn icon in footer
		cy.get('.edgtf-social-icon-widget-holder').click()

		// Asserting the if the opened link is the correct one
		cy.intercept('GET', 'https://www.linkedin.com/company/gamanzagroup/mycompany/').as('newTab')
  		cy.wait('@newTab').then(interception => {
    	expect(interception.request.url).to.include('https://www.linkedin.com/company/gamanzagroup/mycompany/')
		cy.go('back')  })

		
 

	})

		it('Visit gamanza and open Platform', () => {
	})
})