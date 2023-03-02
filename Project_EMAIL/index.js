const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const config =  require('./config.js');


//Configs
app.set('port', process.env.PORT || 3000);


// configure middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// define API route to send email
app.post('/send-email', (req, res) => {

  // create a transport object
  const transporter = nodemailer.createTransport({
    host: config.mail.MAIL_SERVICE,
    port: 587,
    secure: false,
    auth: {
      user: config.mail.MAIL_USER,
      pass: config.mail.MAIL_PASS,
    },
  });

  // create email message
  const mailOptions = {
    from: req.body.from,
    to: req.body.to,
    subject: req.body.subject,
    text: req.body.message,
  };

  // send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send(error.message);
    } else {
      res.status(200).send(`Email sent: ${info.response}`);
    }
  });
});

// start server
app.listen(config.app.port, () => {
  console.log('Server listening on port:' + config.app.port);
});
