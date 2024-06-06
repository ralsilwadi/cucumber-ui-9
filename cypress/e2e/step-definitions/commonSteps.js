const { Then, Given, When } = require('@badeball/cypress-cucumber-preprocessor')
const TGBasePage = require('../../pages/TGBasePage')

const tgBasePage = new TGBasePage()

Given(/^user navigates to "([^"]*)"$/, (url) => {
  cy.visit(url)
})

When(/^user clicks on the "([^"]*)" card$/, (cardName) => {
  cy.contains(cardName).click()
})

Then(/^the URL should contain "([^"]*)"$/, (url) => {
  cy.url().should('contain', url)
})

Then(/^user should see the "([^"]*)" page heading$/, (message) => {
  tgBasePage.getHeading().should('have.text', message)
})
