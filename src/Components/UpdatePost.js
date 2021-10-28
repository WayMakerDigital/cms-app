import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./Styles/CreatePost.css";

function UpdatePost() {
  const [post, setPost] = useState({
    // title: "",
    // summary: "",
    // content: "",
  });

  let { id } = useParams();
  let history = useHistory();

  // Backup Code
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(post);
    const response = await axios.patch(`http://localhost:8000/blog/${id}`, post);
    console.log(response);
    let path = `../single/${id}`;
    history.push(path);
  };

  useEffect(() => {
    
    async function fetchAPI() {
        const response = await axios.get(`http://localhost:8000/blog/${id}`);
        setPost(response.data.singlepost);
    }
    fetchAPI()
    
  }, []);

  return (
    <div className="formContainer">
      <h1 className="formTitle">Update Blog Post</h1>
      <p className="formDescription">
        Please enter a Title, Summary and Blog Content to create a post.
      </p>
      <hr />
      <form className="postForm" onSubmit={handleSubmit}>
        {/* Title */}
        <h6 className="label">Blog Title</h6>
        <input
          className="titleInput"
          type="text"
          name="title"
          placeholder='e.g. "How to Bake a Cake"'
          value={post.title}
          onChange={handleChange}
        />

        {/* Summary */}
        <h6 className="label">Blog summary</h6>
        <input
          className="summaryInput"
          type="textarea"
          name="summary"
          placeholder="Summary must be no longer than 2 sentences."
          value={post.summary}
          onChange={handleChange}
        />

        {/* Main Content */}
        <h6 className="label">Blog Content</h6>
        <div className="editor">
          <CKEditor
            editor={ClassicEditor}
            data={post.content}
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
        <hr className="closing" />
        {/* Button */}
        <input className="submitButton" type="submit" />
      </form>
    </div>
  );
}
export default UpdatePost;
