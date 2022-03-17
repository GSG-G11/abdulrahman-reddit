const { getUserName } = require('../database/queries');

const displayUserName = (req, res) => {
  if (!req.id) return res.status(401).json({ err: 'unauthorized' });

  const userId = req.id;
  return getUserName(userId).then((data) => res.json(data.rows[0]));
};

module.exports = displayUserName;
