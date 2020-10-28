/// <reference types="cypress" />

const { interfaces } = require("mocha")

context('Martial application', () => {
    beforeEach(() => {
      cy.visit('https://martial.24livehost.com/')
      cy.url().should('contain', 'martial')
    })
  
    it('the user login into the application', () => {

      cy.get(':nth-child(2) > .col-md-4')
      

      cy.get('#email')
      .type('Student@gmail.com')
      .should('include.value', 'Student@gmail.com')
      .and('include', '')
      

      cy.get('#password')
      .type('123456789')
      .should('include.value', '123456789')

      cy.get('.btn-primary')
      .should('be.visible')
      .click()
      
      cy.get('.sidebar-profile')
    })


   
  })
  

      
      
