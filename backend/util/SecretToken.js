require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.BACKEND_TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};