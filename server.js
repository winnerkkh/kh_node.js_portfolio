const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const router = require("./route/router");
const bodyParser = require("body-parser");

//When client sends a data to server, the data is normally formatted in JSON
//When the server receives the JSON data, bodyParser parses into Object
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Cross Domain Issue
// Enable Cross Origin Resource Sharing (CORS)
// This would enable CORS for all resources on your server.
// res.setHeader() allows you only to set a singular header and res.header() will allow you to set multiple headers. So use the one fit with your needs.
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(router);

app.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    console.log("The server is running!!!");
  }
});
