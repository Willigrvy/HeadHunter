// const logout = async () => {
//     const user_type = document.querySelector('#logout').getAttribute('user_type');

//     // Make a POST request to destroy the session on the back end
//     const response = await fetch(`/api/${user_type}s/logout`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//     });
  
//     if (response.ok) {
//       // If successfully logged out, redirect to the login page
//       document.location.replace('/login');
//     } else {
//       alert(response.statusText);
//     }

    
// };
  
//   document
//   .querySelector('#logout')
//   .addEventListener('click', logout);

  