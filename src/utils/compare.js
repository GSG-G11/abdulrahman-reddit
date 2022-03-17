const { compare } = require('bcryptjs');

const comparePassword = (password, hashPassword) => compare(password, hashPassword);

module.exports = comparePassword;
