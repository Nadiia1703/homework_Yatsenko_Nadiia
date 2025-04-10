Feature: RZT Cucumber.js Autotest

Background:
    Given Rozetka Catalog Tests 

Scenario: Verify catalog items
    When open catalog
    Then I should see laptop items