const router = require('express').Router();
const {
  signUp,
  logIn,
  addPost,
  getAllPost,
  getSignUp,
  getLogin,
  homeHandle,
  getAllPostForUser,
  getProfilePage,
  displayUserName,
  deletePost,
} = require('../controllers');
const { clientError, serverError } = require('../controllers/errors');
const { auth } = require('../utils/middleware');

router.get('/api/v1/login', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

router.route('/signUp').post(signUp).get(auth, getSignUp);

router.route('/login').post(logIn).get(auth, getLogin);

router.route('/posts').post(auth, addPost);

router.route('/allPost').get(getAllPost);

router.route('/home').get(auth, homeHandle);
router.route('/profile').get(getProfilePage);
router.route('/profile/post').get(auth, getAllPostForUser);
router.route('/delete/:id').delete(auth, deletePost);

router.get('/displayUserName', auth, displayUserName);

router.use(clientError);

router.use(serverError);
module.exports = router;
