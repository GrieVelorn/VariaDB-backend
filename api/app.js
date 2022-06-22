//import required packages
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
//import required router files
const example = require("./example/exampleRouter");
const auth = require("./auth/authRouter");
const authMiddleware = require("./auth/authMiddleware");

const cards = require("./cards/cardsRouter");

//define app
const app = express();

//middleware
app.use(helmet());
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

//define routes linking with imported files
app.use("/example", example);
app.use("/auth", auth);
app.use("/cards", cards);

//test api route
 app.get("/", (req, res) => {
   res.json("Hello from the app.js file!");
 });

//live routes

module.exports = app;
