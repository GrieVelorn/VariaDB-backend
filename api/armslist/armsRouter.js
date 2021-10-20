const express = require("express");
const router = express.Router();
const db = require("./armsModel.js");

router.get("/all", (req, res) => {
  try {
    db.findAll().then((e) => {
      res.status(201).json(e);
    });
  } catch (err) {
    res.status(401).json({ msg: err.message });
  }
});

router.post("/post", (req, res) => {
  const { body } = req;
  try {
    db.create(body).then((e) => {
      res.status(201).json(e);
    });
  } catch (err) {
    res.status(401).json({ msg: err.message });
  }
});

module.exports = router;
