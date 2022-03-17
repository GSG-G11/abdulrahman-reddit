const connection = require('../config/connection');

const getProfile = (id) => connection.query('SELECT * FROM post WHERE userId = $1', [id]);

module.exports = getProfile;
