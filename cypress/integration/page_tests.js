const pages = ["Home", "About", "Skills"];
const links = ["mdi-github-circle", "mdi-linkedin", "mdi-twitter-circle",
               "mdi-dribbble", "mdi-codepen", "mdi-instagram", 
               "mdi-camera"]

describe('Home Page Tests', function() {
    it('Visits homepage', function() {
      cy.visit('/');
    })
});

describe('Home Page Tests', function () {
    it('Home Page has all the pages', function() {
        cy.visit('/');
        pages.forEach(function(page) {
            cy.contains(page);
        })
    })
});

describe('Home Page Tests', function () {
    it('Home Page has all the links', function() {
        cy.visit('/');
        links.forEach(function(link, index) {
            cy.get(`:nth-child(${index+1}) > .v-list-item__icon > .subheading > .v-btn__content > .v-icon`)
            .should('have.class',  link)
        })
    })
});

describe('Home Page Tests', function () {
    it('Visits About Page', function() {
        cy.visit('/');
        cy.contains('About').click();
        cy.url().should('include', '/about')
    })
})

describe('Home Page Tests', function () {
    it('Visits Skills Page', function() {
        cy.visit('/');
        cy.contains('Skills').click();
        cy.url().should('include', '/skills')
    })
})