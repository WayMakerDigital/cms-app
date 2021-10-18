import React from 'react';

function AllBlogs() {

    const allCont = {
        display: 'none',
    }

    const blogSnippet = {
        borderRadius: '7px',
        backgroundColor: 'white',
        marginRight: '20px',
        marginTop: '20px',
        marginLeft: '300px',
        padding: '10px',
        height: '150px',
        display: 'flex',
    }
    
    const blog = {
        margin: '0 60px',
        fontSize: '20px'
    }

    return(
        <div id='all' style={allCont}>
            <div style={blogSnippet}>
                <div style={blog}>
                    <h3>Title of Post</h3>
                    <p>This section will contain the title and author</p>
                </div>
                <div style={blog}>
                    <h3>Summary of Post</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>.
                </div>
                <div style={blog}><img src='https://via.placeholder.com/150' /></div>
            </div>
            <div style={blogSnippet}>
                <div style={blog}>
                    <h3>Title of Post</h3>
                    <p>This section will contain the title and author</p>
                </div>
                <div style={blog}>
                    <h3>Summary of Post</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>.
                </div>
                <div style={blog}><img src='https://via.placeholder.com/150' /></div>
            </div>
            <div style={blogSnippet}>
                <div style={blog}>
                    <h3>Title of Post</h3>
                    <p>This section will contain the title and author</p>
                </div>
                <div style={blog}>
                    <h3>Summary of Post</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>.
                </div>
                <div style={blog}><img src='https://via.placeholder.com/150' /></div>
            </div>
            <div style={blogSnippet}>
                <div style={blog}>
                    <h3>Title of Post</h3>
                    <p>This section will contain the title and author</p>
                </div>
                <div style={blog}>
                    <h3>Summary of Post</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>.
                </div>
                <div style={blog}><img src='https://via.placeholder.com/150' /></div>
            </div>
            <div style={blogSnippet}>
                <div style={blog}>
                    <h3>Title of Post</h3>
                    <p>This section will contain the title and author</p>
                </div>
                <div style={blog}>
                    <h3>Summary of Post</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>.
                </div>
                <div style={blog}><img src='https://via.placeholder.com/150' /></div>
            </div>
            <div style={blogSnippet}>
                <div style={blog}>
                    <h3>Title of Post</h3>
                    <p>This section will contain the title and author</p>
                </div>
                <div style={blog}>
                    <h3>Summary of Post</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>.
                </div>
                <div style={blog}><img src='https://via.placeholder.com/150' /></div>
            </div>
            <div style={blogSnippet}>
                <div style={blog}>
                    <h3>Title of Post</h3>
                    <p>This section will contain the title and author</p>
                </div>
                <div style={blog}>
                    <h3>Summary of Post</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>.
                </div>
                <div style={blog}><img src='https://via.placeholder.com/150' /></div>
            </div>
        </div>
    )
}


export default AllBlogs;