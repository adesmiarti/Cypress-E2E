import{slowCypressDown} from 'cypress-slow-down'
slowCypressDown()
describe('Login Step', () => {
    it('Element Login the ParaBank', () => {
        cy.visit ('https://parabank.parasoft.com/parabank/index.htm');
        cy.get('h2').contains('Customer Login');
        cy.get('#loginPanel > form > p:nth-child(1) > b').contains('Username');
        cy.get('#loginPanel > form > p:nth-child(3) > b').contains('Password');
        cy.get('#loginPanel > form > div:nth-child(5) > input').contains('Log In');
        cy.get('#loginPanel > :nth-child(2) > a').contains('Forgot login info?');
        cy.get('#loginPanel > p:nth-child(3) > a').contains('Register');
    });

    it('Login With Null Data', () => {
        cy.get(':nth-child(5) > .button').click();
        cy.url().should('include', '/login.htm');
        cy.get('#rightPanel > h1').contains('Error!');
        cy.get('#rightPanel > p').contains('Please enter a username and password.')
        });

     it('Login with invalid data', () => {
        cy.visit ('https://parabank.parasoft.com/parabank/index.htm');
        cy.get('#loginPanel > form > div:nth-child(2) > input').focus().clear().type('anjar');
        cy.get('#loginPanel > form > div:nth-child(4) > input').focus().clear().type('12345');
        cy.get(':nth-child(5) > .button').click();
        cy.url().should('include', '/login.htm');
        cy.get('#rightPanel > h1').contains('Error!');
        cy.get('#rightPanel > p').contains('An internal error has occurred and has been logged.')

    });
})