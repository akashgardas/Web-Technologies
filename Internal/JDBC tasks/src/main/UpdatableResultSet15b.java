package main;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class UpdatableResultSet15b {

	public static void main(String[] args) {
		String url = "jdbc:mysql://localhost:3306/cvr_wt_course";
		String uname = "root";
		String password = "akashbuv";
		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			
			Connection conn = DriverManager.getConnection(url, uname, password);
			
			Statement stmt = conn.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);
			
			ResultSet rs = stmt.executeQuery("SELECT * FROM students");
			
			// Insert new row
            rs.moveToInsertRow();
            rs.updateInt("id", 10);
            rs.updateString("name", "Yoooo");
            rs.updateInt("marks", 92);
            rs.insertRow();
            System.out.println("Inserted new record with ID 10");

            // Delete row with id=2
            rs.beforeFirst();
            while (rs.next()) {
                if (rs.getInt("id") == 2) {
                    rs.deleteRow();
                    System.out.println("Deleted record with ID 2");
                }
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
