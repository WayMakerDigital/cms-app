import React from "react";
import { calculateReadtime } from "../Utils";
import './Styles/Profile.css'

const SinglePostView = ({ post }) => {

    
    var readTime = calculateReadtime(post.content.length);
    
    return (
        <div className = 'contentContainer'>
            <h1 className='blogTitle'>{post.title}</h1>
            <h6>{readTime}</h6>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
    )
};

export default SinglePostView;