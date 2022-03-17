const { deletePostQuery } = require('../database/queries');

const deletePost = (req, res) => {
  if (!req.id) return res.status(401).json({ msg: 'unAuthorized' });

  const { id } = req.params;
  return deletePostQuery(id).then(() => res.status(202).send({ msg: 'post Deleted successfully' }));
};

module.exports = deletePost;
