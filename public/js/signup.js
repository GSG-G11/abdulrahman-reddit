const signupForm = document.getElementById('signupForm');
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const confirmInput = document.getElementById('confirmInput');
const contentErr = document.querySelector('.content');
// const submitBtn = document.getElementById('submitBtn');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = {
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
    confirmPassword: confirmInput.value,
  };
  fetch('/signUp', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => res.json())
    .then(({ msg }) => {
      if (msg === 'SignUp successfully') {
        window.location.assign('/');
      } else {
        contentErr.textContent = msg;
      }
    });
});
