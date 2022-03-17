const { addPostQuery } = require('../database/queries');

const addPost = (req, res) => {
  const {
    post, postTime, postImg,
  } = req.body;
  const userId = req.id;
  addPostQuery(userId, post, postTime, postImg).then((data) => {
    res.json(data.rows);
  });
};
module.exports = addPost;
