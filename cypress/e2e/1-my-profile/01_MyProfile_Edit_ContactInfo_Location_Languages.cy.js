/// <reference types="cypress" />

import * as loginMethods from '../../page-methods/loginMethods';
import * as homeMethods from '../../page-methods/homeMethods';
import * as navigationsMethods from '../../page-methods/navigationsMethods';
import * as myProfileMethods from '../../page-methods/myProfileMethods';

describe('E2E Test: User Profile Editing', () => {
    beforeEach(() => {
        // Visit the login page
        cy.visit('https://www.telusinternational.ai/cmp');
    });

    it('should log in, edit profile, add languages, and log out', () => {
        // Check first if the user is navigated to the sign in page
        cy.url().should('include', 'https://www.telusinternational.ai/cmp/');

        // Check if welcome text is displayed
        loginMethods.checkWelcomeText();

        // Enter username and click continue
        loginMethods.enterUsernameAndContinue('menorcalimuel@gmail.com');

        // Check first if the correct email address is displayed
        loginMethods.checkEmailText('menorcalimuel@gmail.com');

        // Enter password and click sign in
        loginMethods.enterPasswordAndSignIn('TelusIntPass13!');

        // Check if the user is navigated to dashboard
        cy.url().should('eq', 'https://www.telusinternational.ai/cmp/contributor/dashboard');

        // Check if home header is displayed
        homeMethods.checkHomeText();

        // Check if the correct user info is displayed
        homeMethods.checkUserInfo('Limuel Il Menorca', 'menorcalimuel@gmail.com', '65f2973cbb4e7cf68cb8eca2');

        // Check first if the profile icon is correct then click it
        navigationsMethods.verifyProfileIcon('LM');
        navigationsMethods.clickProfileIcon();

        // Verify that the user details in the my profile menu is correct
        navigationsMethods.verifyProfileDetails('Limuel Il Menorca', 'menorcalimuel@gmail.com', '65f2973cbb4e7cf68cb8eca2');

        // Click my profile link
        navigationsMethods.clickMyProfileLink();

        // Verify my profile header
        myProfileMethods.checkMyProfileText();

        // Check if the user avatar is correct
        myProfileMethods.checkAvatarIcon('LM');

        // Verify user details in my profile
        myProfileMethods.verifyMyProfileDetails('Limuel Il Menorca', 'menorcalimuel@gmail.com', '65f2973cbb4e7cf68cb8eca2');

        // Check if the contact information label is displayed
        myProfileMethods.checkContactInfoText();

        // Update the phone number with the new value
        myProfileMethods.editPhoneNumber();

        // Check if the location label is displayed
        myProfileMethods.checkLocationText();

        // Update the postal code
        myProfileMethods.editPostalCode();

        // Click languages
        myProfileMethods.clickLanguagesLink();

        // Check if the languages header is displayed
        myProfileMethods.checkLanguagesText();

        // Update the primary language
        myProfileMethods.changePrimaryLanguage();

        // Update the other language
        myProfileMethods.changeOtherLanguage();

        // Sign out
        navigationsMethods.signOut();

    });
});
