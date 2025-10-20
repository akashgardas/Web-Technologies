package main;

import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.Statement;
import java.sql.ResultSet;

public class SelectOperation11b {

	public static void main(String[] args) {
		String url = "jdbc:mysql://localhost:3306/cvr_wt_course";
		String uname = "root";
		String password = "akashbuv";
		
		String selectRecords = "SELECT * FROM students";
		
		try {
			// 1. Loading Driver
			Class.forName("com.mysql.cj.jdbc.Driver");
			System.out.println("Driver Loading Successful.");
			
			// 2. Establish Connection
			Connection conn = DriverManager.getConnection(url, uname, password);
			System.out.println("Connection Established.");
			
			// 3. Create Statement Object
			Statement stmt = conn.createStatement();
			System.out.println("Statement Object Created.");
			
			// Select Operation
			ResultSet rs = stmt.executeQuery(selectRecords);
			System.out.println("Id\tName\tMarks");
			while (rs.next()) {
				System.out.println(rs.getInt(1) + "\t" + rs.getString(2) + "\t" + rs.getInt(3));
			}
			System.out.println("Result Set Completed.");
			
			conn.close();
			stmt.close();
			rs.close();
			
		} catch (Exception e) {
			System.out.println("=== Excepion Occured ===");
			System.out.println(e.getMessage());
		}
	}

}
