// posts.js

const BASE_URL = 'https://strangers-things.herokuapp.com/api/2306-FTB-ET-WEB-PT';
const TOKEN_STRING_HERE = 'eyJfaWQiOiI1ZTg5MDY2ZGQ0MzkxNjAwTc1NTNlMDUiLCJ1c2VybmFtZSI6Im1hdHQiLCJpYXQiOjE1OD'

export async function fetchPosts() {
  try {
    const response = await fetch(`${BASE_URL}/posts`);

    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}

export async function makePost(token, postData) {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TOKEN_STRING_HERE}` // Use the token passed as an argument
      },
      body: JSON.stringify({
        post: postData // Use the postData passed as an argument
      })
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}

export async function updatePost(token, postId, postData) {
  try {
    const response = await fetch(`${BASE_URL}/posts/${postId}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TOKEN_STRING_HERE}` // Use the token passed as an argument
      },
      body: JSON.stringify({
        post: postData // Use the postData passed as an argument
      })
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}

export async function deletePost(token, postId) {
  try {
    const response = await fetch(`${BASE_URL}/posts/${postId}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TOKEN_STRING_HERE}` // Use the token passed as an argument
      }
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}
