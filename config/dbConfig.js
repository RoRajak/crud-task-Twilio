import mysql from "mysql2/promise";
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  ssl: {
    ca: fs.readFileSync('./ca.pem'),  
  },
});

(async () => {
  try {
    const [results] = await pool.query(`SHOW TABLES LIKE 'contacts';`);
    
    if (results.length === 0) {
      await pool.query(`
        CREATE TABLE contacts (
          id INT AUTO_INCREMENT PRIMARY KEY,
          first_name VARCHAR(50),
          last_name VARCHAR(50),
          email VARCHAR(100),
          mobile_number VARCHAR(15)
        );
      `);
      console.log('Table created successfully!');
    } else {
      console.log('Table already exists!');
    }
  } catch (err) {
    console.error(err);
  }
})();

export default pool;
