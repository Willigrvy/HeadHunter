const logout = async (event) => {
  
  const user_type = event.target.getAttribute('user-type');
  //alert(`user type is ${user_type}`);
    //Make a POST request to destroy the session on the back end
    const response = await fetch(`/api/${user_type}s/logout`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      // If successfully logged out, redirect to the home page
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }    
};
  
  document
  .querySelector('#logout')
  .addEventListener('click', logout);

  