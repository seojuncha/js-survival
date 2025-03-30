const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const todoRouter = require("./routes/todo");
app.use("/todos", todoRouter);

app.use((req, res, next) => {
  console.log(`Time: ${Date.now()}`);
  next();
});

app.get("/hello", (req, res) => {
  res.json("hello express");
});

app.post("/user", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  console.log(req.body);
  res.send("got post request");
});

app.post("/echo", (req, res) => {
  res.json(req.body);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
