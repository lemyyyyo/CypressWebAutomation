/// <reference types="cypress" />

import * as loginMethods from '../../page-methods/loginMethods';
import * as homeMethods from '../../page-methods/homeMethods';
import * as navigationsMethods from '../../page-methods/navigationsMethods';
import * as myProfileMethods from '../../page-methods/myProfileMethods';

const testData = require("../../fixtures/test-data.json")

describe('E2E Test: User Profile Editing', () => {
    beforeEach(() => {
        cy.visit(testData.baseurl);
    });

    it('should log in, edit profile, add languages, and log out', () => {
        cy.url().should('include', testData.baseurl);
        loginMethods.signIn(testData.username, testData.password);
        cy.url().should('eq', testData.baseurl + 'contributor/dashboard');
        homeMethods.checkUserInfo(testData.fullname, testData.username, testData.userid);
        navigationsMethods.clickProfileIcon(testData.initials);
        navigationsMethods.verifyProfileDetails(testData.fullname, testData.username, testData.userid);
        navigationsMethods.clickMyProfileLink();
        myProfileMethods.checkAvatarIcon(testData.initials);
        myProfileMethods.verifyMyProfileDetails(testData.fullname, testData.username, testData.userid);
        myProfileMethods.editPhoneNumber();
        myProfileMethods.editPostalCode();
        myProfileMethods.clickLanguagesLink();
        myProfileMethods.changePrimaryLanguage();
        myProfileMethods.changeOtherLanguage();
        navigationsMethods.signOut();

    });
});
