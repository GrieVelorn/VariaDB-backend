const express = require("express");
const router = express.Router();

const db = require("./storeModel");

router.get("/", (req, res) => {
  db.findAll().then((e) => {
    res.status(201).json(e);
  });
  //   res.status(201).json({ message: "hiii" });
});

router.get("/:storeGHG", (req, res) => {
  const { storeGHG } = req.params;
  db.findById("storeGHG", storeGHG)
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

router.put("/:storeGHG", (req, res) => {
  const { storeGHG } = req.params;
  const body = req.body;
  const id = body.id;
  db.findById("storeGHG", storeGHG).then(
    db
      .update("storeGHG", storeGHG, body)
      .then((e) => {
        res.status(200).json({ message: "example updated", example: e });
      })
      .catch((err) => res.status(400).json({ message: err.message }))
  );
});

router.delete("/:storeGHG", (req, res) => {
  const { id } = req.params;
  try {
    db.findById("storeGHG", storeGHG).then((ex) => {
      db.remove("storeGHG", storeGHG).then(() => {
        res
          .status(200)
          .json({ message: `storeGHG ${id} deleted.`, example: ex });
      });
    });
  } catch (err) {
    res.status(500).json({
      message: `Couldn't delete storeGHG ${id}`,
      error: err.message,
    });
  }
});

module.exports = router;
