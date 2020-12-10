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

      /* Prevents mutliple instances of the same error from inserting and
       removes validation err if present */
      inputs.forEach(input=>{
        if(input.childElementCount >3){
          if(input.children[1].innerHTML.includes('valid')){
            input.children[1].remove();
          }
          input.lastElementChild.remove();
        }
      })

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


function validateFirst(e) {
  const re = /^[a-zA-Z]{2,10}(\s?)$/;
  if(!re.test(firstName.value)){
    let name = firstName.getAttribute('name');
    let id  = firstName;
    e.target.parentElement.style.position = 'relative';
    errorDisplay(name,id);

    preventSameErrors(e);
  }
  else{
    console.log(`First Name: ${e.target.value}`);
  }
}

function validateLast(e) {
  const re = /^[a-zA-Z]{2,15}(\s?)$/;
  if(!re.test(lastName.value)){
    let name = lastName.getAttribute('name');
    let id  = lastName;
    e.target.parentElement.style.position = 'relative';
    errorDisplay(name, id);

    preventSameErrors(e);
  }
  else{
    console.log(`Last Name: ${e.target.value}`);
  }
}

function validateEmail(e) {
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(!re.test(email.value)){
    let name = email.getAttribute('name');
    let id  = email;
    e.target.parentElement.style.position = 'relative';
    errorDisplay(name, id);

    preventSameErrors(e);
  }
  else{
    console.log(`Email: ${e.target.value}`);
  }
}

function errorDisplay(name, id){
  // Create error text
  // e.target.style.color = 'red';
  const err = document.createElement('p');
  err.className = 'error';
  err.appendChild(document.createTextNode(`Looks like this is not a valid ${name}`));
  id.parentElement.appendChild(err);
}

function preventSameErrors(e){
    // Prevents mutliple instances of the same error from inserting
    if(e.target.parentElement.childElementCount >2){
      e.target.parentElement.lastElementChild.remove();
    }
}