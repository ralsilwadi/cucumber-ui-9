const TGBasePage = require('./TGBasePage')

class TGLoginPage extends TGBasePage {
  /* Locators */
  getUsername() {
    return cy.get('#username')
  }

  getPassword() {
    return cy.get('#password')
  }

  getLoginBtn() {
    return cy.get('#login_btn')
  }

  getMessage(type) {
    if (type === 'failiure') return cy.get('#error_message')
    if (type === 'success') return cy.get('#success_lgn')
  }
  /* Methods */
}

module.exports = TGLoginPage
