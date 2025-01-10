const mysql = require("mysql2");
const koneksi = mysql.createPool({
  host: "localhost",
  user: "IceCreamPink",
  password: "admin123",
  database: "Gallery_3",
 
});

// koneksi.connect((err) => {
//   if (err) {
//     console.error("Error koneksi ke Database", err.stack);
//     return;
//   }
//   console.log("-----------------------------");
//   console.log("Berhasil koneksi ke Databases");
//   console.log("-----------------------------");
// });

module.exports = koneksi.promise();
