const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { dbConnector } = require("./src/const");

const userAuth = require("./src/api/auth");

mongoose
  .connect(dbConnector)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("Error in connecting DB");
    console.log(err);
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/auth", userAuth);

const port = 4040;
app.listen(4040, () => {
  console.log(`Server is running on port: ${port}`);
});
