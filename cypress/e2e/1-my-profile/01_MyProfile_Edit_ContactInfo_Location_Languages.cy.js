/// <reference types="cypress" />

describe('E2E Test: User Profile Editing', () => {
    beforeEach(() => {
        // Visit the login page
        cy.visit('https://www.telusinternational.ai/cmp');
    });

    it('should log in, edit profile, add languages, and log out', () => {

        // Check first if the user is navigated to the sign in page and welcome text is displayed
        cy.url().should('include', 'https://www.telusinternational.ai/cmp/');
        cy.get('.md\\:px-7 > .sui-font-heading').contains('Welcome back!').should('be.visible');

        // Enter username and click continue
        cy.get('label.sui-w-full > .focus\\:sui-outline-none').should('have.attr', 'placeholder', 'Email').type('menorcalimuel@gmail.com');
        cy.contains('button.sui-c-btn-primary', 'Continue').click();

        // Check first if the correct email address is displayed
        cy.get('.sui-font-medium').contains('menorcalimuel@gmail.com').should('be.visible');

        // Enter password and click sign in
        cy.get('label.sui-w-full > .focus\\:sui-outline-none').should('have.attr', 'placeholder', 'Password').type('TelusIntPass13!');
        cy.contains('button.sui-c-btn-primary', 'Sign in').click();

        // Check if the user is navigated to dashboard and home is displayed
        cy.url().should('eq', 'https://www.telusinternational.ai/cmp/contributor/dashboard');
        cy.get('.sui-text-b1').contains('Home').should('be.visible');

        // Check if the correct user info is displayed
        cy.get('.col-lg-8 > .sui-font-heading').contains('Limuel Il Menorca').should('be.visible');
        cy.get('.col-lg-8 > .sui-text-darkGray-lighter').contains('menorcalimuel@gmail.com').should('be.visible');
        cy.get('.tw-mt-1').contains('65f2973cbb4e7cf68cb8eca2').should('be.visible');

        // Check first if the profile icon is displayed
        cy.get('.sui-gap-2 > .sui-rounded-full > .sui-flex').contains('LM').should('be.visible');
        cy.get('.sui-gap-2 > .sui-rounded-full > .sui-flex').contains('LM').click();

    });
});
