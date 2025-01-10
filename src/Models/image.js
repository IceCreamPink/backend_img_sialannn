const koneksi = require("../Midlleware/Koneksi");

const getImages = (callback) => {
  const q = `select * from images where deleted_at is null`;
  koneksi.query(q, callback);
};

module.exports = {getImages};
