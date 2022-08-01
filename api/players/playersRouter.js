const express = require("express");
const router = express.Router();

const db = require("./playersModel");

router.get("/", (req, res) => {
  db.findAll().then((e) => {
    res.status(201).json(e);
  });
  //   res.status(201).json({ message: "hiii" });
});

router.get("/:playerGHG", (req, res) => {
  const { playerGHG } = req.params;
  db.findById("playerGHG", playerGHG)
    .then((e) => {
      res.status(200).json(e);
    })
    .catch((err) => res.status(400).json({ message: err.message }));
});

router.post("/new", (req, res) => {
  const body = req.body;
  db.create(body)
    .then((e) => {
      res.status(201).json({ message: "success" });
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
});

router.put("/:playerGHG", (req, res) => {
  const { playerGHG } = req.params;
  const body = req.body;
  const id = body.id;
  db.findById("playerGHG", playerGHG).then(
    db
      .update("playerGHG", playerGHG, body)
      .then((e) => {
        res.status(200).json({ message: "example updated", example: e });
      })
      .catch((err) => res.status(400).json({ message: err.message }))
  );
});

module.exports = router;
