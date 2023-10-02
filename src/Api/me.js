// messages.js

const BASE_URL = 'https://strangers-things.herokuapp.com/api/2306-FTB-ET-WEB-PT';

export async function postMessage(token, postId, messageData) {
  try {
    const response = await fetch(`${BASE_URL}/posts/${postId}/messages`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // Use the token passed as an argument
      },
      body: JSON.stringify({
        message: messageData
      })
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}
