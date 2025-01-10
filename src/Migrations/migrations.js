const mysql = require("mysql2");
const pool = require("../Midlleware/Koneksi"); // Pastikan menggunakan pool

const createTableImages = async () => {
  const q = `CREATE TABLE IF NOT EXISTS images (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name varchar(500),
    type varchar(50),
    size int,
    directory TEXT,
    uploaded_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    deleted_at DATETIME DEFAULT NULL
  )`;

  try {
    await pool.query(q); 
    console.log("----------------------------");
    console.log("Tabel 'images' berhasil dibuat");
    console.log("----------------------------");
  } catch (err) {
    console.error("Error membuat tabel Images", err.stack);
  }
};

const migration = async () => {
  try {
    await pool.query("CREATE DATABASE IF NOT EXISTS Gallery_3");
    console.log("--------------------------");
    console.log("Database 'Gallery_3' berhasil dibuat");
    console.log("--------------------------");

    await pool.query("USE Gallery_3");

    await createTableImages();
  } catch (err) {
    console.error("Error koneksi atau migrasi", err.stack);
  }
};

module.exports = migration;
