class MyProfilePage {
    elements = {
        myProfileHeader: () => cy.get('.sui-text-b1').contains('My Profile'),
        avatarIcon: () => cy.get('.sui-gap-4 > .sui-rounded-full'),
        userDetails: () => cy.get('.avatar-profile-text-wrap'),
        contactInfoText: () => cy.get('.figma-section-header-text-margin > .col-lg-10 > .sui-font-heading').contains('Contact Information'),
        phoneNumberLabel: () => cy.get('.mb-7 > .col > .sui-text-b3'),
        contactEditButton: () => cy.get('.figma-section-header-text-margin > .col-lg-2 > .sui-rounded'),
        phoneNumberTextBox: () => cy.get('input[name="phone_number.line_number"]'),
        saveButton: () => cy.get('.sui-gap-2 > .sui-c-btn-primary'),
        locationText: () => cy.get(':nth-child(1) > :nth-child(1) > .col-lg-10 > .sui-font-heading').contains('Location'),
        postalCodeLabel: () => cy.get('.col-lg-12 > :nth-child(3) > .col-auto > .sui-text-b3'),
        locationEditButton: () => cy.get(':nth-child(1) > :nth-child(1) > .col-lg-2 > .sui-rounded'),
        postalCodeTextBox: () => cy.get('input[name="postalCode"]'),
        languagesLink: () => cy.get('[href="/cmp/contributor/userprofile/languages"]'),
        languagesLabel: () => cy.get('.title > .row > .col > .sui-font-heading').contains('Languages'),

        primaryLanguageLabel: () => cy.get('.primary-language > :nth-child(1) > :nth-child(1) > .col-lg-12 > .sui-text-b3'),
        primaryLanguageEditButton: () => cy.get('.col-auto > .row'),
        primaryLanguageTextBox: () => cy.get(':nth-child(1) > .sc-dlnjwi > .row > .col-lg-12 > .sui-c-input-dropdown-container > .sui-c-input-dropdown__control > .sui-c-input-dropdown__value-container'),
        otherLanguageLabel: () => cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .col-lg-12 > .sui-text-b3'),
        otherLanguageEditButton: () => cy.get('.edit-div'),
        otherLanguageTextBox: () => cy.get(':nth-child(1) > .sc-dlnjwi > .row > .col-lg-12 > .sui-c-input-dropdown-container > .sui-c-input-dropdown__control > .sui-c-input-dropdown__value-container'),
    }
}

export default MyProfilePage;
