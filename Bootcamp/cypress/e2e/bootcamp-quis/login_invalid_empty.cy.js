/// <reference types="cypress"/>
 
describe('Login Feature',() => {
    it('Pengguna Login dengan username kosong dan password kosong',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login'); 
        cy.get('[name="username"]').type(' ');
        cy.get('[name="password"]').type(' ');
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
     //   cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('have.text','Dashboard')
        cy.get('[class="oxd-input oxd-input--active oxd-input--error"').should('be.visible');
    })
    
 
})