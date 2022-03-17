const connection = require('../config/connection');

const getIdUser = (name) => connection.query('SELECT id FROM users WHERE name = $1', [name]);

module.exports = getIdUser;
