package main;

import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.ResultSet;

public class DatabaseMetadata14a {

	public static void main(String[] args) {

		String url = "jdbc:mysql://localhost:3306/cvr_wt_course";
		String uname = "root";
		String password = "akashbuv";
		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			
			Connection conn = DriverManager.getConnection(url, uname, password);
			
			DatabaseMetaData dbmd = conn.getMetaData();
			
			System.out.println("Database Product Name: " + dbmd.getDatabaseProductName());
            System.out.println("Database Product Version: " + dbmd.getDatabaseProductVersion());
            System.out.println("Driver Name: " + dbmd.getDriverName());
            System.out.println("Driver Version: " + dbmd.getDriverVersion());
            System.out.println("User Name: " + dbmd.getUserName());
            System.out.println("URL: " + dbmd.getURL());
            System.out.println("Supports Transactions: " + dbmd.supportsTransactions());
            System.out.println("Tables in Database:");

            // Step 5: Retrieve all table names
            ResultSet rs = dbmd.getTables(null, null, "%", new String[]{"TABLE"});
            while (rs.next()) {
                System.out.println(" - " + rs.getString("TABLE_NAME"));
            }
            
            conn.close();
            rs.close();
			
		} catch (Exception e) {
			System.out.println("=== Exception ===");
			System.out.println(e.getMessage());
		}
	}

}
