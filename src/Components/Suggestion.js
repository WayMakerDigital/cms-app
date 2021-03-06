import React from "react";
import {useHistory } from 'react-router-dom';
import { calculateReadtime } from "../Utils";
import "./Styles/Suggestion.css";

const Suggestion = ({ post }) => {

  const history = useHistory();

  const handleClick = () => {
    let path = `../single/${post.id}`;
    history.push(path);
  }
  var readTime = calculateReadtime(post.content.length);

  return (
    <div className="suggestedContainer">
      <div className="blogPreview">
        <h3 className='blogTitle'>{post.title}</h3>
        <h6>{readTime}</h6>
        <button className="goToBtn" onClick={handleClick}>Go To Blog</button>
      </div>
    </div>
  );
}

export default Suggestion;
