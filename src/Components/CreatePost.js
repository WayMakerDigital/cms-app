import React from 'react';
import { useState } from 'react';

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

    const submitButton = (e) => {
        e.preventDefault();

        fetch('http://localhost:8000/create', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then((result) => result.json())
        .then((info) => { console.log(info); })
    };

    return(
        <form className='postForm' onSubmit={submitButton}>
            <input type='text' name='author' onChange={handleChange}/>
            <input type='text' name='title' onChange={handleChange}/>
            <input type='textarea' name='summary' onChange={handleChange}/>
            <input type='textarea' name='content' onChange={handleChange}/>
            <input className='submitButton' type='submit'/>

        </form>
    )

}

export default CreatePost;