// const mlt = require("multer");
// const storage = mlt.diskStorage({
//   destination: function (req, file, cb) {
//     return cb(null, "../Images");
//   },
//   filename: function (req, file, cb) {
//     return cb(null, `${Date.now()}_${file.originalname}`);
//   },
// });

// const multer = mlt({ storage });

// module.exports = multer;
const mlt = require("multer");
const path = require("path");
const fs = require("fs");

const storage = mlt.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, "../Images");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    console.log("Menyimpan file di:", dir);
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}_${file.originalname}`;
    console.log("Nama file yang disimpan:", uniqueSuffix);
    cb(null, uniqueSuffix);
  },
});

const multer = mlt({ storage });

module.exports = multer;
