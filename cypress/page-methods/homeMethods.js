import HomePage from '../page-objects/homePage';

const homePage = new HomePage();

export function checkHomeText() {
    homePage.elements.homeText().should('be.visible');
}

export function checkUserInfo(username, email, userid) {
    homePage.elements.userName().should('contain', username);
    homePage.elements.email().should('contain', email);
    homePage.elements.userId().should('contain', userid);
}