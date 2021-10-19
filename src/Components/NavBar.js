import React from 'react';
import './Styles/NavBar.css'

const logoName = 'BLOG';

function NavBar() {
    return (
        <div className='navBar'>
            <h1 className="navBarText">
                {logoName}
            </h1>
        </div>
    )
}

export default NavBar
