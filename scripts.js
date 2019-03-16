const messageLink = document.querySelectorAll('.message a');
const loginForm = document.querySelector('.login-form');
const registrationForm = document.querySelector('.registration-form');

window.addEventListener('click', event => {
  if( event.target.nodeName.toLowerCase() == 'a')
    changeForms();
})

changeForms = () => {
  if( loginForm.style.display == 'none') {
    loginForm.style.display = 'block';
    registrationForm.style.display = 'none';
  } else {
    loginForm.style.display = 'none';
    registrationForm.style.display = 'block';
  }
};
