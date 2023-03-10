const form = document.querySelector('form');
  const passwordInput = document.querySelector('#password');

  form.addEventListener('submit', (event) => {
    const password = passwordInput.value.trim();

    if (password.length > 6) {
      event.preventDefault(); // Prevent form submission
      alert('Password is too long. Please enter a password that is at most 6 characters long.');
      passwordInput.focus();
    }
    else{
  alert('successful registration')    
    }
  });