package main;

import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.Statement;
import java.sql.ResultSet;

public class StatementCRUD_11a {

	public static void main(String[] args) {
		String url = "jdbc:mysql://localhost:3306/cvr_wt_course";
		String uname = "root";
		String password = "akashbuv";
		String insertRecord = "INSERT INTO students(id, name, marks) VALUES (4, 'Baka Krishna', 100)";
		String updateRecord = "UPDATE students SET marks = 99 WHERE id = 2";
		String deleteRecord = "DELETE FROM students WHERE id = 1";
		
		try {
			// 1. Loading Driver
			Class.forName("com.mysql.cj.jdbc.Driver");
			System.out.println("Driver Loaded Successfully.");
			
			// 2. Establishing connection
			Connection conn = DriverManager.getConnection(url, uname, password);
			System.out.println("Connection Established.");
			
			// 3. Creating Statement Object
			Statement stmt = conn.createStatement();
			System.out.println("Statement Created.");
			
			// Insert Operation
			stmt.executeUpdate(insertRecord);
			System.out.println("Insert Statement Successfull.");
			
			// Update Operation
			stmt.executeUpdate(updateRecord);
			System.out.println("Update Successfull.");
			
			// Delete Operation
			stmt.executeUpdate(deleteRecord);
			System.out.println("Delete Successfull");
			
			// Select Statement
			ResultSet rs = stmt.executeQuery("SELECT * FROM students");
			System.out.println("Statement Executed.");
			
			while(rs.next()) {
				System.out.println(rs.getInt(1) + "\t" + rs.getString(2) + "\t\t" + rs.getInt(3));
			}
			System.out.println("ResultSet Completed.");
			
			// 4. Close Connections
			conn.close();
			stmt.close();
			rs.close();
			
		} catch (Exception e) {
			System.out.println("=== Exception Occured!===");
			System.out.println(e.getMessage());
		}
	}

}
