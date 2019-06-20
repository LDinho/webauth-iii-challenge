const jwt = require('jsonwebtoken');

const secrets = require('../../config/secrets');

module.exports = (req, res, next) => {
  //need to set a key named
  // authorization in the headers
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secrets.jwt, (err, payload) => {
      // payload comes from token.js
      if (err) {
        res.status(403).json({
          you: `are not authorized!`
        });
      } else {

        req.userId = payload.userId;

        next();
      }
    });
  } else {
    res.status(401).json({
      message: `you shall not pass - credentials needed!`
    });
  }
};
