const makeEmail = require("./makeMail").makeMail;

const sendEmail = (req, res, next) => {
  let { name, phone, email, text } = req.body;
  if (name && (phone || email) && text) {
    makeEmail(name, phone, email, text)
      .then(message => {
        res.status(200).json({ message: message });
        next();
      })
      .catch(err => {
        res.status(500).json({ message: err });
      });
  } else {
    res.status(500).json({ message: "Params missing" });
  }
};

module.exports.sendEmail = sendEmail;
