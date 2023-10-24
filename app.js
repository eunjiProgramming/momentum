const loginInput = document.querySelector('#login-form input');
const loginButton = document.querySelector('#login-form button');

function onLoginBtnClick() {
  console.log(loginInput.value);
  console.log('hi');
}

loginButton.addEventListener('click', onLoginBtnClick);
