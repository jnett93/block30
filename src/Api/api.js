/* Stranger's Things API  */

const COHORT_NAME = '2306-FTB-ET-WEB-PT';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
// const TOKEN_STRING_HERE= 'eyJfaWQiOiI1ZTg5MDY2ZGQ0MzkxNjAwTc1NTNlMDUiLCJ1c2VybmFtZSI6Im1hdHQiLCJpYXQiOjE1ODYwMzgzODF9'

/* `${BASE_URL}/posts` */

// USER ENDPOINTS //////////////////////////////////////////


// POST /users/register
// This route is used to create a new user account. 
// On success, you will be given a JSON Web Token to be passed to the server for requests requiring authentication.


const registerUser = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: ' ',
            password: ' '
          }
        })
      });
      const result = await response.json();
// You can log ▲▲▲ the result
// here ▼▼▼ to view the json object before returning it
      console.log(result)
      return result
    } catch (err) {
      console.error(err);
    }
  }

// POST /users/login
// This route is used for a user to login when they already have an account. 
// On success, you will be given a JSON Web Token to be passed to the server for requests requiring authentication.

const login = async () => {

    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: ' ',
            password: ' '
          }
        })
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }

// GET /users/me
// This route is used to grab an already logged in user's relevant data.
// It includes messages they have received, which might be useful if you wish to build out notifications for the user.
// You must pass a valid token with this request, or it will be rejected.

const myData = async () => {

    try {
      const response = await fetch(`${BASE_URL}/users/me`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TOKEN_STRING_HERE}`
        },
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }



  // POST ENDPOINTS//////////////////////////////////////

// GET /posts
// A request to this endpoint fetches an array of post objects.

const fetchPosts = async () => {
    try {
      const response = await fetch(`${BASE_URL}/posts`)
  
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }

// POST /posts
// A request to this endpoint will attempt to create a new post.
// You must pass a valid token with this request, or it will be rejected.

const makePost = async () => {

    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TOKEN_STRING_HERE}`
        },
        body: JSON.stringify({
          post: {
            title: "My favorite stuffed animal",
            description: "This is a pooh doll from 1973. It has been carefully taken care of since I first got it.",
            price: "$480.00",
            willDeliver: true
          }
        })
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }


//   PATCH /posts/POST_ID
//   This endpoint will edit a post whose _id is equal to POST_ID.
//   The request will be rejected if it is either missing a valid token, or if the user represented by the token is not the user that created the original post.

const updatePost = async () => {
    try {
      // You will need to insert a variable into the fetch template literal 
      // in order to make the POST_ID dynamic. 
      // 5e8d1bd48829fb0017d2233b is just for demonstration.
      const response = await fetch(`${BASE_URL}/posts/5e8d1bd48829fb0017d2233b`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TOKEN_STRING_HERE}`
        },
        body: JSON.stringify({
          post: {
            title: "My favorite stuffed animal",
            description: "This is a pooh doll from 1973. It has been carefully taken care of since I first got it.",
            price: "$480.00",
            location: "New York, NY",
            willDeliver: true
          }
        })
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }

// DELETE /posts/POST_ID
// This endpoint will delete a post whose _id is equal to POST_ID. 
// The request will be rejected if it is either missing a valid token, or if the user represented by the token is not the user that created the original post.
// Note that this API does not delete posts, but rather sets isActive to false.

const deletePost = async () => {
    try {
      const response = await fetch(`${BASE_URL}/posts/5e8d1bd48829fb0017d2233b`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TOKEN_STRING_HERE}`
        }
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }

//MESSAGE ENDPOINTS////////////////////////////////////
// A message is associated both to a specific post, as well as to the user which creates the message.

// POST /posts/POST_ID/messages
// This endpoint will create a new message for a post whose _id is equal to POST_ID. You must pass a valid token with this request, or it will be rejected.

const postMessage = async () => {
    try {
      const response = await fetch(`${BASE_URL}/posts/5e8929ddd439160017553e06/messages`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TOKEN_STRING_HERE}`
        },
        body: JSON.stringify({
          message: {
            content: "Do you still have this?  Would you take $10 less?"
          }
        })
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }
  

// Tests
// There are two test routes for you to use that don't interact directly with the data.

// GET /test/me
// GET /test/data