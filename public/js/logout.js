const logOutBtn = document.querySelector('.logOutBtn');

logOutBtn.addEventListener('click', () => {
  document.cookie = 'token=; exires=Thu, 01 Jan 1970 00:00:01 GMT';
  window.location.assign('/');
});
