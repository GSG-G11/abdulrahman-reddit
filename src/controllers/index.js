const signUp = require('./signUp');
const logIn = require('./login');
const addPost = require('./addPost');
const getPost = require('./getPost');
const getUserPost = require('./getUserPost');
const getSignUp = require('./getSignUp');
const getLogin = require('./getLogin');
const getAllPost = require('./getAllPost');
const homeHandle = require('./home');
const getProfilePage = require('./getProfilepage');
const getAllPostForUser = require('./getPostForUser');
const displayUserName = require('./getUserName');
const deletePost = require('./deletePost');

module.exports = {
  signUp,
  logIn,
  addPost,
  getPost,
  getUserPost,
  getSignUp,
  getAllPost,
  getLogin,
  homeHandle,
  getProfilePage,
  getAllPostForUser,
  displayUserName,
  deletePost,
};
