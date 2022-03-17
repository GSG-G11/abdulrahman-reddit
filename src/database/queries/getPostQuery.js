const connection = require('../config/connection');

const getPost = (id) => connection.query('SELECT name, post.id ,post, postTime ,postImg,votes,userId FROM users INNER JOIN post ON (users.id = post.userId)WHERE users.id = $1', [id]);

module.exports = getPost;
