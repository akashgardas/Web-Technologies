package main;

import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.PreparedStatement;

import java.util.Scanner;

public class PreparedStatement12a {

	public static void main(String[] args) {
		String url = "jdbc:mysql://localhost:3306/cvr_wt_course";
		String uname = "root";
		String password = "akashbuv";
		
		String insertRecord = "INSERT INTO students(id, name, marks) VALUES (?, ?, ?)";
		
		try {
			Scanner sc = new Scanner(System.in);
			
			Class.forName("com.mysql.cj.jdbc.Driver");
			
			Connection conn = DriverManager.getConnection(url, uname, password);
			
			PreparedStatement pstmt = conn.prepareStatement(insertRecord);
			
			System.out.println("Id: ");
			int id = sc.nextInt();
			sc.nextLine();
			System.out.println("Name: ");
			String name = sc.nextLine();
			System.out.println("Marks: ");
			int marks = sc.nextInt();
			sc.nextLine();
			
			pstmt.setInt(1, id);
			pstmt.setString(2, name);
			pstmt.setInt(3, marks);
			
			int count = pstmt.executeUpdate();
			System.out.println(count + " records Inserted.");
			
			conn.close();
			pstmt.close();
			sc.close();
			
		} catch (Exception e) {
			System.out.println("=== Exception ===");
			System.out.println(e.getMessage());
		}
	}
}
