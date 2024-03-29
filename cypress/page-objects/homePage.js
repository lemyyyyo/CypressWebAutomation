class HomePage {

    elements = {
        homeText: () => cy.get('.sui-text-b1').contains('Home'),
        userName: () => cy.get('.col-lg-8 > .sui-font-heading'),
        email: () => cy.get('.col-lg-8 > .sui-text-darkGray-lighter'),
        userId: () => cy.get('.tw-mt-1')
    }
}

export default HomePage;