const hashPassword = require('./hash');
const comparePassword = require('./compare');
const CustomizedError = require('./customizedError');

module.exports = { hashPassword, comparePassword, CustomizedError };
