const { join } = require('path');

const getSignUp = (req, res) => {
  if (req.id) { return res.redirect('/home'); }
  return res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'signup.html'));
};

module.exports = getSignUp;
