const { join } = require('path');
const { verify } = require('jsonwebtoken');

const getProfilePage = (req, res, next) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'profile.html'));
};

module.exports = getProfilePage;
