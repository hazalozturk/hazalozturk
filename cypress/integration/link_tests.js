describe('Social Links Tests', function() {
    it('Visits homepage', function() {
      cy.visit('/');
    })
});

describe('Social Links Tests', function () {
    it('Visits github', function() {
        cy.visit('/');
        cy.get('.mdi-github').click()
    })
})

describe('Social Links Tests', function () {
    it('Visits linkedin', function() {
        cy.visit('/');
        cy.get('.mdi-linkedin').click()
    })
})

describe('Social Links Tests', function () {
    it('Visits twitter', function() {
        cy.visit('/');
        cy.get('.mdi-twitter').click()
    })
})

describe('Social Links Tests', function () {
    it('Visits codepen', function() {
        cy.visit('/');
        cy.get('.mdi-codepen').click()
    })
})

describe('Social Links Tests', function () {
    it('Visits dribbble', function() {
        cy.visit('/');
        cy.get('.mdi-pencil').click()
    })
})

describe('Social Links Tests', function () {
    it('Visits instagram', function() {
        cy.visit('/');
        cy.get('.mdi-instagram').click()
    })
})

describe('Social Links Tests', function () {
    it('Visits gurushots', function() {
        cy.visit('/');
        cy.get('.mdi-camera').click()
    })
})