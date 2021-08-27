const pages = ["Home", "About", "Skills"];
const links = ["mdi-github", "mdi-linkedin", "mdi-twitter",
               "mdi-pencil", "mdi-codepen", "mdi-instagram", 
               "mdi-camera"]

describe('Home Page Tests', function() {
    it('Visits homepage', function() {
      cy.visit('/');
    })
});
