const express = require("express");
const upload = require("../Midlleware/multer");
const koneksi = require("../Midlleware/Koneksi");
const imageController = require("../Controllers/imageController");

const router = express.Router();

router.post("/create", upload.array("file"), async (req, res) => {
  const sql =
    "INSERT INTO images (name, type, size, directory) VALUES (?,?,?,?)";
  const values = [
    req.file.filename,
    req.file.mimetype,
    req.file.size,
    req.file.destination,
  ];

  try {
    const [result] = await koneksi.query(sql, values);
    res.status(200).json({ Status: "Success", result });
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ error: "Error on database query" });
  }
});

router.get("/images", async (req, res) => {
  try {
    const [rows, fields] = await koneksi.query("SELECT * FROM images");

    if (rows.length === 0) {
      return res.status(404).json({ message: "No images found" });
    }

    return res.status(200).json({ images: rows });
  } catch (err) {
    console.error("Database error:", err);
    return res
      .status(500)
      .json({ error: "Failed to fetch images", details: err.message });
  }
});

// router.get("/images", imageController.index);
module.exports = router;
