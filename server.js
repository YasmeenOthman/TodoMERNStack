const express = require("express");
const db = require("./DataBase/db");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const model = require("./DataBase/todoModel");

const port = process.env.Port || 8000;
const app = express();

app.use(cors());
/*-----------use the middleware of body-parser---------------*/
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
/* ---------------------------------------
SERVE STATIC FILES IN SERVER
-------------------------------------------*/
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  // res.json({ message: "Hello from Express!" });
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

/*---------manage http request CRUD-------------*/

/*--------save the task(POST REQUEST)--------*/
app.post("/create", async (req, res) => {
  // console.log(req.body)
  try {
    const task = new model({ addedTask: req.body.addedTask });
    await task.save();
    res.send("item saved to database");
  } catch {
    res.status(400).send("unable to save to database");
  }
});
/*----------get task (GET REQUEST)-------------*/

app.get("/catch", async (req, res) => {
  try {
    const task = await model
      .aggregate([{ $sort: { date: -1, _id: 1 } }])
      .limit(25);
    res.send(task);
  } catch (err) {
    res.send(err);
  }
});

/*------ Edit and update the task(put request)----------*/
app.put("/edit/:id", async (req, res) => {
  try {
    const task = await model.findByIdAndUpdate(req.params.id, req.body.task);
    res.send(task);
  } catch (error) {
    res.send(error);
  }
});

/*----------delete task (delete request)-------*/
app.delete("/delete/:id", async (req, res) => {
  try {
    const task = await model.findByIdAndDelete(req.params.id);
    res.send(task);
  } catch (err) {
    res.send(err);
  }
});
/*-----------------setup the server --------------------------------*/

app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port}`);
});
