// import React from 'react';
// import axios from 'axios';
// import { useState } from 'react';

// function CreatePost() {

//     const [post, setPost] = useState({
//         author: "",
//         title: "",
//         summary: "",
//         content: "",
//     })

//     const handleChange = (e) => {
//         const name = e.target.name;
//         const value = e.target.value;
//         setPost({...post, [name]: value });

//     }

//     const submitButton = async (e) => {
//         e.preventDefault();
//         console.log(post);
//         const response = await axios.post('http://localhost:8000/create', post);
//         console.log(response);
//         // fetch('http://localhost:8000/create', {
//         //     method: "POST",
//         //     headers: {
//         //         'Content-type': 'application/json'
//         //     },
//         //     body: post
//         // })
//         // .then((result) => result.json())
//         // .then((info) => { console.log(info); })
//     };

//     return(
//         <form className='postForm' onSubmit={submitButton}>
//             <input type='text' name='author' onChange={handleChange}/>
//             <input type='text' name='title' onChange={handleChange}/>
//             <input type='textarea' name='summary' onChange={handleChange}/>
//             <input type='textarea' name='content' onChange={handleChange}/>
//             <input className='submitButton' type='submit'/>

//         </form>
//     )

// }

// export default CreatePost;

import React from "react";
import axios from 'axios';
import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./Styles/CreatePost.css";

function CreatePost() {
  const [post, setPost] = useState({
    title: "",
    summary: "",
    content: "",
  });

  // Backup Code
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(post);
    const response = await axios.post("http://localhost:8000/create", post);
    console.log(response);
  };

  return (
    <div className="formContainer">
      <h1 className="formTitle">Create Blog Post</h1>
      <p className="formDescription">Please enter a Title, Summary and Blog Content to create a post.</p>
      <hr />
      <form className="postForm" onSubmit={handleSubmit}>
        {/* Title */}
        <h6 className="label">Blog Title</h6>
        <input
          className="titleInput"
          type="text"
          name="title"
          placeholder='e.g. "How to Bake a Cake"'
          onChange={handleChange}
        />

        {/* Summary */}
        <h6 className="label">Blog summary</h6>
        <input
          className="summaryInput"
          type="textarea"
          name="summary"
          placeholder="Summary must be no longer than 2 sentences."
          onChange={handleChange}
        />

        {/* Main Content */}
        <h6 className="label">Blog Content</h6>
        <div className="editor">
          <CKEditor
            editor={ClassicEditor}
            data=""
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              setPost({ ...post, content: data });
            }}
          />
        </div>
        <hr className='closing'/>
        {/* Button */}
        <input className="submitButton" type="submit" />
      </form>
    </div>
  );
}

export default CreatePost;