import NavigationsPage from '../page-objects/navigationsPage';
import LoginPage from '../page-objects/loginPage';

const navigationsPage = new NavigationsPage();
const loginPage = new LoginPage();

export function verifyProfileIcon(initials) {
    navigationsPage.elements.profileIcon().should('contain', initials);
}

export function clickProfileIcon(initials) {
    navigationsPage.elements.profileIcon().should('contain', initials);
    navigationsPage.elements.profileIcon().click();
}

export function verifyProfileDetails(username, email, userid) {
    cy.screenshot();
    
    navigationsPage.elements.userDetails()
    .should('contain', username)
    .should('contain', email)
    .should('contain', userid);
}

export function clickMyProfileLink() {
    navigationsPage.elements.myProfileLink().click();
}

export function signOut() {
    navigationsPage.elements.profileIcon().click();
    navigationsPage.elements.signOutLink().click();
    loginPage.elements.welcomeText().should('be.visible');
}
