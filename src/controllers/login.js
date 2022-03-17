const { sign } = require('jsonwebtoken');
const { checkUser } = require('../database/queries');
const { loginSchema } = require('../utils/validation');
const { comparePassword, CustomizedError } = require('../utils/index');

const logIn = (req, res, next) => {
  const { email, password } = req.body;
  loginSchema.validateAsync(req.body).then(() => checkUser(email)).then((value) => {
    const userIsFound = value.rows.length;
    if (!userIsFound) {
      throw CustomizedError('The email you entered isn’t connected to an account. please Create an account', 403);
    }
    const { password: passFromDB, id } = value.rows[0];
    return comparePassword(password, passFromDB).then((isSuccess) => {
      if (isSuccess) {
        sign({ id }, process.env.SECRET_KEY, (err, token) => {
          if (err) return res.send(err);
          return res.status(201).cookie('token', token).json({ msg: 'logIn successfully' });
        });
      } else {
        throw CustomizedError('password Invaild try again', 403);
      }
    });
  })
    .catch((err) => {
      if (err.details) {
        next(CustomizedError(err.details[0].message, 403));
      }
      next(err);
    });
};

module.exports = logIn;
