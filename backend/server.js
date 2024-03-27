const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
app.use(cors());
dotenv.config();
connectDB();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});

app.listen(PORT, (err) => {
  if (err) console.log("error");
  else console.log(`server running at PORT ${PORT}`);
});
