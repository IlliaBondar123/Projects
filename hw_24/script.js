let form = document.forms.main;
console.log(form);
let btn = document.querySelector('button');

form.addEventListener('submit', function (e) {
  e.preventDefault()
  console.log('send');
});

function submitForm() {
  let nameInput = document.forms.main.elements.text;
  let age = document.forms.main.elements.age;
  let message = document.forms.main.elements.message;

  if (nameInput.value === '' || age.value === '' || message.value === '') {
    alert('Заповніть форму');
  } else {
    let output = 'Ім\'я: ' + nameInput.value + '\nВік: ' + age.value + '\nПовідомлення: ' + message.value;
    alert(output);
  }
};

