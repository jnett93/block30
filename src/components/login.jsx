import React, { useState } from 'react';


function LoginForm() {
  
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false); // To track if the user is logged in

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the login data to the server
    fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server, e.g., set a user token in local storage and update isLoggedIn state
        if (data.success) {
          // Assuming the server returns a token
          localStorage.setItem('userToken', data.data.token);
          setIsLoggedIn(true);
        } else {
          // Handle login failure, e.g., show an error message
          console.error('Login failed:', data.error);
        }
      })
      .catch((error) => {
        console.error('Error logging in:', error);
      });
  };

  return (
    <div className="holy-grail">
      <nav className="side-column"></nav>
      <div className='main-content'>
        <div className="login-container">
          {isLoggedIn ? (
            <div>
              <h1>Logged In!</h1>
              {/* Display logged-in content here */}
            </div>
          ) : (
              <div>
                <h2>Login to Post</h2>
                <form className="login-form">
                  <label htmlFor="username">Username:</label>
                  <input type="text" id="username" name="username" placeholder="Enter your username" />

                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" name="password" placeholder="Enter your password" />

                  <p>Don't have an account? <a href="#">Sign up here</a>.</p>
                  <br />

                  <button className="authenticate-button">Login</button>
                </form>
            </div>
          )}
        </div>
        
      </div>
      <nav className="side-column"></nav>
    </div>
  );
}

export default LoginForm;
