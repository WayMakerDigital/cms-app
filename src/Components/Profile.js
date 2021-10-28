import React from 'react';
import axios from 'axios';
import { Link, useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from "react";
import Suggestion from './Suggestion';
import './Styles/Profile.css';
import SinglePostView from './SinglePostView';

function Profile() {

    const [post, setPost] = useState({
        author: '',
        title: '',
        content: '',
    });

    let { id } = useParams();

    const history = useHistory();

    useEffect(() => {
      
        async function fetchMyAPI() {
          const response = await axios.get(`http://localhost:8000/blog/${id}`);
          // console.log(response);
          setPost(response.data.singlepost);
        }
        fetchMyAPI()
    }, []);
    
    // All Variables.
    const authBadge = 'author';
    var userName = 'Hackathon';
    var authorDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis rhoncus dui ut semper. Morbi suscipit mollis arcu vitae sollicitudin."

    const handleEdit = () => {
        let path = `../Update/${id}`;
        history.push(path);
    }

    const handleDelete = () => {
        if (window.confirm("Are you sure?")) {
            confirmDelete()
            let path = '../allblogs';
            history.push(path);
        }
    }

    const confirmDelete = async () => {
        const response = await axios.delete(`http://localhost:8000/blog/${id}`);
        console.log(response);
    }

    return(
        // Profile Section
        <div className='layout'>
            <div className='sidebar'>
                <h1 className='authorName'>{userName}</h1>
                <h6 className='authorBadge'>{authBadge}</h6>
                <p className='aboutSection'>{authorDesc}</p>
                <div className="cta">
                <Link to='/allblogs' className='viewAllButton btn'>View All blogs</Link>
                <Link to='/CreatePost' className='createPostBtn btn'>Create Post</Link>
                </div>
                <div className='suggestionContainer'>
                    <h2 className='suggestionText'>Suggestions</h2>
                    <Suggestion />
                    <Suggestion />
                    <Suggestion />
                </div>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleEdit}>Edit</button>
            </div>
            <SinglePostView post={post} />
        </div>
    )
}

export default Profile;