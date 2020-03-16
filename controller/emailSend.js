"use strict";
const nodemailer = require("nodemailer");

//To use custom env variable
require("dotenv").config();
let statusMsg = "";
exports.emailSendHandle = (req, res, next) => {
  //executed anonymous function
  (async () => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      // host: "smtp.ethereal.email",
      // port: 587,
      // secure: false, // true for 465, false for other ports
      service: "gmail",
      auth: {
        user: process.env.GOOGLE_ID, // generated ethereal user
        pass: process.env.GOOGLE_PASSWORD // generated ethereal password
      }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `KH React.js Portfolio <${process.env.GOOGLE_ID}@gmail.com>`, // sender address
      to: `${process.env.GOOGLE_ID}@gmail.com`, // list of receivers
      subject: "KH React.js Portfolio Feedback Email", // Subject line
      //text: req.body.message, // plain text body
      html: `<h1 style="font-size:20px;">Sent by ${req.body.name}(${req.body.email})</h1><p style="font-size:20px;">${req.body.message}</p>` // html body
    });

    //console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    // console.log("info", info);

    if (info.accepted !== null) {
      statusMsg = "success";
    }

    return statusMsg;
  })()
    .then(data => {
      //console.log("Callback data: " + data);
      statusMsg = data.toString();
      //console.log("statusMsg variable: " + statusMsg);
    })
    .catch(e => {
      console.log("Error: " + e);
    });

  console.log("바깥:", statusMsg);

  res.send(statusMsg);
};
