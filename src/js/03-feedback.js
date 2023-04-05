// import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const objects = {};

form.addEventListener('input', onFormInput);

// localStorage.setItem('feedback-form-state', JSON.stringify(objects));

function onFormInput(evt) {
  objects[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(objects));
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  console.log('форма відправлена');
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(objects);
}

fillingHalfs();

function fillingHalfs(eve) {
  const saveMessage = localStorage.getItem('feedback-form-state');
  if (saveMessage) {
    const parseSavedMessage = JSON.parse(saveMessage);
    emailInput.value = parseSavedMessage.email;
    messageInput.value = parseSavedMessage.message;
  }
}
