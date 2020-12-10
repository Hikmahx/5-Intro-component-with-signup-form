// UI variables
const form = document.querySelector('#signup-form');
const submitBtn = document.querySelector('.submit-btn'); 
const inputs = document.querySelectorAll('.input-group');
const fields = document.querySelectorAll('.field');
const contact = document.querySelector('.contact');

const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');



// Listen for submit
form.addEventListener('submit', (e)=>{
  fields.forEach(field=>{
    // Validate if input is empty
    if(field.value === ''){
      let name = field.getAttribute('name');
      console.log(`${name} is empty`);

      // Increase the width of the form during error 
      contact.style.height = 'fit-content';
      contact.style.padding = '4rem';

      // Clear placeholder text
      field.setAttribute('placeholder', '');

      // .input-group
      let input = field.parentElement;
      input.style.position = 'relative';
      input.style.marginBottom = '1rem';
      field.style.borderColor = 'red';

      // Create error text
      const err = document.createElement('p');
      err.className = 'error';
      err.appendChild(document.createTextNode(`${name} cannot be empty`));
      input.appendChild(err);

      // Add error icon
      let errIcon = document.createElement('span')
      errIcon.className = 'error-icon';
      errIcon.innerHTML = '<img src="images/icon-error.svg" alt="icon-error">'
      input.appendChild(errIcon);



    }else{ 
      e.target.nextElementSibling.remove();
    }

  })

  e.preventDefault();
});

form.addEventListener('input', (e)=>{
  // console.log(e.target.nextElementSibling.className)
  if(e.target.nextElementSibling.classList.contains('error') ||
     e.target.nextElementSibling.classList.contains('error-icon')){
    e.target.nextElementSibling.remove();
    e.target.nextElementSibling.remove();
  }
})

// Form Blur Event Listeners
firstName.addEventListener('blur', validateFirst);
lastName.addEventListener('blur', validateLast);
email.addEventListener('blur', validateEmail);
password.addEventListener('blur', validatePassword);



