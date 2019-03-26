const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: process.env.emailuser,
    clientId: process.env.clientId,
    clientSecret: process.env.clientSecret,
    refreshToken: process.env.refreshToken,
    accessToken: process.env.accessToken,
    expires: 1484314697598
  }
});

const makeMail = (name, phone, email, text) => {
  return new Promise((resolve, reject) => {
    let emailForm = "Nombre: " + name + "\nTelefono: " + phone;
    emailForm += "\nemail: " + email + "\nTexto: " + text;

    var mailOptions = {
      from: process.env.emailuser,
      // to: [process.env.email, process.env.emailIsra],
      to: [process.env.email],
      subject: "Contacto desde la pagina web nueva",
      text: emailForm
    };

    transporter.sendMail(mailOptions, (err, res) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve("Email sent");
      }
    });
  });
};

module.exports.makeMail = makeMail;
