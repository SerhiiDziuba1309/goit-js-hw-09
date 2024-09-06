const formData = {
  email: '',
  message: '',
};

const saveKey = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

const saveToLocalStorage = () => {
  localStorage.setItem(saveKey, JSON.stringify(formData));
};
const loadFromLocalStorage = () => {
  const savedData = localStorage.getItem(saveKey);
  return savedData ? JSON.parse(savedData) : null;
};

document.addEventListener('DOMContentLoaded', () => {
  const savedData = loadFromLocalStorage();
  if (savedData) {
    formData.email = savedData.email || '';
    formData.message = savedData.message || '';
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
});
form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  saveToLocalStorage();
});
form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);

  localStorage.removeItem(saveKey);
  formData.email = '';
  formData.message = '';
  form.reset();
});
