//import required packages
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
//import required router files

const auth = require("./auth/authRouter");
const authMiddleware = require("./auth/authMiddleware");

const cards = require("./cards/cardsRouter");
const decks = require("./deck/decksRouter");
const players = require("./players/playersRouter");
const stores = require("./players/storeRouter");

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
app.use("/auth", auth);
app.use("/cards", cards);
app.use("/decks", decks);
app.use("/stores", stores);
app.use("/players", players);

//test api route
//app.get("/", (req, res) => {
//  res.json("Hello from the app.js file!");
// });

//live routes

module.exports = app;
