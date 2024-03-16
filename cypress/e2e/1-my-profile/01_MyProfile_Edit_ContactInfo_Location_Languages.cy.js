/// <reference types="cypress" />

import * as loginMethods from '../../page-methods/loginMethods';
import * as homeMethods from '../../page-methods/homeMethods';
import * as navigationsMethods from '../../page-methods/navigationsMethods';
import * as myProfileMethods from '../../page-methods/myProfileMethods';

describe('E2E Test: User Profile Editing', () => {
    beforeEach(() => {
        cy.visit('https://www.telusinternational.ai/cmp');
    });

    it('should log in, edit profile, add languages, and log out', () => {
        cy.url().should('include', 'https://www.telusinternational.ai/cmp/');
        loginMethods.signIn('menorcalimuel@gmail.com', 'TelusIntPass13!');
        cy.url().should('eq', 'https://www.telusinternational.ai/cmp/contributor/dashboard');
        homeMethods.checkUserInfo('Limuel Il Menorca', 'menorcalimuel@gmail.com', '65f2973cbb4e7cf68cb8eca2');
        navigationsMethods.clickProfileIcon('LM');
        navigationsMethods.verifyProfileDetails('Limuel Il Menorca', 'menorcalimuel@gmail.com', '65f2973cbb4e7cf68cb8eca2');
        navigationsMethods.clickMyProfileLink();
        myProfileMethods.checkAvatarIcon('LM');
        myProfileMethods.verifyMyProfileDetails('Limuel Il Menorca', 'menorcalimuel@gmail.com', '65f2973cbb4e7cf68cb8eca2');
        myProfileMethods.editPhoneNumber();
        myProfileMethods.editPostalCode();
        myProfileMethods.clickLanguagesLink();
        myProfileMethods.changePrimaryLanguage();
        myProfileMethods.changeOtherLanguage();
        navigationsMethods.signOut();

    });
});
