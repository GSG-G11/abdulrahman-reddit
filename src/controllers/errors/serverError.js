const { join } = require('path');

const serverError = (error, req, res, next) => {
  if (error.status) {
    res.json({ message: error.message, status: error.status });
    // next();
  } else {
    res.sendFile(join(__dirname, '..', '..', '..', 'public', 'html', '500.html'));
  }
};

module.exports = serverError;
