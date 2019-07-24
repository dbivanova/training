package testData;

public class PostJSONAuthors {

	public  int ID;
	public  int IDBook;
	public  String firstName;
	public  String lastName;

	public void setAuthorId(int ID) {

		this.ID = ID;
	}

	public void setBookID(int IDBook) {

		this.IDBook = IDBook;
	}

	public void setFirstName(String firstName) {

		this.firstName = firstName;

	}

	public void setLastName(String lastName) {

		this.lastName = lastName;

	}

	public int ID() {

		return ID;

	}

	public int IDBook() {

		return IDBook;
	}

	public String firstName() {

		return firstName;
	}

	public String lastName() {

		return lastName;
	}

}