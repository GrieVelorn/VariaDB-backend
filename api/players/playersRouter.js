const express = require("express");
const router = express.Router();

const db = require("./playersModel");

router.get("/", (req, res) => {
  db.findAll().then((e) => {
    res.status(201).json(e);
  });
  //   res.status(201).json({ message: "hiii" });
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

router.put("/:playerGuid", (req, res) => {
  const body = req.body;
  const playerGuid = body.playerGuid;
  db.findById(playerGuid).then(
    db
      .update(playerGuid, body)
      .then((e) => {
        res.status(200).json({ example: e });
      })
      .catch((err) => res.status(400).json({ message: err.message }))
  );
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  try {
    db.findById(id).then((ex) => {
      db.remove(ex.id).then(() => {
        res
          .status(200)
          .json({ message: `Record id ${id} deleted.`, record: ex });
      });
    });
  } catch (err) {
    res.status(500).json({
      message: `Couldn't delete id ${id}`,
      error: err.message,
    });
  }
});

module.exports = router;
