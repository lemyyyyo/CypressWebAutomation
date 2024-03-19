import MyProfileMethods from '../page-objects/myProfilePage';

const myProfileMethods = new MyProfileMethods();

export function checkMyProfileText() {
    myProfileMethods.elements.myProfileHeader().should('be.visible');
}

export function checkAvatarIcon(initials) {
    myProfileMethods.elements.myProfileHeader().should('be.visible');
    myProfileMethods.elements.avatarIcon().should('contain', initials);
}

export function verifyMyProfileDetails(username, email, userid) {
    myProfileMethods.elements.userDetails().should('contain', username)
        .should('contain', email)
        .should('contain', userid);
}

export function checkContactInfoText() {
    myProfileMethods.elements.contactInfoText().should('be.visible');
}

export function editPhoneNumber() {
    myProfileMethods.elements.myProfileHeader().should('be.visible');

    myProfileMethods.elements.phoneNumberLabel().invoke('text').then(currentPhoneNumber => {
        currentPhoneNumber = currentPhoneNumber.trim();

        myProfileMethods.elements.contactEditButton().click();

        let newPhoneNumber;
        if (currentPhoneNumber === '9152660380') {
            newPhoneNumber = '9152660381';
        } else if (currentPhoneNumber === '9152660381') {
            newPhoneNumber = '9152660380';
        }

        myProfileMethods.elements.phoneNumberTextBox().clear().type(newPhoneNumber);

        myProfileMethods.elements.saveButton().click();

        myProfileMethods.elements.phoneNumberLabel().should('contain', newPhoneNumber);
    });
}

export function checkLocationText() {
    myProfileMethods.elements.locationText().should('be.visible');
}

export function editPostalCode() {
    myProfileMethods.elements.locationText().should('be.visible');

    myProfileMethods.elements.postalCodeLabel().invoke('text').then(currentPostalCode => {
        currentPostalCode = currentPostalCode.trim();

        myProfileMethods.elements.locationEditButton().click();

        let newPostalCode;
        if (currentPostalCode === '1770') {
            newPostalCode = '1771';
        } else if (currentPostalCode === '1771') {
            newPostalCode = '1770';
        }

        myProfileMethods.elements.postalCodeTextBox().clear().type(newPostalCode);

        myProfileMethods.elements.saveButton().click();

        myProfileMethods.elements.postalCodeLabel().should('contain', newPostalCode);
    });

    cy.screenshot();
}

export function editPostalCodeToBlank() {
    myProfileMethods.elements.locationText().should('be.visible');
    myProfileMethods.elements.postalCodeLabel().invoke('text').then(currentPostalCode => {
        currentPostalCode = currentPostalCode.trim();
    myProfileMethods.elements.locationEditButton().click();
    myProfileMethods.elements.postalCodeTextBox().clear().type('{selectall}{backspace}');
    myProfileMethods.elements.saveButton().click({force: true});
    myProfileMethods.elements.postalCodeErrorText().should('be.visible');
    myProfileMethods.elements.cancelButton().click();
    myProfileMethods.elements.postalCodeLabel().should('contain', currentPostalCode);
});

    cy.screenshot();
}


export function clickLanguagesLink() {
    myProfileMethods.elements.languagesLink().click();
}

export function checkLanguagesText() {
    myProfileMethods.elements.languagesLabel().should('be.visible');
}

export function changePrimaryLanguage() {
    myProfileMethods.elements.languagesLabel().should('be.visible');

    myProfileMethods.elements.primaryLanguageLabel().invoke('text').then(currentPrimaryLanguage => {
        currentPrimaryLanguage = currentPrimaryLanguage.trim();

        myProfileMethods.elements.primaryLanguageEditButton().click();

        let newPrimaryLanguage;
        if (currentPrimaryLanguage === 'English (Austria)') {
            newPrimaryLanguage = 'English (Brazil)';
        } else if (currentPrimaryLanguage === 'English (Brazil)') {
            newPrimaryLanguage = 'English (Austria)';
        }

        myProfileMethods.elements.primaryLanguageTextBox().type(newPrimaryLanguage);
        cy.focused().trigger('keydown', { keyCode: 9, which: 9 });

        myProfileMethods.elements.saveButton().click();

        myProfileMethods.elements.primaryLanguageLabel().should('contain', newPrimaryLanguage);
    });
}

export function changeOtherLanguage() {
    myProfileMethods.elements.otherLanguageLabel().invoke('text').then(currentOtherLanguage => {
        currentOtherLanguage = currentOtherLanguage.trim();

        myProfileMethods.elements.otherLanguageEditButton().click();

        let newOtherLanguage;
        if (currentOtherLanguage === 'Arabic (Chad)') {
            newOtherLanguage = 'Arabic (Canada)';
        } else if (currentOtherLanguage === 'Arabic (Canada)') {
            newOtherLanguage = 'Arabic (Chad)';
        }

        myProfileMethods.elements.otherLanguageTextBox().type(newOtherLanguage);
        cy.focused().trigger('keydown', { keyCode: 9, which: 9 });

        myProfileMethods.elements.saveButton().click();

        myProfileMethods.elements.otherLanguageLabel().should('contain', newOtherLanguage);
    });

    cy.screenshot();
}
