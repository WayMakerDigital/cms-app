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
    const authBadge = 'DEMONSTRATION';
    var userName = 'Hackathon';
    var authorDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis rhoncus dui ut semper. Morbi suscipit mollis arcu vitae sollicitudin."

    return(
        // Profile Section
        <div id='profile'>
            <div className='profileSection'>
                <h1 className='authorName'>{userName}</h1>
                <h6 className='authorBadge'>{authBadge}</h6>
                <p className='aboutSection'>{authorDesc}</p>
                <Link to='/allblogs' className='viewAllButton'>View All by {userName}</Link>
                <div className='suggestionContainer'>
                    <h2 className='suggestionText'>Suggestions</h2>
                    <Suggestion />
                    <Suggestion />
                    <Suggestion />
                </div>
                <Link to='/CreatePost' className='moreBtn'>Create New Post</Link>
                <button onClick={test}>button</button>
                <label></label>
            </div>
            <SinglePostView />
        </div>
    )
}

export default Profile;
export var readTime;