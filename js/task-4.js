const form = document.querySelector(`.login-form`)

form.addEventListener(`submit`, handler)

function handler(event) {
    event.preventDefault();



 const formData = {};
  const elements = event.currentTarget.elements;

  for (let i = 0; i < elements.length; i++) {
    let element = elements[i];

    if (element.tagName === 'INPUT') {
      if (element.value.trim() === '') {
        alert('All form fields must be filled in');
          return;
      }
      formData[element.name] = element.value.trim();
    }
  }

  console.log(formData);

  event.target.reset();
};