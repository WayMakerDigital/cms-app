import React from 'react';
import { Link } from 'react-router-dom';
import { calculateReadtime } from '../Utils';
import './Styles/AllBlogs.css'

const Blog = ({ post }) => {

    var readTime = calculateReadtime(post.content.length);
    var url;

    // post.imageURL ? url = post.imageURL : url = "https://i.ibb.co/QH059SY/y9DpT.jpg"
    if (post.imageURL === "No image" || post.imageURL === null || post.imageURL === "") {
        url = "https://i.ibb.co/QH059SY/y9DpT.jpg";
    } else {
        url = post.imageURL;
    }

    return(
        <Link to={`/single/${post.id}`}>
        <div className='blogSnippet'>
            <div>
                <img className='blogImg' src={url} alt="Placeholder"/>
                <h3 className='biggerFont'>{post.title}</h3>
                <h6>{readTime}</h6>
                <h3>Description</h3>
                <p>{post.summary}</p>
            </div>
        </div>
        </Link>
    )
}


export default Blog;