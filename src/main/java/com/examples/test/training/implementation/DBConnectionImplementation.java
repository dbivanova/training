package com.examples.test.training.implementation;

import com.examples.test.training.constants.ReadProperties;
import com.examples.test.training.constants.SQLStatements;
import org.junit.Assert;

import java.sql.*;

public class DBConnectionImplementation {

    private static String filmName;
    private static int store_id;
    private static String actor_name;
    private static int film_id;
    private static String title;

    public DBConnectionImplementation() throws Exception {
    }

    public Connection connection() throws Exception {
        ReadProperties properties = new ReadProperties();
        return DriverManager.getConnection(properties.getURL(), properties.getUsername(), properties.getPassword());
    }

    public void selectQuery(int film_id) throws Exception {

        PreparedStatement select = connection().prepareStatement(SQLStatements.SELECT_STATEMENT);
        select.setInt(1, film_id);
        ResultSet rs = select.executeQuery();
        while (rs.next()) {
            filmName = rs.getString("title");
            System.out.println(filmName);
        }
    }

    public void verifySelect() {
        Assert.assertEquals("Die Hard", filmName);
    }

    public void verifyAnotherSelect() {
        Assert.assertEquals("LOTR: The Two Towers", filmName);
    }

    public void insert(int inventory_id, int film_id, int store_id) throws Exception {

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
            store_id = response.getInt("store_id");
            System.out.println(store_id);
        }
        Assert.assertEquals(67, store_id);
    }

    public void update(int film_id, int actor_id) throws Exception {

        PreparedStatement update = connection().prepareStatement(SQLStatements.UPDATE_STATEMENT);
        update.setInt(1, film_id);
        update.setInt(2, actor_id);
        update.executeUpdate();
    }

    public void verifyUpdate() throws Exception {

        PreparedStatement selectCheckUpdate = connection().prepareStatement(SQLStatements.SELECT_CHECK_UPDATE);
        ResultSet response = selectCheckUpdate.executeQuery();
        while (response.next()) {
            actor_name = response.getString("actor_name");
            System.out.println(actor_name);
            Assert.assertEquals("Liv Taylor", actor_name);
        }
    }

    public void deleteQuery(int film_id) throws Exception {
        PreparedStatement delete = connection().prepareStatement(SQLStatements.DELETE_STATEMENT);
        delete.setInt(1, film_id);
        delete.executeUpdate();
    }

    public void deleteVerify(int category_id) throws Exception {

        PreparedStatement selectCheckDelete = connection().prepareStatement(SQLStatements.SELECT_CHECK_DELETE);
        selectCheckDelete.setInt(1, category_id);
        ResultSet rs = selectCheckDelete.executeQuery();
        Assert.assertFalse("No results", rs.next());
    }

    public void insertNewFilm(int film_id, String title, String description, int rental_duration, int rental_rate) throws Exception {

        PreparedStatement insert = connection().prepareStatement(SQLStatements.INSERT2);
        insert.setInt(1, film_id);
        insert.setString(2, title);
        insert.setString(3, description);
        insert.setInt(4, rental_duration);
        insert.setInt(5, rental_rate);
        insert.executeUpdate();
    }

    public void selectNewFilm(int film_id) throws Exception {
        PreparedStatement newFilmCheck = connection().prepareStatement(SQLStatements.SELECT2);
        newFilmCheck.setInt(1, film_id);
        ResultSet newFilmRow = newFilmCheck.executeQuery();
        while (newFilmRow.next()) {
            title = newFilmRow.getString("title");
            System.out.println(title);
        }
    }

    public void verifyNewFilm() {
        Assert.assertTrue(title.contentEquals("\"Primal Fear\""));
    }

    public void updateNewFilm(String title, int film_id) throws Exception {

        PreparedStatement updateNewFilm = connection().prepareStatement(SQLStatements.UPDATE2);
        updateNewFilm.setString(1, title);
        updateNewFilm.setInt(2, film_id);
        updateNewFilm.executeUpdate();

    }

    public void verifyUpdateNewFilm() throws Exception {

        PreparedStatement verifyUpdatedFilm = connection().prepareStatement(SQLStatements.VERIFY_UPDATE2);
        ResultSet updatedFilm = verifyUpdatedFilm.executeQuery();
        while (updatedFilm.next()) {
            title = updatedFilm.getString("title");
            System.out.println(title);
            Assert.assertTrue(title.contentEquals("\"Along Came Spider\""));
        }
    }

    public void deleteNewFilm(int film_id) throws Exception {

        PreparedStatement deleteNewFilm = connection().prepareStatement(SQLStatements.DELETE_UPDATED_FILM);
        deleteNewFilm.setInt(1, film_id);
        deleteNewFilm.executeUpdate();
    }

    public void verifyDeletedFilm(String title) throws Exception {
        PreparedStatement selectDeletedFilm = connection().prepareStatement(SQLStatements.VERIFY_DELETED_FILM);
        selectDeletedFilm.setString(1, title);
        ResultSet deleted = selectDeletedFilm.executeQuery();
        Assert.assertFalse("No results", deleted.next());
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

