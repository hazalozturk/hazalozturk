const pages = ["Home", "About", "Skills"];
const links = ["mdi-github", "mdi-linkedin", "mdi-twitter",
               "mdi-pencil", "mdi-codepen", "mdi-instagram", 
               "mdi-camera"]

describe('Social Links Tests', function() {
    it('Visits homepage', function() {
      cy.visit('/');
    })
});

describe('Social Links Tests', function () {
    it('Visits homepage', function() {
        cy.visit('/');
        cy.get('.mdi-github').click()
    })
})

describe('Social Links Tests', function () {
    it('Visits homepage', function() {
        cy.visit('/');
        cy.get('.mdi-linkedin').click()
    })
})

describe('Social Links Tests', function () {
    it('Visits homepage', function() {
        cy.visit('/');
        cy.get('.mdi-twitter').click()
    })
})

describe('Social Links Tests', function () {
    it('Visits homepage', function() {
        cy.visit('/');
        cy.get('.mdi-codepen').click()
    })
})

describe('Social Links Tests', function () {
    it('Visits homepage', function() {
        cy.visit('/');
        cy.get('.mdi-pencil').click() /// dribbble
    })
})

describe('Social Links Tests', function () {
    it('Visits homepage', function() {
        cy.visit('/');
        cy.get('.mdi-instagram').click()
    })
})

describe('Social Links Tests', function () {
    it('Visits homepage', function() {
        cy.visit('/');
        cy.get('.mdi-camera').click() /// Gurushots
    })
})