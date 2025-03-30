const express = require("express");
const router = express.Router();

let todos = [];
let nextId = 1;

router.get("/", (req, res) => {
  res.json(todos);
});

router.get(":id", (req, res) => {
  const todo = todos.find((t) => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).send("Not found");
  res.json(todo);
});

router.post("/", (req, res) => {
  const todo = { id: nextId++, text: req.body.text };
  todos.push(todo);
  res.status(201).json(todo);
});

module.exports = router;
