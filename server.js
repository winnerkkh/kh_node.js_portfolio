const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const router = require("./route/router");
const bodyParser = require("body-parser");

//When client sends a data to server, the data is normally formatted in JSON
//When the server receives the JSON data, bodyParser parses into Object
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

app.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    console.log("The server is running!!!");
  }
});
