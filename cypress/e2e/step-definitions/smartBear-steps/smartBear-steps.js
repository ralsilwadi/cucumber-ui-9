import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import SmartBearLoginPage from '../../../pages/SmartBearLoginPage'
import SmartBearOrderPage from '../../../pages/SmartBearOrderPage'

const smartBearLoginPage = new SmartBearLoginPage()
const smartBearOrderPage = new SmartBearOrderPage()

Given(/^user is on "([^"]*)"$/, (url) => {
  cy.visit(url)
})

When(/^user enters username as "([^"]*)"$/, (user) => {
  smartBearLoginPage.getUserField().type(user)
})

When(/^user enters password as "([^"]*)"$/, (pass) => {
  smartBearLoginPage.getPasswordField().type(pass)
})

When(/^user clicks on "([^"]*)" button$/, (button) => {
  smartBearLoginPage.getButton(button).click()
})

Then(/^user should see "([^"]*)" message$/, (message) => {
  smartBearLoginPage.getFailiureMessage().should('have.text', message)
})

Then(/^user should be routed to "([^"]*)"$/, (url) => {
  cy.url().should('contain', url)
})

Then(/^all rows should be checked$/, () => {
  smartBearOrderPage.getCheckBoxes().each(($el) => {
    cy.wrap($el).should('have.attr', 'checked', 'checked')
  })
})

Then(/^all rows should be unchecked$/, () => {
  smartBearOrderPage.getCheckBoxes().each(($el) => {
    cy.wrap($el).should('not.have.attr', 'checked')
  })
})

Then(/^validate all orders are deleted from the List of All Orders$/, () => {
  smartBearOrderPage.getCheckBoxes().should('not.exist')
})

Then(/^validate user sees "([^"]*)" message$/, (message) => {
  smartBearOrderPage.getDeletedMessage().should('contain', message)
})

// Then(/^validate below menu items are displayed$/, () => {
//   return true
// })

// When(/^user enters username as "([^"]*)"$/, (args1) => {
//   console.log(args1)
//   return true
// })

// When(/^user enters password as "([^"]*)"$/, (args1) => {
//   console.log(args1)
//   return true
// })

// When(/^user clicks on "([^"]*)" button$/, (args1) => {
//   console.log(args1)
//   return true
// })

// Then(/^user should be routed to "([^"]*)"$/, (args1) => {
//   console.log(args1)
//   return true
// })

// When(/^user clicks on "([^"]*)" button$/, (args1) => {
//   console.log(args1)
//   return true
// })

// When(/^user clicks on "([^"]*)" button$/, (args1) => {
//   console.log(args1)
//   return true
// })

// When(/^user enters username as "([^"]*)"$/, (args1) => {
//   console.log(args1)
//   return true
// })

// When(/^user enters password as "([^"]*)"$/, (args1) => {
//   console.log(args1)
//   return true
// })

// When(/^user clicks on "([^"]*)" button$/, (args1) => {
//   console.log(args1)
//   return true
// })

// Then(/^user should be routed to "([^"]*)"$/, (args1) => {
//   console.log(args1)
//   return true
// })

// When(/^user clicks on "([^"]*)" menu item$/, (args1) => {
//   console.log(args1)
//   return true
// })

// When(/^user enters all product information$/, () => {
//   return true
// })

// When(/^user enters all address information$/, () => {
//   return true
// })

// When(/^user enters all payment information$/, () => {
//   return true
// })

// When(/^user clicks on "([^"]*)" button$/, (args1) => {
//   console.log(args1)
//   return true
// })

// When(/^user clicks on "([^"]*)" menu item$/, (args1) => {
//   console.log(args1)
//   return true
// })

// Then(/^validate all information entered displayed correct with the order$/, () => {
//   return true
// })
