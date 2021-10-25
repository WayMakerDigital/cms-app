import React from 'react';
import Blog from './Blog';
import './Styles/AllBlogs.css';


function AllBlogs() {



    return(
        <div className='marginBox'>
            <div>
              <Blog />   
              <Blog />   
              <Blog /> 
              <Blog /> 
              <Blog />   
              <Blog />   
              <Blog /> 
              <Blog /> 
              <Blog />   
            </div>  
        </div>
    )
}


export default AllBlogs;