import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/AllBlogs.css'

const Blog = ({ post }) => {

    return(
        <Link to={`/single/${post.id}`}>
        <div className='blogSnippet'>
            <div>
                <img className='blogImg' src="https://i.ibb.co/QH059SY/y9DpT.jpg" alt="Placeholder" />
                <h3 className='biggerFont'>{post.title}</h3>
                <h6>Placeholder</h6>
                <h3>Description</h3>
                <p>{post.summary}</p>
            </div>
        </div>
        </Link>
    )
}


export default Blog;