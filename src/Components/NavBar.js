import React from 'react';
import './Styles/NavBar.css';
import { Link } from 'react-router-dom';

import { Link } from 'react-router-dom';

const logoName = 'BLOG';

function NavBar() {
    return (
        <div className='navBar'>
            <Link to='/'>
                <h1 className="navBarText">
                    {logoName}
                </h1>
            </Link>
        </div>
    )
}

export default NavBar
