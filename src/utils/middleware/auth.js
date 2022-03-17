const { verify } = require('jsonwebtoken');

const auth = (req, res, next) => {
  if (req.cookies.token) {
    const { token } = req.cookies;
    return verify(token, process.env.SECRET_KEY, (err, decoded) => {
      req.id = decoded.id;
      if (!req.id) return res.redirect('/signup');
      return next();
    });
  }

  return next();
};

module.exports = auth;
