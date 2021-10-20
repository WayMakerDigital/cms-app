import React from 'react';
import './Styles/Suggestion.css'

function Suggestion() {

    
    var blogSuggestionTitle = 'We made a title for this post.';
    var blogSuggestionDescription = "So you didn't have to";

    return (
        <div>
            <div className='suggestedContainer'>
                <div className='blogPreview'>
                    <h3>{blogSuggestionTitle}</h3>
                    <p>{blogSuggestionDescription}</p>
                    <button className='goToBtn'>Go To Blog</button>
                </div>
            </div>
        </div>
    )
}

export default Suggestion;
