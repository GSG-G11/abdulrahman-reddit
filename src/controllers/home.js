const { join } = require('path');

const homeHandle = (req, res) => {
  if (!req.id) res.redirect('/login');
  res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'home.html'));
};

module.exports = homeHandle;
