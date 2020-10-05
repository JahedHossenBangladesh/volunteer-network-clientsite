import React from 'react';
import { Link} from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        
             <div className="header">
            <img src='https://i.imgur.com/9yEN2e7.png' alt=""/>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/donation">donation</Link>
                <Link to="/events">Events</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/login">registration</Link>
                <button>Sign Out</button>
                <button>Admin</button>
            </nav>
        </div>
    
    );
};

export default Header;