const express = require("express");
const bodyParser = require("body-parser");
const db = require("./queries");
const path = require("path");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("client"));

// Set the root view to be the html file
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/client/index.html"));
});

// Set the routes for our queries
app.get("/users-nebraska", db.getUsersNebraska);
app.get("/users-sent", db.getUsersSent);
app.get("/users-sent-nebraska", db.getUsersSentNebraska);
app.get("/user-max-sent-nebraska", db.getMaxSentNebraska);

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
