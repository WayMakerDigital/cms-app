import React from 'react';
import './Styles/AllBlogs.css'

const Blog = ({ blogs, onEdit, onAdd, onDelete }) => {

    const blogTitle = "This is Placeholder Blog Post, Titles will change."
    const readTime = '<5 min read'
    const suggestionSummary = 'Short Description'
    var blogDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis rhoncus dui ut semper. Morbi suscipit mollis arcu vitae sollicitudin."

    return(
        // <div id='all' className='allCont'>
            <div className='blogSnippet'>
                <div className='blogPost'>
                    <img className='blogImg' src="https://i.ibb.co/QH059SY/y9DpT.jpg" alt="Placeholder" />
                    <h3 className='biggerFont'>{blogTitle}</h3>
                    <h6>{readTime}</h6>
                    <h3>{suggestionSummary}</h3>
                    <p>{blogDescription}</p>
                </div>
            </div>
        // </div>
    )
}


export default Blog;