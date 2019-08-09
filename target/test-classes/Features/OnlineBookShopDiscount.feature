Feature: Online Bookshop Discounts
  This is to test the discount system in the Bard online shop

  @Discount
  Scenario: Check discount 1 percent
    Given I am logged into the online bookshop
    When I add a book with total value between 1 and 30 to the basket
    Then I will see discount of 1%
#
#  @Discount
#  Scenario: Check discount 5 percent
#    Given I am logged into the online bookshop
#    When I add two books with total value between 31 and 70 to the basket
#    Then I will see discount of 5%
#
#  @Discount
#  Scenario: Check discount 7 percent
#    Given I am logged into the online bookshop
#    When I add three books with total value between 71 and 120 to the basket
#    Then I will see discount of 7%
#
#  @Discount
#  Scenario: Check discount 10 percent
#    Given I am logged into the online bookshop
#    When I add five books with total value above 121 to the basket
#    Then I will see discount of 10%
