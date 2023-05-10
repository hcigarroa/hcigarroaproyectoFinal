const jwt = require('jsonwebtoken');
const config = require('../config');

exports.getToken = function(user) {
  return jwt.sign(user, config.secret, { expiresIn: 3600 });
};