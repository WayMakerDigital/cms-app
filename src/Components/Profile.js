import React from 'react';
import { Link } from 'react-router-dom';
import Suggestion from './Suggestion';
import './Styles/Profile.css';
import SinglePostView from './SinglePostView';

function Profile() {

    const test = () => {
        fetch('http://localhost:8000/test', {
            method: "get",
            headers: {
                'Content-type': 'application/json'
            },
        })
        .then(res => {
            const tester = res.data;
            console.log(tester);
          });

    }

    
    // All Variables.
    const authBadge = 'author';
    var userName = 'Hackathon';
    var authorDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis rhoncus dui ut semper. Morbi suscipit mollis arcu vitae sollicitudin."

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
            </div>
            <SinglePostView />
        </div>
    )
}

export default Profile;