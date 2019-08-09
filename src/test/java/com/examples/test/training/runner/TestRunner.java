package com.examples.test.training.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

	@RunWith (Cucumber.class)
	@CucumberOptions(
	        glue = {"com.examples.test.training.glue"},
	        features = {"src/test/resources/Features"},
	        plugin = { "pretty", "html:target/cucumber-reports",
	        "json:target/cucumber-reports/cucumber.json"},
	        tags = {"@UI, @Discount"}
	        )
	        
	public class TestRunner {    

	}

