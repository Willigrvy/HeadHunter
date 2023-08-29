const loginHandler = async (event) =>{
    // Prevents browser from submitting the form
    event.preventDefault();
    //alert('can press login button');
    // Get data from the form elements
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    const userType = document.querySelector('#user-type-login').value;

    if (username && password) {
        // Send the username and password to the server
        const response = await fetch(`/api/${userType}s/login`, {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
        });
    
    if(response.ok){
      if(userType == 'headhunter')
          document.location.replace('/dashboard');
      if(userType == 'candidate')
          document.location.replace('/jobs');
      } else {
          alert(response.statusText);
      }
    }
}


// signup handler
const signupFormHandler = async (event) => {
  event.preventDefault();
  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  let specialty = document.querySelector('#specialty-signup').value.trim();
  const userType = document.querySelector('#user-type-signup').value;

  console.log(username);
  console.log(name);
  console.log(password);
  console.log(email);
  console.log(specialty);
  console.log(userType);
  if(specialty == '')
    specialty = null;

 

  if( password.length < 10){
    alert('password needs to be at least 10 characters long')
  
    // if sucessful redirect user to dashboard
  }else{
     //send an api POST request to users
    const response = await fetch(`api/${userType}s/`,{
      method: 'POST',
      body: JSON.stringify({username, password, name, email, specialty}),
      headers: { 'Content-Type': 'application/json'},
    });
    if(response.ok){
      if(userType == 'headhunter')
        document.location.replace('/dashboard');
      if(userType == 'candidate')
        document.location.replace('/jobs');
    } else {
        alert(response.statusText);
    }
  } 

};

// signup event
document
  .querySelector('.sign-up-form')
  .addEventListener('submit', signupFormHandler);

  //login handler
document
  .querySelector('.login-form')
  .addEventListener('submit', loginHandler);


  