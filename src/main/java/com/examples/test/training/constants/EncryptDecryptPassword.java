package com.examples.test.training.constants;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
public class EncryptDecryptPassword {
    public void encryptDBPassword() {
        Base64.Encoder encoder = Base64.getEncoder();
        String normalString = "passw0rd";
        String encodedString = encoder.encodeToString(
                normalString.getBytes(StandardCharsets.UTF_8));
    }

    public String decryptDBPassword(String password) {
        Base64.Decoder decoder = Base64.getDecoder();
        return new String(decoder.decode(password));

    }

    public void encryptEShopPassword() {
        Base64.Encoder encoder = Base64.getEncoder();
        String normalString = "Test_Password1234";
        String encodedString = encoder.encodeToString(
                normalString.getBytes(StandardCharsets.UTF_8));
    }

    public String decryptEshopPassword(String eShopPassword) {
        Base64.Decoder decoder = Base64.getDecoder();
        return new String(decoder.decode(eShopPassword));
    }


}