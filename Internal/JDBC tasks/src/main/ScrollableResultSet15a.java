package main;

import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.Statement;
import java.sql.ResultSet;

public class ScrollableResultSet15a {

	public static void main(String[] args) {
		String url = "jdbc:mysql://localhost:3306/cvr_wt_course";
		String uname = "root";
		String password = "akashbuv";
		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			
			Connection conn = DriverManager.getConnection(url, uname, password);
			
			Statement stmt = conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
			
			ResultSet rs = stmt.executeQuery("SELECT * FROM students");
			
			System.out.println("Cursor moves forward:");
            while (rs.next()) {
                System.out.println(rs.getInt("id") + "\t" + rs.getString("name") + "\t" + rs.getInt("marks"));
            }

            System.out.println("\nCursor moves backward:");
            while (rs.previous()) {
                System.out.println(rs.getInt("id") + "\t" + rs.getString("name") + "\t" + rs.getInt("marks"));
            }

            // Move to first row
            rs.first();
            System.out.println("\nFirst Row: " + rs.getInt("id") + "\t" + rs.getString("name"));

            // Move to last row
            rs.last();
            System.out.println("Last Row: " + rs.getInt("id") + "\t" + rs.getString("name"));
			
            conn.close();
            stmt.close();
            rs.close();
			
		} catch (Exception e) {
			System.out.println("=== Exception ===");
			System.out.println(e.getMessage());
		}
	}

}
