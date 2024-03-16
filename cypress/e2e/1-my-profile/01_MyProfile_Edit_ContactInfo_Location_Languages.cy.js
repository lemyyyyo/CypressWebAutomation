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

        // Check first if the profile icon is displayed then click
        cy.get('.sui-gap-2 > .sui-rounded-full > .sui-flex').contains('LM').should('be.visible');
        cy.get('.sui-gap-2 > .sui-rounded-full > .sui-flex').contains('LM').click();

        // Verify user details in the my profile menu
        cy.get('.sui-px-1')
            .should('contain', 'Limuel Il Menorca')
            .should('contain', 'menorcalimuel@gmail.com')
            .should('contain', '65f2973cbb4e7cf68cb8eca2');

        // Click my profile link
        cy.get('span.sui-ml-sm').contains('My Profile').click();

        // Verify my profile header
        cy.contains('h1', 'My Profile').should('be.visible');

        // Check if the user avatar is correct
        cy.get('div.sui-rounded-full').should('contain', 'LM');

        // Verify user details in the 
        cy.get('.avatar-profile-text-wrap')
            .should('contain', 'Limuel Il Menorca')
            .should('contain', 'menorcalimuel@gmail.com')
            .should('contain', '65f2973cbb4e7cf68cb8eca2');

        // Check if the contact information label is displayed
        cy.get('div').contains('Contact Information');

        // Check the current phone number and save to a variable
        cy.get('.mb-7 > .col > .sui-text-b3').invoke('text').then(text => {
            const currentPhoneNumber = text.trim();
            cy.log(currentPhoneNumber);

            let newPhoneNumber;
            if (currentPhoneNumber === '9152660380') {
                newPhoneNumber = '9152660381';
            } else if (currentPhoneNumber === '9152660381') {
                newPhoneNumber = '9152660380';
            }
            cy.log(newPhoneNumber);

            // Alias the new phone number to use later
            cy.wrap(newPhoneNumber).as('newPhoneNumber');

            // Click the contact information edit button
            cy.get('.figma-section-header-text-margin > .col-lg-2 > .sui-rounded').click();

            // Update the phone number input with the new value
            cy.get('input[name="phone_number.line_number"]').clear().type(newPhoneNumber);

            // Click save
            cy.get('.sui-gap-2 > .sui-c-btn-primary').click();

            // Check if the phone number is updated
            cy.get('p.sui-text-b3').should('contain', newPhoneNumber);
        });

        // Check the current postal code and save to a variable
        cy.get('.col-lg-12 > :nth-child(3) > .col-auto > .sui-text-b3').invoke('text').then(text => {
            const currentPostalCode = text.trim();
            cy.log(currentPostalCode);

            let newPostalCode;
            if (currentPostalCode === '1770') {
                newPostalCode = '1771';
            } else if (currentPostalCode === '1771') {
                newPostalCode = '1770';
            }
            cy.log(newPostalCode);

            // Alias the new postal code to use later
            cy.wrap(newPostalCode).as('newPostalCode');

            // Click the location edit button
            cy.get(':nth-child(1) > :nth-child(1) > .col-lg-2 > .sui-rounded').click();

            // Update the postal code input with the new value
            cy.get('input[name="postalCode"]').clear().type(newPostalCode);

            // Click save
            cy.get('.sui-gap-2 > .sui-c-btn-primary').click();

            // Check if the postal code is updated
            cy.get('.row div.col-auto.ml-7 p.sui-text-b3').should('contain', newPostalCode);
        });

        // Click languages
        cy.contains('a', 'Languages').click();

        // Check if the languages label is displayed
        cy.get('h2').contains('Languages');

        // Check the current primary language and save to a variable
        cy.get('.primary-language > :nth-child(1) > :nth-child(1) > .col-lg-12 > .sui-text-b3').invoke('text').then(text => {
            const currentLanguage = text.trim();
            cy.log(currentLanguage);

            let newLanguage;
            if (currentLanguage === 'English (Austria)') {
                newLanguage = 'English (Brazil)';
            } else if (currentLanguage === 'English (Brazil)') {
                newLanguage = 'English (Austria)';
            }
            cy.log(newLanguage);

            // Alias the new language to use later
            cy.wrap(newLanguage).as('newLanguage');

            // Click the primary language edit button
            cy.get('.col-auto > .row').click();

            // Click the primary language dropdown
            cy.get(':nth-child(1) > .sc-dlnjwi > .row > .col-lg-12 > .sui-c-input-dropdown-container > .sui-c-input-dropdown__control > .sui-c-input-dropdown__value-container').click();

            // Select another language
            cy.get(':nth-child(1) > .sc-dlnjwi > .row > .col-lg-12 > .sui-c-input-dropdown-container > .sui-c-input-dropdown__control > .sui-c-input-dropdown__value-container').type(newLanguage);
            cy.focused().trigger('keydown', { keyCode: 9, which: 9 });

            // Click save
            cy.get('.sui-gap-2 > .sui-c-btn-primary').click();

            // Check if the primary language is updated
            cy.get('p.sui-text-b3.tw-font-bold.sui-text-darkGray-darker').should('contain', newLanguage);
        });

        // Check the current other languages and save to a variable
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .col-lg-12 > .sui-text-b3').invoke('text').then(text => {
            const currentOtherLanguage = text.trim();
            cy.log(currentOtherLanguage);

            let newOtherLanguage;
            if (currentOtherLanguage === 'Arabic (Chad)') {
                newOtherLanguage = 'Arabic (Canada)';
            } else if (currentOtherLanguage === 'Arabic (Canada)') {
                newOtherLanguage = 'Arabic (Chad)';
            }
            cy.log(newOtherLanguage);

            // Alias the new other language to use later
            cy.wrap(newOtherLanguage).as('newOtherLanguage');

            // Click other languages edit button
            cy.get('.edit-div').click();

            // Click other languages dropdown
            cy.get(':nth-child(1) > .sc-dlnjwi > .row > .col-lg-12 > .sui-c-input-dropdown-container > .sui-c-input-dropdown__control > .sui-c-input-dropdown__value-container').click();

            // Type another language
            cy.get(':nth-child(1) > .sc-dlnjwi > .row > .col-lg-12 > .sui-c-input-dropdown-container > .sui-c-input-dropdown__control > .sui-c-input-dropdown__value-container').type(newOtherLanguage);
            cy.focused().trigger('keydown', { keyCode: 9, which: 9 });

            // Click save
            cy.get('.sui-c-btn-primary').click();

            // Check if other languages is updated
            cy.get('p.sui-text-b3.tw-font-bold.sui-text-darkGray-darker').should('not.contain', newOtherLanguage);
        });

        // // Click my profile menu
        // cy.get('.sui-gap-2 > .sui-rounded-full > .sui-flex').contains('LM').click();

        // // Click sign out link
        // cy.get(':nth-child(3) > .sui-cursor-pointer > .sui-ml-sm').click();

        // // Check first if the user is navigated back to the sign in page and welcome text is displayed
        // cy.get('.md\\:px-7 > .sui-font-heading').contains('Welcome back!').should('be.visible');

    });
});
