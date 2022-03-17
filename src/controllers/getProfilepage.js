const { join } = require('path');

const getProfilePage = (req, res) => {
  if (!req.id) res.redirect('/login');
  res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'profile.html'));
};

module.exports = getProfilePage;
