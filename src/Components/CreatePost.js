import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import './Styles/CreatePost.css'

function CreatePost() {

    const [post, setPost] = useState({
        author: "",
        title: "",
        summary: "",
        content: "",
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPost({...post, [name]: value });

    }

    const submitButton = async (e) => {
        e.preventDefault();
        console.log(post);
        const response = await axios.post('http://localhost:8000/create', post);
        console.log(response);
        // fetch('http://localhost:8000/create', {
        //     method: "POST",
        //     headers: {
        //         'Content-type': 'application/json'
        //     },
        //     body: post
        // })
        // .then((result) => result.json())
        // .then((info) => { console.log(info); })
    };

    return(
        <div className='formContainer'>
            <form className='postForm' onSubmit={submitButton}>

                {/* Author */}
                <h2 className='label'>
                    Author
                </h2>
                <input
                className='authorInput'
                type='text' 
                name='author' 
                placeholder='e.g. Hackathon' 
                onChange={handleChange}
                />

                {/* Title */}
                <h2 className='label'>
                    Blog Title
                </h2>
                <input 
                className='titleInput'
                type='text' 
                name='title' 
                placeholder='e.g. How We Made a CMS App in Less Than a Month that actually *kinda* works!' 
                onChange={handleChange}
                />

                {/* Summary */}
                <h2 className='label'>
                    Short Summary
                </h2>
                <input 
                className='summaryInput'
                type='textarea' 
                name='summary' 
                placeholder='e.g. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' 
                onChange={handleChange}
                />

                {/* Main Content */}
                <h2 className='label'>
                    Content
                </h2>
                <input 
                className='contentInput'
                type='textarea' 
                name='content' 
                placeholder='< Insert RTE Here >' 
                onChange={handleChange}
                />

                {/* Button */}
                <input
                className='submitButton' 
                type='submit'
                />
            </form>
        </div>
          
    )

}

export default CreatePost;