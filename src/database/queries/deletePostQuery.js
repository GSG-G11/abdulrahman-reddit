const connection = require('../config/connection');

const deletePostQuery = (id) => connection.query('DELETE FROM post WHERE id = $1', [id]);

module.exports = deletePostQuery;
