import React from "react";
import axios from 'axios';
import Blog from "./Blog";
import "./Styles/AllBlogs.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllBlogs = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await axios.get('http://localhost:8000/allposts');
      console.log(response);
      setPosts(response.data);
    }
    fetchMyAPI()
  }, []);
  
  return (
    <div className="marginBox">
      <div>
        {posts.map((post) => {
          return <Blog post={post} />;
        })}
      </div>
      <Link to='/CreatePost'>
      <button className='createPostButton'>Create Post</button>
      </Link>
      
    </div>
  );
};

export default AllBlogs;
