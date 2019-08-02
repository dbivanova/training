package com.examples.test.training.implementation;

import com.examples.test.training.constants.ReadProperties;
import com.examples.test.training.constants.SQLStatements;
import org.junit.Assert;

import java.sql.*;

public class DBConnectionImplementation {

    private static String filmName;
    private static int film_id;
    private static int inventory_id;
    private static int store_id;
    private static int actor_id;
    private static String actor_name;
    private static int category_id;
    private static String result;


    public DBConnectionImplementation() throws Exception {
    }


    public Connection connection() throws Exception {
        ReadProperties properties = new ReadProperties();
        return DriverManager.getConnection(properties.getURL(), properties.getUsername(), properties.getPassword());

    }

    public void selectQuery(int film_id) throws Exception {
        this.film_id = film_id;

        PreparedStatement select = connection().prepareStatement(SQLStatements.SELECT_STATEMENT);
        select.setInt(1, film_id);
        ResultSet rs = select.executeQuery();
        while (rs.next()) {
            filmName = rs.getString("title");
//				System.out.println(filmName);
        }
    }

    public void verifySelect() {
        Assert.assertEquals("Die Hard", filmName);
    }

    public void verifyAnotherSelect() {
        Assert.assertEquals("LOTR: The Two Towers", filmName);

    }

    public void insert(int inventory_id, int film_id, int store_id) throws Exception {
        this.inventory_id = inventory_id;
        this.film_id = film_id;
        this.store_id = store_id;

        PreparedStatement insert = connection().prepareStatement(SQLStatements.INSERT_STATEMENT);
        insert.setInt(1, inventory_id);
        insert.setInt(2, film_id);
        insert.setInt(3, store_id);
        insert.executeUpdate();
    }

    public void verifyInsert() throws Exception {

        PreparedStatement selectCheck = connection().prepareStatement(SQLStatements.SELECT_CHECK_QUERY);
        ResultSet response = selectCheck.executeQuery();
        while (response.next()) {
            this.store_id = response.getInt("store_id");
        }
        Assert.assertEquals(67, store_id);

    }

    public void update(int film_id, int actor_id) throws Exception {
        this.actor_id = actor_id;
        this.film_id = film_id;

        PreparedStatement update = connection().prepareStatement(SQLStatements.UPDATE_STATEMENT);
        update.setInt(1, film_id);
        update.setInt(2, actor_id);
        update.executeUpdate();
    }

    public void verifyUpdate() throws Exception {

        PreparedStatement selectCheckUpdate = connection().prepareStatement(SQLStatements.SELECT_CHECK_UPDATE);
        ResultSet response = selectCheckUpdate.executeQuery();
        while (response.next()) {
            this.actor_name = response.getString("actor_name");
            System.out.println(actor_name);
            Assert.assertEquals("Liv Taylor", actor_name);
        }
    }

    public void deleteQuery(int film_id) throws Exception {
        this.film_id = film_id;
        PreparedStatement delete = connection().prepareStatement(SQLStatements.DELETE_STATEMENT);
        delete.setInt(1, film_id);
        delete.executeUpdate();
    }

    public void deleteVerify(int category_id) throws Exception {
        this.category_id = category_id;

        PreparedStatement selectCheckDelete = connection().prepareStatement(SQLStatements.SELECT_CHECK_DELETE);
        selectCheckDelete.setInt(1, category_id);
        ResultSet rs = selectCheckDelete.executeQuery();
        Assert.assertFalse("No results", rs.next());
    }

 	public void cleanUp1() throws Exception {
		PreparedStatement cleanUpInsert1 = connection().prepareStatement(SQLStatements.CLEAN_UP_INSERT1);
		cleanUpInsert1.executeUpdate();
		PreparedStatement cleanUpInsert2 = connection().prepareStatement(SQLStatements.CLEAN_UP_INSERT2);
		cleanUpInsert2.executeUpdate();
	}
	public void cleanUp2() throws Exception {
		PreparedStatement cleanUpUpdate1 = connection().prepareStatement(SQLStatements.CLEAN_UP_UPDATE1);
		cleanUpUpdate1.executeUpdate();
		PreparedStatement cleanUpUpdate2 = connection().prepareStatement(SQLStatements.CLEAN_UP_UPDATE2);
		cleanUpUpdate2.executeUpdate();
	}
	public void cleanUp3() throws Exception {
		PreparedStatement cleanUpDel = connection().prepareStatement(SQLStatements.CLEAN_UP_DELETE);
		cleanUpDel.executeUpdate();
	}
	public void closeConnection() throws Exception {
		connection().close();
	}
}

