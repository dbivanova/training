package com.examples.test.training.constants;

public class SQLStatements {

    public static final String SELECT_STATEMENT = "SELECT * FROM film WHERE film_id = ?;";
    public static final String SELECT_CHECK_QUERY = "SELECT * FROM inventory WHERE inventory_id = 9;";
    public static final String INSERT_STATEMENT = "INSERT into inventory(inventory_id, film_id, store_id)\n" +
            "VALUES (?, ?, ?);\n";
    public static final String UPDATE_STATEMENT = "UPDATE film_actor SET film_id = ? where actor_id = ?;";
    public static final String SELECT_CHECK_UPDATE = "SELECT FROM film_actor WHERE actor_id = 33;";
    public static final String DELETE_STATEMENT = "DELETE FROM film_category WHERE film_id = ?";
    public static final String SELECT_CHECK_DELETE = "SELECT FROM film_category WHERE category_id = ?;";
    public static final String CLEAN_UP_DELETE = "DELETE FROM inventory WHERE inventory_id BETWEEN 9 and 10;";
    public static final String CLEAN_UP_UPDATE1 = "UPDATE film_actor SET film_id = 3 WHERE actor_id = 3;";
    public static final String CLEAN_UP_UPDATE2 = "UPDATE film_actor SET film_id = 1 WHERE actor_id = 1;";
    public static final String CLEAN_UP_INSERT1 = "INSERT INTO film_category (category_id, film_id, last_updated) VALUES(6, 6,'2015-12-01 08:12:34-07');";
    public static final String CLEAN_UP_INSERT2 = "INSERT INTO film_category (category_id, film_id, last_updated) VALUES(7, 7,'2015-02-01 16:12:34-07');";

}
