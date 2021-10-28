import React from "react";
import './Styles/Profile.css'

const SinglePostView = ({ post }) => {

    var readTime = '<2 Minute Read';
    
    return (
        <div className = 'contentContainer'>
            <h1 className='blogTitle'>{post.title}</h1>
            <h6>{readTime}</h6>
            {/* <p className="mainParagraphs">
                {post.content}
            </p> */}
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
    )
};

export default SinglePostView;