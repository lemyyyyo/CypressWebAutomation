import LoginPage from '../page-objects/loginPage';

const loginPage = new LoginPage();

export function checkWelcomeText() {
    loginPage.elements.welcomeText().should('be.visible');
}

export function enterUsernameAndContinue(username) {
    loginPage.elements.usernameInput().type(username);
    loginPage.elements.continueButton().click();
}

export function checkEmailText(username) {
    loginPage.elements.emailText().should('contain', username);
}

export function enterPasswordAndSignIn(password) {
    loginPage.elements.passwordInput().type(password);
    loginPage.elements.signinButton().click();
}

export function signIn(username, password) {
    loginPage.elements.welcomeText().should('be.visible');

    loginPage.elements.usernameInput().type(username);
    loginPage.elements.continueButton().click();
    
    loginPage.elements.emailText().should('contain', username);

    loginPage.elements.passwordInput().type(password);
    loginPage.elements.signinButton().click();
}
