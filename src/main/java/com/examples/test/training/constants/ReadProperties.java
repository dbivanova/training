package com.examples.test.training.constants;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class ReadProperties {
    EncryptDecryptPassword encryptedData = new EncryptDecryptPassword();
    public Properties properties = null;
    public InputStream input = ReadProperties.class.getClassLoader().getResourceAsStream("config/config.properties");

    public ReadProperties() throws IOException {
        properties = new Properties();
        properties.load(input);
    }

    public String getURL() {
        return properties.getProperty("url");
    }

    public String getUsername() {
        return properties.getProperty("username");
    }

    public String getPassword() {
        return encryptedData.decryptDBPassword(properties.getProperty("password"));
    }

    public String getEshopUsername() {
        return properties.getProperty("eShopUsername");
    }

    public String getEshopPassword() {
        return encryptedData.decryptEshopPassword(properties.getProperty("eShopPassword"));
    }
}
