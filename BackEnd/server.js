const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");

//use cors all the time
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//allows for parsing body of http request
app.use(bodyParser.json());

//url of mongodb database
const myConnectionString =
  "mongodb+srv://jason:Claregalway93@cluster0.bbwhr.mongodb.net/players?retryWrites=true&w=majority";

//use connection string to connect to db
mongoose.connect(myConnectionString, { useNewUrlParser: true });

//define schema - how documents will look in db
const Schema = mongoose.Schema;

var playerSchema = new Schema({

  name: String,
  dateOfBirth: Date,
  nationality: String,
  position: String,
  squadNumber: String,
  goals: String,
  assists: String,
});

//create model using schema
var PlayerModel = mongoose.model("player", playerSchema);

//find all records in db & send back
app.get("/api/players", (req, res) => {
  PlayerModel.find((err, data) => {
    res.json(data);
  });
});

app.get("/api/players/:id", (req, res) => {
  console.log(req.params.id);

  //when id is found -
  PlayerModel.findById(req.params.id, (err, data) => {
    res.json(data);
  });
});

//delete player
app.delete("/api/players/:id", (req, res) => {
  console.log("Delete Player: " + req.params.id);

  PlayerModel.findByIdAndDelete(req.params.id, (err, data) => {
    res.send(data);
  });
});

//edit player
app.put("/api/players/:id", (req, res) => {
  console.log("Update Player: " + req.params.id);
  console.log(req.body);

  PlayerModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, data) => {
      res.send(data);
    }
  );
});
//pull data out of body using body parser
app.post("/api/players", (req, res) => {
  console.log("Player Data Receieved!");
  console.log(req.body.name);
  console.log(req.body.dateOfBirth);
  console.log(req.body.nationality);
  console.log(req.body.position);
  console.log(req.body.squadNumber);
  console.log(req.body.goals);
  console.log(req.body.assists);

  PlayerModel.create({
    name: req.body.name,
    dateOfBirth: req.body.dateOfBirth,
    nationality: req.body.nationality,
    position: req.body.position,
    squadNumber: req.body.squadNumber,
    goals: req.body.goals,
    assists: req.body.assists,
  });
  res.send("New Player Added Successfully!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
