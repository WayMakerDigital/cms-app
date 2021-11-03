import React from "react";
import {useHistory } from 'react-router-dom';
import "./Styles/Suggestion.css";

const Suggestion = ({ post }) => {
  const history = useHistory();

  const handleClick = () => {
    let path = `../single/${post.id}`;
    history.push(path);
}


  return (
    <div className="suggestedContainer">
      <div className="blogPreview">
        <h3>{post.title}</h3>
        {/* <p>{blogSuggestionDescription}</p> */}
        <button className="goToBtn" onClick={handleClick}>Go To Blog</button>
      </div>
    </div>
  );
}

export default Suggestion;
