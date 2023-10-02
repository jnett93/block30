import React, { useState, useEffect } from 'react';


function UserProfile() {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const userToken = localStorage.getItem('userToken');

      if (!userToken) {
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch('https://strangers-things.herokuapp.com/api/2306-FTB-ET-WEB-PT', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${userToken}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        if (data.success) {
          setUserData(data.data);
          setIsLoggedIn(true);
        } else {
          console.error('Error fetching user data:', data.error);
        }

        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
              <h2>Login to Message</h2>
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

export default UserProfile;