import React, { useState, useEffect } from 'react';


const Post = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPosts(data.data.posts);
      })
      .catch((err) => {
        setError(err.message);
        console.error(err);
      });
  }, []);

  const handleView = (postId) => {
    // Implement the view action here, e.g., navigate to a detailed view page
    console.log(`View post with ID: ${postId}`);
  };

  const handleEdit = (postId) => {
    // Implement the edit action here, e.g., navigate to an edit page
    console.log(`Edit post with ID: ${postId}`);
  };

  const handleDelete = (postId) => {
    // Implement the delete action here, e.g., send a delete request to the API
    console.log(`Delete post with ID: ${postId}`);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="holy-grail">
      <nav className="side-column"></nav>
      <div className="main-content">
        <h1>Post Lists</h1>
        <p>
          Introduction
          <br />
          Here at Stranger's Things we strive to provide you with an easy to consume API, so you can build out beautiful front-end experiences and leave the Data management to us. We have a small handful of endpoints, each documented below.
        </p>
        <div>
          {posts.length > 0 ? (
            posts.map((post) => (
              <div className="post-card" key={post._id}>
                <h2 className="post-title">{post.title}</h2>
                <p className="post-body">{post.description}</p>
                <p>Price: {post.price}</p>
                <p>Location: {post.location}</p>
                <p>Posted by: {post.author.username}</p>
                <p>Created At: {post.createdAt}</p>
                {/* Include other properties as needed */}
                <button className="view-btn" onClick={() => handleView(post._id)}>View</button>
                <button className="edit-btn" onClick={() => handleEdit(post._id)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(post._id)}>Delete</button>
              </div>
            ))
          ) : (
            <p>No posts available.</p>
          )}
        </div>
      </div>
      <nav className="side-column"></nav>
    </div>
  );
};
export default Post;