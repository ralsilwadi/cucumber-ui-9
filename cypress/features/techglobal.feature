Feature: Interaction with TechGlobal HtmlElements page

  Background:
    Given user navigates to "https://techglobal-training.com/frontend/"
    When user clicks on the "Html Elements" card
    Then user should see the "Html Elements" page heading
    And the URL should contain "elements"

  Scenario: Validate HTML elements card, Register and Sign in Buttons
    When user clicks on the "Register" button
    Then the text under the button should be "You clicked on “Register”"
    When user clicks on the "Sign in" button
    Then the text under the button should be "You clicked on “Sign in”"

  Scenario: Validate HTML Elements card, Interact with text inputs - Choose options from the dropdown
    When user selects "Apple" from the first dropdown menu
    And user selects "Microsoft" from the second dropdown menu
    Then "Apple" should be selected in the first dropdown
    And "Microsoft" should be selected in the second dropdown

  Scenario: Validate HTML Elements card, Interact with text inputs
    When user enters "test input" into the input field "1"
    And user enters "another test input" into the input field "2"
    Then the input field "1" should contain "test input"
    And the input field "2" should contain "another test input"

  Scenario: Validate HTML Elements card, Toggle checkboxes and verify the state
    When user selects the "Microsoft" checkbox
    And user deselects the "Microsoft" checkbox
    Then the "Microsoft" checkbox should not be checked
    When user selects the "Apple" and "Tesla" checkboxes
    Then both "Apple" and "Tesla" checkboxes should be checked
    And the "Microsoft" checkbox should remain unchecked
