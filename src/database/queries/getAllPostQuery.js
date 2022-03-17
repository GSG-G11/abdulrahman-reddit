const connection = require('../config/connection');

const getAllPostQuery = () => connection.query('SELECT name, post.id ,post, postTime ,postImg,votes,userId  FROM users INNER JOIN post ON (users.id = post.userId)  ');

module.exports = getAllPostQuery;
