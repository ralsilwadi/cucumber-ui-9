const { Then, When } = require('@badeball/cypress-cucumber-preprocessor')
const TGHtmlElementsPage = require('../../../pages/TGHtmlElementsPage')

const tgHtmlElementsPage = new TGHtmlElementsPage()

When(/^user clicks on the "([^"]*)" button$/, (label) => {
  tgHtmlElementsPage.clickButtonByText(label)
})

Then(/^the text under the button should be "([^"]*)"$/, (message) => {
  tgHtmlElementsPage.getButtonMessage().should('have.text', message)
})

Then(/^the text under it should be "([^"]*)"$/, (message) => {
  tgHtmlElementsPage.getButtonMessage().should('have.text', message)
})

When(/^user selects "([^"]*)" from the first dropdown menu$/, (option) => {
  tgHtmlElementsPage.getFirstDropdown().select(option)
})

When(/^user selects "([^"]*)" from the second dropdown menu$/, (option) => {
  tgHtmlElementsPage.getSecondDropdown().select(option)
})

Then(/^"([^"]*)" should be selected in the first dropdown$/, (option) => {
  tgHtmlElementsPage.getFirstDropdown().should('have.value', option)
})

Then(/^"([^"]*)" should be selected in the second dropdown$/, (option) => {
  tgHtmlElementsPage.getSecondDropdown().should('have.value', option)
})

When(/^user enters "([^"]*)" into the input field "([^"]*)"$/, (input, index) => {
  tgHtmlElementsPage.getInputboxByIndex(index).type(input)
})

When(/^user enters "([^"]*)" into the second input field$/, (input, index) => {
  tgHtmlElementsPage.getInputboxByIndex(index).type(input)
})

Then(/^the input field '1' should contain "([^"]*)"$/, (index, expectedValue) => {
  tgHtmlElementsPage.getInputboxByIndex(index).should('have.value', expectedValue)
})

Then(/^the input field "([^"]*)" should contain "([^"]*)"$/, (index, expectedValue) => {
  tgHtmlElementsPage.getInputboxByIndex(index).should('have.value', expectedValue)
})

When(/^user selects the "([^"]*)" checkbox$/, (label) => {
  tgHtmlElementsPage.getCheckboxByLabel(label).check()
})

When(/^user deselects the "([^"]*)" checkbox$/, (label) => {
  tgHtmlElementsPage.getCheckboxByLabel(label).uncheck()
})

Then(/^the "([^"]*)" checkbox should not be checked$/, (label) => {
  tgHtmlElementsPage.getCheckboxByLabel(label).should('not.be.checked')
})

When(/^user selects the "([^"]*)" and "([^"]*)" checkboxes$/, (label1, label2) => {
  tgHtmlElementsPage.getCheckboxByLabel(label1).check()
  tgHtmlElementsPage.getCheckboxByLabel(label2).check()
})

Then(/^both "([^"]*)" and "([^"]*)" checkboxes should be checked$/, (label1, label2) => {
  tgHtmlElementsPage.getCheckboxByLabel(label1).should('be.checked')
  tgHtmlElementsPage.getCheckboxByLabel(label2).should('be.checked')
})

Then(/^the "([^"]*)" checkbox should remain unchecked$/, (label) => {
  tgHtmlElementsPage.getCheckboxByLabel(label).should('not.be.checked')
})
