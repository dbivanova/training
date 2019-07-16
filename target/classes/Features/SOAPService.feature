Feature: Bank branches search based on a BLZ codes
  
   Scenario Outline: Find bank branches in Germany using BLZ codes
    Given I run a SOAP request using code <BLZ>
    Then I verify the location <location>

    Examples: 
      | BLZ          | location   |
      |  31460290    | Viersen    |
      |  31061108  	 | Willich    |
      |	 31261282		 | Erkelenz   |
      |	 34270094		 | Solingen   |

      
   Scenario Outline: Find bank names using BLZ codes
    Given I run a SOAP request using code <BLZ>
    Then I verify the bank name <name>

    Examples: 
      | BLZ          | name		                 |
      |  43020000    | Westfalenbank           |
      |  43000000  	 | Bundesbank              |
      |	 43060129		 | Volksbank Bochum Witten |
      |	 43080083		 | Dresdner Bank           |