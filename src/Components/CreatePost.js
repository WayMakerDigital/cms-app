import React, { useEffect } from "react";
import axios from 'axios';
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./Styles/CreatePost.css";
import {storage} from "../firebase/firebase"

function CreatePost() {
  const [post, setPost] = useState({
    title: "",
    summary: "",
    content: "",
    imageURL: ""
  });

  const [img, setImg] = useState(null)


  var history = useHistory();

  // Backup Code
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPost({ ...post, [name]: value });
  };

  const handleFile = async (e) => {
    setImg(e.target.files[0]);

  
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (post.title === ""){
      alert("Please enter title");
    } else if (post.summary === "") {
      alert("Please enter summary");
    } else if (post.content === "") {
      alert("please enter content");
    } else {
      if (img != null) {
        const ref = storage.ref(`/images/${img.name}`);
        const uploadTask = ref.put(img);
        uploadTask.on("state_changed", console.log, console.error, () => {
          ref
            .getDownloadURL()
            .then((url) => {
              setPost({ ...post, imageURL: url});
            });
        });
      } else {
        setPost({ ...post, imageURL: "No image"});
      }
    }
  };


  useEffect(() => {
    if (post.title != "") {
      async function fetchMyAPI() {
        const response = await axios.post("http://localhost:8000/create", post);
        console.log(response);
      }
      fetchMyAPI()
      var path = '../AllBlogs';
      history.push(path)
    }
  }, [post.imageURL]);

  return (
    <div className="formContainer">
      <h1 className="formTitle">Create Blog Post</h1>
      <p className="formDescription">Please enter a Title, Summary and Blog Content to create a post.</p>
      <hr />
      <form className="postForm" method="post" onSubmit={handleSubmit}>
        <h6 className='label'>Blog Image</h6>
        <input 
        className='noBorder'
        type="file"
        name='fileInput'
        placeholder=''
        multiple accept='image/*,gif/*'
        onChange={handleFile}
        />
        {/* Title */}
        <h6 className="label">Blog Title</h6>
        <input
          className="titleInput"
          type="text"
          name="title"
          placeholder='e.g. "How to Bake a Cake"'
          maxLength='150'
          onChange={handleChange}
        />

        {/* Summary */}
        <h6 className="label">Blog summary</h6>
        <input
          className="summaryInput"
          type="textarea"
          name="summary"
          placeholder="Summary must be no longer than 150 Characters."
          maxLength='150'
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
              console.log("Editor Successfully Added");
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
