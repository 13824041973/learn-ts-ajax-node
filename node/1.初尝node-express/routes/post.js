const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ mseeage: req.query, id: 123 });
});

router.post("/", (req, res) => {
  res.status(201).send(req.body);
});

router.put("/:id", (req, res) => {
  res.send({ id: req.params.id, body: req.body });
});

router.delete("/:id", (req, res) => {
  res.send({ id: req.params.id, body: req.body });
});

module.exports = router