const { getPost } = require('../database/queries');

const getAllPostForUser = (req, res) => {
  const { id } = req;
  getPost(id).then((data) => data.rows).then((d) => res.json(d));
};

module.exports = getAllPostForUser;
