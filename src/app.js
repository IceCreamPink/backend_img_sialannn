const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const migration = require("./Migrations/migrations");
const router = require("./Routers/roter");

const app = express();
const port = 3100;

migration();
app.use(cors());
app.use(bodyparser.json());
app.use("/api", router);

app.listen(port, () => {
  console.log("-----------------------");
  console.log(`Berhasil di port ${port}`);
  console.log("-----------------------");
});
