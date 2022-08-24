import React, { useState, useEffect } from 'react';

export default function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState(null);


  useEffect(() => {
    // console.log('use effect körs')
    async function fetchPosts() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await response.json();
      setPosts(posts)
    }

    fetchPosts()

  }, []);

  console.log('nedanför use effect')
  console.log('posts', posts)



  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      {posts ? posts[0].id : 'laddar'}
      {posts ? posts.map(post => <div>{post.id}</div>) : 'laddar'}

    </div>
  );
}