const { join } = require('path');

const homeHandle = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'home.html'));
};

module.exports = homeHandle;
