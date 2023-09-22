/// <reference types='cypress' />
let user;
const username = `gogoDuck`;
const password = '1234qwert';

describe('The product store', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
  });

  it('should allow the user to register', () => {
    cy.clickOnElement('#signin2', 'Sign up');
    cy.get('#sign-username').invoke('val', user.newUsername);
    cy.get('#sign-password').invoke('val', password);
    cy.clickOnElement('.btn', 'Sign up');
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Sign up successful.');
    });
    cy.on('window:confirm', () => {
      return true;
    });
  });

  it('should allow the user to login', () => {
    cy.clickOnElement('#login2', 'Log in');
    cy.get('#loginusername').invoke('val', username);
    cy.get('#loginpassword').invoke('val', password);
    cy.clickOnElement('.btn', 'Log in');
    cy.get('#nameofuser').should('contain', `Welcome ${username}`);
  });

  it('should allow the user to add the product to a cart', () => {
    cy.clickOnElement('#login2', 'Log in');
    cy.get('#loginusername').invoke('val', username);
    cy.get('#loginpassword').invoke('val', password);
    cy.clickOnElement('.btn', 'Log in');
    cy.clickOnElement('.hrefch', 'Samsung galaxy s6');
    cy.clickOnElement('[onclick="addToCart(1)"]', 'Add to cart');
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Product added.');
    });
    cy.on('window:confirm', () => {
      return true;
    });
  });
});
