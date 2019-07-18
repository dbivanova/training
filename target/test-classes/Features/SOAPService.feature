Feature: Bank branches search based on a BLZ codes
  
   Scenario Outline: Find bank branches in Germany using BLZ codes
    Given I run a SOAP request using code <BLZ>
    Then I verify the location <location>
		And the bank name is <name>
		
		Examples:
				  |  BLZ         | location   | name  																	|
    		  |  31460290    | Viersen    | Volksbank Viersen                       |
      		|  31061108  	 | Willich    | Volksbank Willich                       |
      		|	 31261282		 | Erkelenz   | Volksbank Erkelenz-Hückelhoven-Wegberg  |
      		|	 34270094		 | Solingen   | Deutsche Bank                           |     