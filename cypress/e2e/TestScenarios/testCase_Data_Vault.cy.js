Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Test case - Data Vault menu item', () => {

	it('Open Data Vault', () => {

		// Visit website
		cy.visit('https://gamanza.com/')
		// Navigate to Data Vault
		cy.get('span').contains('Data Vault').click()

		//Assertions
		cy.url().should('include', '/digital-data-vault')
		cy.contains('Digital Data Vault')
		cy.contains('Features')
		cy.contains('Regulation')
		cy.contains('Encryption')
		cy.contains('Reporting')
		cy.contains('Integration')
		cy.get('.vc_box_border_grey').find('img').should('have.attr','src').should('include','https://gamanza.com/wp-content/uploads/2021/03/datavault-locket-smallertinyjpg.png','https://gamanza.com/wp-content/uploads/2021/03/gli-digital-no-border-smallertinyjpg.png')
		//cy.get('.vc_box_border_grey').find('img').should('have.attr','src').should('include','https://gamanza.com/wp-content/uploads/2021/03/gli-digital-no-border-smallertinyjpg.png')
	})
})