const { join } = require('path');

const getProfilePage = (req, res) => {
//   const cookies = req.cookies.token;
  res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'profile.html'));
};
// const getProfilePage = (req, res) => {
//     const cookies = req.cookies.token;
//     verify(cookies, process.env.SECRET_KEY, (err, decoded) => {
//       if (err) res.json({ msg: 'Un Authorized' });
//       else {
//         res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'profile.html'));
//       }
//     });
//   };

module.exports = getProfilePage;
