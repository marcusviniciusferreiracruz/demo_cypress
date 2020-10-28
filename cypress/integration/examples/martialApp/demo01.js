/// <reference types="cypress" />



context('Martial application', () => {
    beforeEach(() => {
      cy.visit('https://martial.24livehost.com/')
      cy.url().should('contain', 'martial')
    })
  
    it('the user login into the application', () => {

      cy.get(':nth-child(2) > .col-md-4').contains('E-Mail Address')
      cy.get('#email')
      .type('Student@gmail.com')
      .should('include.value', 'Student@gmail.com')
      
      
      cy.get(':nth-child(3) > .col-md-4').should('be.visible')
      cy.get('#password')
      .type('123456789')
      .should('include.value', '123456789')

      cy.get('.btn-primary')
      .should('be.visible')
      .click()
      
      cy.get('.sidebar-profile').should('be.visible')
      
    })

    it('the user login into the application with wrong Email', () => {

      cy.get(':nth-child(2) > .col-md-4')
      cy.get('#email')
      .type('Student@gmai.com')
      .should('include.value', 'Student@gmai.com')

      cy.get(':nth-child(3) > .col-md-4').should('be.visible')
      cy.get('#password')
      .type('123456789')
      .should('include.value', '123456789')

      cy.get('.btn-primary')
      .should('be.visible')
      .click()

      cy.get('strong').should('contain', 'These credentials do not match our records.')
    })

    it('the user login into the application with wrong pass', () => {

      cy.get(':nth-child(2) > .col-md-4')
      cy.get('#email')
      .type('Student@gmai.com')
      .should('include.value', 'Student@gmai.com')

      cy.get(':nth-child(3) > .col-md-4').should('be.visible')
      cy.get('#password')
      .type('1234567891')
      .should('include.value', '1234567891')

      cy.get('.btn-primary')
      .should('be.visible')
      .click()

      cy.get('strong').should('contain', 'These credentials do not match our records.')
    })



   
  })
  

      
      
