const { getAllPostQuery } = require('../database/queries');

const getAllPost = (req, res) => {
  // if (!res.id) return res.status(401).json({ err: 'unauthorized' });

  // const userId = res.id;
  getAllPostQuery().then((data) => res.json(data.rows));
};

module.exports = getAllPost;
