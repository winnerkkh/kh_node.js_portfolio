const express = require("express");
const route = express.Router();

//geting my experiences as an object
const experiences = require("../controller/experiences");
route.route("/experiences").get(experiences.getExperiences);

module.exports = route;
