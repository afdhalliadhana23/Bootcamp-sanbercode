/// <reference types="cypress"/>
 
describe('Login Feature',() => {
    it('Pengguna Login dengan username dan password duplicate',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login'); 
        cy.get('[name="username"]').type('admin');
        cy.get('[name="password"]').type('admin');
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]').should('have.text','Invalid credentials');
    })
    
 
})