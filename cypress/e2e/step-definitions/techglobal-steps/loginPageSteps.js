const { Then, When } = require('@badeball/cypress-cucumber-preprocessor')
const TGLoginPage = require('../../../pages/TGLoginPage')

const tgLoginPage = new TGLoginPage()

When(/^user enter username as "([^"]*)" and password as "([^"]*)"$/, (user, pass) => {
  tgLoginPage.getUsername().type(user)
  tgLoginPage.getPassword().type(pass)
})

When(/^user clicks Login button$/, () => {
  tgLoginPage.getLoginBtn().click()
})

Then(/^user should see a "([^"]*)"$/, (message) => {
  tgLoginPage.getErrorMessage().should('have.text', message)
})

Then(/^user should see the "([^"]*)" message "([^"]*)"$/, (type, message) => {
  tgLoginPage.getMessage(type).should('have.text', message)
})
