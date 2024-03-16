class PageNavigation {
    elements = {
        profileIcon: () => cy.get('.sui-gap-2 > .sui-rounded-full > .sui-flex'),
        myProfileLink: () => cy.get(':nth-child(2) > .sui-cursor-pointer > .sui-ml-sm'),
        signOutLink: () => cy.get(':nth-child(3) > .sui-cursor-pointer > .sui-ml-sm'),
        userDetails: () => cy.get('.sui-px-1')
    }
}

export default PageNavigation;
