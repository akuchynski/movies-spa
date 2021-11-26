/// <reference types="cypress" />

describe('end-to-end test for search action', () => {
    beforeEach(() => {
        cy.visit('http://localhost:9000');
    });

    it('can perform search action and open movie details', () => {

        const queryText = 'land';
        
        cy.get('#searchQuery').type(`${queryText}{enter}`);

        cy.get('.movie-list .item')
            .should('have.length', 10)
            .contains(queryText);

        cy.url().should('include', queryText);

        cy.get('.movie-list .item')
            .eq(1)
            .click();

        cy.get('.title .name')
            .should('contain.text', queryText);
    });

});