package main;

import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.Statement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;

public class ResultSetMetaData14b {

	public static void main(String[] args) {
		String url = "jdbc:mysql://localhost:3306/cvr_wt_course";
		String uname = "root";
		String password = "akashbuv";
		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			
			Connection conn = DriverManager.getConnection(url, uname, password);
			
			Statement stmt = conn.createStatement();
			
			ResultSet rs = stmt.executeQuery("SELECT * FROM students");
			
			ResultSetMetaData rsmd = rs.getMetaData();
			
			int columnCount = rsmd.getColumnCount();
            System.out.println("Total Columns: " + columnCount);
            for (int i = 1; i <= columnCount; i++) {
                System.out.println("Column " + i + ": " + rsmd.getColumnName(i));
                System.out.println(" - Type: " + rsmd.getColumnTypeName(i));
                System.out.println(" - Display Size: " + rsmd.getColumnDisplaySize(i));
                System.out.println("-----------------------------");
            }
            
            conn.close();
            stmt.close();
            rs.close();
			
		} catch (Exception e) {
			System.out.println("=== Exception ===");
			System.out.println(e.getMessage());
		}
	}

}
