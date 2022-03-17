const { hash } = require('bcryptjs');

const hashPassword = (password) => hash(password, 10);

module.exports = hashPassword;
