package com.examples.test.training.glue;

import com.examples.test.training.implementation.DBConnectionImplementation;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class DBConnectionStepDef {
    DBConnectionImplementation queries = new DBConnectionImplementation();

    public DBConnectionStepDef() throws Exception {
    }

    @Before("@DB")
    public void openConnection() throws Exception {
        queries.connection();
    }

    @After("@DB")
    public void cleanUp() throws Exception {
        queries.closeConnection();
    }

    @After("@Insert")
    public void cleanUpInsert() throws Exception {
        queries.cleanUp1();
    }

    @After("@Update")
    public void cleanUpUpdate() throws Exception {
        queries.cleanUp2();
    }

    @After("@Delete")
    public void cleanUpDelete() throws Exception {
        queries.cleanUp3();
    }

    @When("I send a select query using (\\d+) to the DB")
    public void selectQuery(int film_id) throws Exception {
        queries.selectQuery(film_id);
    }

    @Then("I will get title Die Hard in the response")
    public void selectVerify() throws Throwable {
        queries.verifySelect();
    }

    @Then("I will get title LOTR: The Two Towers in the response")
    public void anotherSelectVerify() {
        queries.verifyAnotherSelect();
    }

    @When("^I send new (.*?), (.*?) and (.*?) information to the DB via insert statement$")
    public void insertStatement(int inventory_id, int film_id, int store_id) throws Exception {
        queries.insert(inventory_id, film_id, store_id);
    }

    @Then("New row will be added to the inventory table with inventory_id (.*?)")
    public void newRowVerify(int store_id) throws Exception {
        queries.verifyInsert();
    }

    @When("I send an update query to change (.*?) where actor_id is (.*?)")
    public void updateQuery(int film_id, int actor_id) throws Exception {
        queries.update(film_id, actor_id);
    }

    @Then("The rows in the DB will be successfully updated")
    public void verifyUpdate() throws Exception {
        queries.verifyUpdate();
    }

    @When("I send a delete query using the (.*?) to the film_category table")
    public void deleteQuery(int film_id) throws Exception {
        queries.deleteQuery(film_id);
    }

    @Then("An existing entry with id (.*?) will be successfully deleted")
    public void verifyDelete(int category_id) throws Exception {
        queries.deleteVerify(category_id);

    }

    @When("I send new (.*?), (.*?), (.*?), (.*?) and (.*?) to the DB via insert statement")
    public void insertNewFilm(int film_id, String title, String description, int rental_duration, int rental_rate) throws Exception {
        queries.insertNewFilm(film_id, title, description, rental_duration, rental_rate);
    }

    @And("I send a select statement using id (.*?)")
    public void selectNewFilm(int film_id) throws Exception {
        queries.selectNewFilm(film_id);
    }

    @Then("I will get title \"Primal Fear\" in the response")
    public void verifyNewFilm() {
        queries.verifyNewFilm();
    }

    @When("I send an update statement to change the title (.*?) using id (.*?) to the film table")
    public void updateNewFilm(String title, int film_id) throws Exception {
        queries.updateNewFilm(title, film_id);
    }

    @Then("The table will be successfully updated")
    public void verifyUpdatedFilm() throws Exception {
        queries.verifyUpdateNewFilm();
    }

    @When("I execute a delete statement using id (.*?) in the film table")
    public void deleteNewFilm(int film_id) throws Exception {
        queries.deleteNewFilm(film_id);
    }

    @Then("The existing entry with title (.*?) will be successfully deleted")
    public void verifyDelete(String title) throws Exception {
        queries.verifyDeletedFilm(title);
    }
}
