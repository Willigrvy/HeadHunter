const loginHandler = async (event) =>{
    // Prevents browser from submitting the form
    event.preventDefault();

    // Get data from the form elements
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (username && password) {
        // Send the username and password to the server
        const response = await fetch('/api/headhunter/login', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert('Failed to log in');
        }
    }

    if (username && password) {
        // Send the username and password to the server
        const response = await fetch('/api/candidate/login', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert('Failed to log in');
        }
    }
}


document
  .querySelector('.login-form')
  .addEventListener('submit', loginHandler);
