const registerFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-register').value.trim();
    const email = document.querySelector('#email-register').value.trim();
    const password = document.querySelector('#password-register').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/userRoutes', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to sign up.');
      }
    }
  };
    
  document.querySelector('.register-form').addEventListener('submit', registerFormHandler);