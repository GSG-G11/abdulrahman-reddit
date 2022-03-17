const { getPost } = require('../database/queries');

const getUserPost = (req, res) => {
  if (!req.body.id) res.status(401).redirect('/login');
  const userId = req.body.id;
  getPost(userId).then((data) => res.json(data.rows));
};

module.exports = getUserPost;
