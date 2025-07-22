// connect.js
const mysql = require('mysql2');

// ตั้งค่าการเชื่อมต่อฐานข้อมูล
const connection = mysql.createConnection({
  host: 'localhost',        // หรือใช้ IP เช่น '127.0.0.1'
  user: 'root',             // ใส่ชื่อผู้ใช้ของ MySQL
  password: 'null',// รหัสผ่านของ MySQL
  database: '' // ชื่อฐานข้อมูลที่ต้องการใช้
});

// เริ่มเชื่อมต่อ
connection.connect((err) => {
  if (err) {
    return console.error('❌ การเชื่อมต่อล้มเหลว:', err.message);
  }
  console.log('✅ เชื่อมต่อ MySQL สำเร็จแล้ว!');
});

// ตัวอย่าง: ดึงข้อมูลจากตาราง
connection.query('SELECT * FROM users', (err, results) => {
  if (err) {
    return console.error('เกิดข้อผิดพลาดตอน query:', err.message);
  }
  console.log('ข้อมูลจาก users:', results);
});

// ปิดการเชื่อมต่อเมื่อเสร็จ
connection.end();