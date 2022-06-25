const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routeUrls = require("./routes/routes");
const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, function () {
  console.log("Database connected !");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // body-parser
app.use(cors());
app.use("/app", routeUrls);

const port = 5000;
app.listen(port, function () {
  console.log(`Server is runing on port ${port}`);
});
