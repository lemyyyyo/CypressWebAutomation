class NavigationsPage {
    elements = {
        profileIcon: () => cy.get('.sui-gap-2 > .sui-rounded-full > .sui-flex'),
        userDetails: () => cy.get('.sui-px-1'),
        myProfileLink: () => cy.get(':nth-child(2) > .sui-cursor-pointer > .sui-ml-sm'),
        signOutLink: () => cy.get(':nth-child(3) > .sui-cursor-pointer > .sui-ml-sm')
    }
}

export default NavigationsPage;
