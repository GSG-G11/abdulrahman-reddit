const { join } = require('path');

const getPost = (req, res) => res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'profile.html'));
module.exports = getPost;
