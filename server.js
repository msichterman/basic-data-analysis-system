const express = require("express");
const bodyParser = require("body-parser");
const db = require("./queries");
const path = require("path");
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");
const app = express();
const port = 3000;

// Live reload to allow for rapid development and hot reload ---------------
// Open livereload high port and start to watch client directory for changes
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "client"));

// Ping browser on Express boot, once browser has reconnected and handshaken
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

app.use(connectLivereload());
// -------------------------------------------------------------------------

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

  if (process.send) {
    process.send("online");
  }
});
