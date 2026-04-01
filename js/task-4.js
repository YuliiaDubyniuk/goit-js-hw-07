const form = document.querySelector('.login-form');
form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const elements = Array.from(form.elements);
  const formFields = elements.filter(el => el.name);

  // check if all fields are filled in
  const isAllFilled = formFields.every(el => el.value.trim() !== '');
  if (!isAllFilled) {
    alert('All form fields must be filled in');
    return;
  }

  // create an object with the name and value of each field
  const formData = {};
  formFields.forEach(el => (formData[el.name] = el.value.trim()));
  console.log(formData);

  form.reset();
}
