import React, { createContext, useContext, useState } from 'react';
import { AuthProvider, useAuth } from './auth'

// Create an AuthContext for managing authentication state
const AuthContext = createContext();

// Custom hook for using the authentication context
export const useAuth = () => useContext(AuthContext);

// AuthProvider component for managing authentication state
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Function to set the user upon login
  const login = (token) => {
    // Set the user in your context
    setUser(token);
  };

  // Function to clear the user upon logout
  const logout = () => {
    // Clear the user from your context
    setUser(null);
  };

  // Function to check if the user is authenticated
  const isAuthenticated = () => !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

// Export the AuthProvider component and useAuth hook
export { AuthProvider, useAuth };


// API functions for user registration, login, and fetching user data
const BASE_URL = 'https://strangers-things.herokuapp.com/api/2306-FTB-ET-WEB-PT';

export async function registerUser(username, password) {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
      })
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}

export async function login(username, password) {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
      })
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}

export async function myData(token) {
  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}

export default auth 