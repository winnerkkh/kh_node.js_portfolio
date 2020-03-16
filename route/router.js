const express = require("express");
const route = express.Router();

//geting my experiences as an object
const experiences = require("../controller/experiences");
route.route("/experiences").get(experiences.getExperiences);

//Send mail to gmail for the feedback
const emailSend = require("../controller/emailSend");
route.route("/emailSend").post(emailSend.emailSendHandle);

module.exports = route;
