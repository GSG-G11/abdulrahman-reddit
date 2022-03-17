const { sign } = require('jsonwebtoken');
const { addUserQuery, checkEmail } = require('../database/queries');
const { signUpSchema } = require('../utils/validation');
const { hashPassword, CustomizedError } = require('../utils/index');

const signUp = (req, res, next) => {
  signUpSchema.validateAsync(req.body).then((data) => {
    const { name, email, password } = data;
    // eslint-disable-next-line consistent-return
    checkEmail(email).then((value) => {
      const emailExist = value.rows.length;
      if (emailExist !== 0) {
        throw CustomizedError('Email is used try use another', 400);
      } else {
        return hashPassword(password);
      }
    }).then((hashPass) => addUserQuery(name, email, hashPass))
      .then(({ rows }) => sign({ id: rows[0].id }, process.env.SECRET_KEY, (err, token) => {
        if (err) return res.send(err);
        return res.status(201).cookie('token', token).json({ msg: 'SignUp successfully' });
      }));
  })
    .catch((err) => {
      if (err.details) {
        next(CustomizedError(err.details[0].message, 400));
      } else {
        next(err);
      }
    });
};

module.exports = signUp;
