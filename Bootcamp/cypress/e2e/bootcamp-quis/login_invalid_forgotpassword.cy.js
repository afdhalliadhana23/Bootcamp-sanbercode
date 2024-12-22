/// <reference types="cypress"/>
 
describe('Login Feature',() => {
    it('Pengguna login dengan username dan pasword yang sudah lupa password',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login'); 
        cy.get('[name="username"]').type('fredybaby');
        cy.get('[name="password"]').type('test123');
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]').should('have.text','Invalid credentials');
      //  cy.get('[class="oxd-input oxd-input--active"').type('have.text','username')
    })
    
 
})