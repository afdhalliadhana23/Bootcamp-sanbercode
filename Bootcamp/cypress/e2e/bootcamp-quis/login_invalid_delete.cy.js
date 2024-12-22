/// <reference types="cypress"/>
 
describe('Login Feature',() => {
    it('Pengguna login dengan username dan pasword yang sudah di hapus',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login'); 
        cy.get('[name="username"]').type('toretto');
        cy.get('[name="password"]').type('qwerty123456');
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]').should('have.text','Invalid credentials');
    })
    
 
})