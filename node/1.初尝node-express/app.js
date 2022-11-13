const express = require("express");
const app = express();
app.use(express.json());
// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json())
const routes = require("./routes/index");
const port = 3000;
routes(app);

app.get("/", (req, res) => {
  res.send("Hello World");
  console.log(req.query);
});

app.post("/", (req, res) => {
  console.log("post收到请求体:", req.body);
  res.status(201).send();
});

app.put("/:id", (req, res) => {
  console.log(`put收到请求参数：${req.params.id}`);
  console.log(`请求体为`, req.body);
  res.send();
});

app.delete("/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.status(204).send("message" + "删除成功");
});

app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});
