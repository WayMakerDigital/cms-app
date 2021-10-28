import React from 'react';
import './Styles/AllBlogs.css'

const Blog = ({ post }) => {

    return(
        <div className='blogSnippet'>
            <div className='blogPost'>
                <img className='blogImg' src="https://i.ibb.co/QH059SY/y9DpT.jpg" alt="Placeholder" />
                <h3 className='biggerFont'>{post.title}</h3>
                <h6>Placeholder</h6>
                <h3>Description</h3>
                <p>{post.description}</p>
            </div>
        </div>
    )
}


export default Blog;