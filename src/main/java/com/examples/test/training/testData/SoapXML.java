package com.examples.test.training.testData;

public class SoapXML {
	
    private String BLZ;

    public String getBLZ() {
    	
        return BLZ;
    }	
    public void setBLZ(String BLZ) {
		
		this.BLZ = BLZ;
		
	}
	
	public String getBody() {
			return
			"<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:blz=\"http://thomas-bayer.com/blz/\">\r\n" + 
			"   <soapenv:Header/>\r\n" + 
			"   <soapenv:Body>\r\n" + 
			"      <blz:getBank>\r\n" + 
			"         <blz:blz>" + BLZ + "</blz:blz>\r\n" + 
			"      </blz:getBank>\r\n" + 
			"   </soapenv:Body>\r\n" + 
			"</soapenv:Envelope>";}

}

