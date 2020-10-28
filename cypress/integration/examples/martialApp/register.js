/// <reference types="cypress" />



context('Martial application', () => {
    beforeEach(() => {
      cy.visit('https://martial.24livehost.com/')
      cy.url().should('contain', 'martial')
      cy.viewport('macbook-15')
      cy.wait(200)
    })
  
    it('the user wants to register', () => {
        cy.viewport('iphone-6+')
        cy.wait(200)
        cy.get('.nav-link')
        .click()
        .and('be.visible')

        cy.get('#email')
        .clear()
        .type('marcusfuntional01@gmail.com').should('have.value', 'marcusfuntional01@gmail.com')
        .focus()
        .should('have.class', 'form-control')

        cy.get('#password')
        .clear()
        .type('marbella').should('have.value', 'marbella')
        .focus()
        .should('have.class', 'form-control')

        
        
        

    })

   

   
   
  })
  

      
      
