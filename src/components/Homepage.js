import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return(
            <div className='homepage'>
                <div className="homepagetext">
                <h1>This is the Homepage</h1>
                <button className='homebutton'><Link to="/questions">CLICK HERE TO BEGIN</Link></button>
                </div>
            </div>

    );
}

export default Homepage;