'use strict';

const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

// serve static content for the app from the "public" directory in the application directory
app.use(express.static("public"));

// parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// express - handlebars
var expressHandlebars = require("express-handlebars");

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Timeout
app.use(timeout(15000));
app.use(haltOnTimedout);

function haltOnTimedout(req, res, next) {
    if (!req.timedout) next();
}

// Start our server so that it can begin listening to client requests
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

