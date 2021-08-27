import React from 'react';
import Scroll from './BackToTop';
import '../App.css';

function About(){
    return (
        <div>
            <h1>About Page</h1>
            <Scroll showBelow={10}/>
        </div>
    );
}

export default About;