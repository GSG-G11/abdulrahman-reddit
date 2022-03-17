const { join } = require('path');

// eslint-disable-next-line consistent-return
const getLogin = (req, res) => {
  if (req.id) return res.redirect('/home');
  res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'login.html'));
};

module.exports = getLogin;
