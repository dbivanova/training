Feature: Online Bookshop Discounts
  This is to test the discount system in the Bard online shop

@Discount
Scenario Outline: Check discount
Given I am logged into the online bookshop
When I add a specific book to the basket
#And I change the quantity in the basket
#Then I will see percent discount <discount> according to the amount of the total <total>
#
Examples:
| discount | total |
| 1        | 30    |
#| 5        | 70    |
#| 7        | 120   |
#| 10       | 125   |