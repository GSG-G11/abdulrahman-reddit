const Connection = require('../config/connection');

const addPostQuery = (id, post, postTime, postImg) => Connection.query('INSERT INTO post (post,postTime,postImg,userId) VALUES ($1, $2, $3,$4) RETURNING *', [post, postTime, postImg, id]);

module.exports = addPostQuery;
