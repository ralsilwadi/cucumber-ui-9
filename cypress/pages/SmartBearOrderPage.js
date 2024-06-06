const SmartBearLoginPage = require('./SmartBearLoginPage')

class SmartBearOrderPage extends SmartBearLoginPage {
  /* Locators */

  getCheckBoxes() {
    return cy.get('input[type="checkbox"]')
  }

  getDeletedMessage() {
    return cy.get('#ctl00_MainContent_orderMessage')
  }
  /* Methods */
}

module.exports = SmartBearOrderPage
