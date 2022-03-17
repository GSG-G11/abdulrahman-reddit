const { join } = require('path');

const post = (req, res) => {
  if (!req.id) return res.redirect('/signup');
  return res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'home.html'));
};

module.exports = post;
