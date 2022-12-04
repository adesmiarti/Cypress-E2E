import{slowCypressDown} from 'cypress-slow-down'
slowCypressDown()

describe('Forgot Login', () => {
    it('Forgot Login the ParaBank', () => {
        cy.visit ('https://parabank.parasoft.com/parabank/index.htm');
        cy.get('#loginPanel > :nth-child(2) > a').click();
        cy.url().should('include', '/lookup.htm');
        cy.get('#rightPanel > h1').contains('Customer Lookup');
        cy.get('#rightPanel > p').contains('Please fill out the following information in order to validate your account.');
        cy.get('.form2').within(() => {
            cy.get('#firstName').focus().clear().type('anjar');
            cy.get('#lastName').focus().clear().type('desmiarti');
            cy.get("#address\\.street").type('setia budi');
            cy.get('#address\\.city').type('jakarta');
            cy.get('#address\\.state').type('Indonesia');
            cy.get('#address\\.zipCode').type('38513');
            cy.get('#ssn').type('xxxxx');
        })
        cy.get('[colspan="2"] > .button').click();
        cy.url().should('include', '/lookup.htm');
        cy.get('.error').contains('The customer information provided could not be found.')
    });
})