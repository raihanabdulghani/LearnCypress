/// <reference types = "cypress"/>

describe('Navbar Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/online-banking.html');// Connect to
    });

    it('Should display online banking content', () => {
        cy.get('#onlineBankingMenu').click();
        cy.url().should('include', 'online-banking.html');
        cy.get('h1').should('contain.text', 'Online Banking');
    });

    it('Should display feedback content', () => {
        cy.get('#feedback').click();
        cy.url().should('include', 'feedback.html');
        cy.get('h3').should('contain.text', 'Feedback');
    });

    it('Should display homepage content', () => {
        cy.contains('Zero Bank').click();
        cy.url().should('include', 'index.html');
        cy.get('h4').should('contain.text', 'Online Banking');
    });
});