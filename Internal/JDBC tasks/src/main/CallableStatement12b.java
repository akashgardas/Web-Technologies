package main;

import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.CallableStatement;
import java.sql.ResultSet;

public class CallableStatement12b {

	public static void main(String[] args) {
		String url = "jdbc:mysql://localhost:3306/cvr_wt_course";
		String uname = "root";
		String password = "akashbuv";
		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			
			Connection conn = DriverManager.getConnection(url, uname, password);
			CallableStatement cstmt = conn.prepareCall("{CALL get_student_by_id(?)}");
			cstmt.setInt(1, 3);
			
			ResultSet rs = cstmt.executeQuery();
			System.out.println("Id\tName\tMarks");
			while (rs.next()) {
				System.out.println(rs.getInt(1) + "\t" + rs.getString(2) + "\t" + rs.getInt(3));
			}
			System.out.println("Result Set Completed.");
			
			conn.close();
			cstmt.close();
			rs.close();
			
		} catch (Exception e) {
			System.out.println("=== Exception ===");
			System.out.println(e.getMessage());
		}
	}

}
