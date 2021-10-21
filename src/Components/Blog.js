import React from 'react';
import './Styles/AllBlogs.css'

const Blog = ({ blogs, onEdit, onAdd, onDelete }) => {

    const blogTitle = "Placeholder Title"
    const readTime = '<5 min read'
    const suggestionSummary = 'Description'
    var blogDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis rhoncus dui ut semper. Morbi suscipit mollis arcu vitae sollicitudin."

    return(
        <div className='blogSnippet'>
            <div className='blogPost'>
                <img className='blogImg' src="https://i.ibb.co/QH059SY/y9DpT.jpg" alt="Placeholder" />
                <h3 className='biggerFont'>{blogTitle}</h3>
                <h6>{readTime}</h6>
                <h3>{suggestionSummary}</h3>
                <p>{blogDescription}</p>
            </div>
        </div>
    )
}


export default Blog;