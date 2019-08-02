@DB
Feature: DB Connection test
  I want to test my DB connection.

  Scenario Outline: Test for select operation

    When I send a select query using <film_id> to the DB
    Then I will get title <title> in the response
    Examples:
      | film_id | title                |
      | 1       | Die Hard             |
      | 3       | LOTR: The Two Towers |

  @Insert
  Scenario Outline: Test for insert operation

    When I send new <inventory_id>, <film_id> and <store_id> information to the DB via insert statement
    Then New row will be added to the inventory table with inventory_id <inventory_id>
    Examples:
      | inventory_id | film_id | store_id |
      | 9            | 11      | 67       |
      | 10           | 12      | 22       |

  @Update
  Scenario Outline: Test for update operation

    When I send an update query to change <film_id> where actor_id is <actor_id>
    Then The rows in the DB will be successfully updated
    Examples:
     | film_id | actor_id |
     | 33        | 3        |
     | 11        | 1        |

  @Delete
  Scenario Outline: Test for delete operation

    When I send a delete query using the <film_id> to the film_category table
    Then An existing entry with id <category_id> will be successfully deleted
    Examples:
      | film_id | category_id |
      | 6       | 6           |
      | 7       | 7           |