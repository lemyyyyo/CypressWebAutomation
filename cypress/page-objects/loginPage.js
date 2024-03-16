class LoginPage {

    elements = {
        welcomeText: () => cy.get('.md\\:px-7 > .sui-font-heading').contains('Welcome'),
        usernameInput: () => cy.get('label.sui-w-full > .focus\\:sui-outline-none'),
        continueButton: () => cy.contains('button.sui-c-btn-primary', 'Continue'),
        emailText: () => cy.get('.sui-font-medium'),
        passwordInput: () => cy.get('label.sui-w-full > .focus\\:sui-outline-none'),
        signinButton: () => cy.get('.sui-c-btn-primary'),
    }
}

export default LoginPage;