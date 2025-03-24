import mysql2 from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql2.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'hopeconnect'
}).promise();

async function testConnection() {
    try {
        const connection = await pool.getConnection();
        console.log('Connection has been established successfully.');
        connection.release(); // back to pool
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testConnection();

export default pool;
